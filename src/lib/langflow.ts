export type ChatMessage = {
  role: "user" | "assistant" | "system";
  content: string;
};

export type LangflowRunResponse = {
  outputs?: Array<{
    outputs?: Array<{
      results?: {
        message?: { text?: string } | { data?: { text?: string } };
        text?: string;
      };
      artifacts?: unknown;
    }>;
  }>;
  // Some deployments return a flat shape
  message?: { text?: string } | string;
  text?: string;
};

function getEnv(key: string): string | undefined {
  const value = (import.meta as any).env?.[key];
  return typeof value === "string" && value.trim().length > 0 ? value : undefined;
}

const BASE_URL = getEnv("VITE_LANGFLOW_BASE_URL");
const FLOW_ID = getEnv("VITE_LANGFLOW_FLOW_ID");
const API_KEY = getEnv("VITE_LANGFLOW_API_KEY");

export function isLangflowConfigured(): boolean {
  // If no BASE_URL, we will fall back to the dev proxy at /langflow
  return Boolean((BASE_URL || import.meta.env.DEV) && FLOW_ID && API_KEY);
}

export async function sendToLangflow(prompt: string, sessionId?: string): Promise<string> {
  if (!FLOW_ID || !API_KEY) {
    throw new Error("Langflow env vars missing. Please set VITE_LANGFLOW_FLOW_ID and VITE_LANGFLOW_API_KEY");
  }

  const base = BASE_URL && BASE_URL.trim().length > 0
    ? BASE_URL.replace(/\/$/, "")
    : "/langflow"; // dev proxy fallback
  const url = `${base}/api/v1/run/${encodeURIComponent(FLOW_ID)}?stream=false`;

  const payload = {
    input_type: "chat",
    output_type: "chat",
    input_value: prompt,
    tweaks: {},
    session_id: sessionId,
  } as const;

  const controller = new AbortController();
  const timeoutMs = 150000; // 150s to match proxy tolerance
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  async function doRequest(): Promise<Response> {
    return await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": API_KEY,
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
  }

  let response: Response;
  try {
    response = await doRequest();
  } catch (err) {
    // simple one-time retry on abort/network
    if ((err as any)?.name === "AbortError" || (err as any)?.code === "ECONNRESET") {
      clearTimeout(timeout);
      // new controller for retry
      const retryController = new AbortController();
      setTimeout(() => retryController.abort(), timeoutMs);
      response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": API_KEY,
        },
        body: JSON.stringify(payload),
        signal: retryController.signal,
      });
    } else {
      clearTimeout(timeout);
      throw err;
    }
  } finally {
    clearTimeout(timeout);
  }

  if (!response.ok) {
    const text = await response.text().catch(() => "");
    throw new Error(`Langflow request failed (${response.status}): ${text || response.statusText}`);
  }

  const data = (await response.json()) as LangflowRunResponse;
  const text = extractTextFromResponse(data);
  if (!text) {
    throw new Error("No text returned from Langflow response");
  }
  return text;
}

function extractTextFromResponse(resp: LangflowRunResponse): string | undefined {
  if (!resp) return undefined;
  // Common shapes
  if (typeof resp.message === "string") return resp.message;
  if (typeof resp.text === "string") return resp.text;
  if (typeof (resp as any)?.message?.text === "string") return (resp as any).message.text;

  // Langflow standard nested outputs
  const outputs = resp.outputs;
  if (Array.isArray(outputs)) {
    for (const outer of outputs) {
      const innerOutputs = outer.outputs;
      if (!Array.isArray(innerOutputs)) continue;
      for (const inner of innerOutputs) {
        const results = inner.results as any;
        const maybeText = results?.text
          || results?.message?.text
          || results?.message?.data?.text;
        if (typeof maybeText === "string" && maybeText.trim()) {
          return maybeText;
        }
      }
    }
  }
  return undefined;
}


