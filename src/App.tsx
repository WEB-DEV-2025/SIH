import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Itinerary from "./pages/Itinerary";
import CulturalInsights from "./pages/CulturalInsights";
import Marketplace from "./pages/Marketplace";
import Events from "./pages/Events";
import Safety from "./pages/Safety";
import Journal from "./pages/Journal";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Chat from "./pages/Chat";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/itinerary" element={<Itinerary />} />
          <Route path="/cultural-insights" element={<CulturalInsights />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/events" element={<Events />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/login" element={<Login />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
