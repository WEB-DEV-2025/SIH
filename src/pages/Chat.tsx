import { useEffect, useMemo, useRef, useState } from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { sendToLangflow, isLangflowConfigured } from "@/lib/langflow";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);
  const sessionId = useMemo(() => crypto.randomUUID(), []);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  async function handleSend() {
    const trimmed = input.trim();
    if (!trimmed || loading) return;
    setError(null);
    const userMessage: Message = { id: crypto.randomUUID(), role: "user", content: trimmed };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);
    try {
      const reply = await sendToLangflow(trimmed, sessionId);
      const assistantMessage: Message = { id: crypto.randomUUID(), role: "assistant", content: reply };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (e: any) {
      setError(e?.message || "Something went wrong calling Langflow");
    } finally {
      setLoading(false);
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  const notConfigured = !isLangflowConfigured();

  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-4 text-foreground">Chat</h1>
        <Card className="border-border">
          <CardContent className="p-0">
            <div className="h-[60vh] flex flex-col">
              <ScrollArea className="flex-1 p-4" ref={listRef as any}>
                <div className="space-y-4">
                  {messages.map((m) => (
                    <div key={m.id} className={m.role === "user" ? "text-right" : "text-left"}>
                      <div
                        className={
                          m.role === "user"
                            ? "inline-block max-w-full rounded-lg bg-primary text-primary-foreground px-3 py-2 whitespace-pre-wrap"
                            : "inline-block max-w-full rounded-lg bg-muted text-foreground px-3 py-2"
                        }
                        style={{ overflowWrap: "anywhere" }}
                      >
                        {m.role === "assistant" ? (
                          <div className="prose prose-sm prose-invert max-w-none">
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>{m.content}</ReactMarkdown>
                          </div>
                        ) : (
                          m.content
                        )}
                      </div>
                    </div>
                  ))}
                  {error && (
                    <div className="text-sm text-red-600">{error}</div>
                  )}
                  {notConfigured && (
                    <div className="text-sm text-amber-600">
                      Langflow is not configured. Set VITE_LANGFLOW_BASE_URL, VITE_LANGFLOW_FLOW_ID, and VITE_LANGFLOW_API_KEY.
                    </div>
                  )}
                </div>
              </ScrollArea>
              <div className="p-3 border-t border-border flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onKeyDown}
                  placeholder={notConfigured ? "Configure Langflow env vars to enable chat" : "Type your message..."}
                  disabled={loading || notConfigured}
                />
                <Button onClick={handleSend} disabled={loading || notConfigured}>
                  {loading ? "Sending..." : "Send"}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}


