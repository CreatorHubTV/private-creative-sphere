
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Home from "./pages/Home";
import CreatorDashboard from "./pages/CreatorDashboard";
import CreatorProfile from "./pages/CreatorProfile";
import SubscriberDashboard from "./pages/SubscriberDashboard";
import Chat from "./pages/Chat";
import Reels from "./pages/Reels";
import Live from "./pages/Live";
import AgeVerification from "./pages/AgeVerification";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AgeVerification />} />
          <Route path="/login" element={<Index />} />
          <Route path="/home" element={<Home />} />
          <Route path="/creator-dashboard" element={<CreatorDashboard />} />
          <Route path="/creator/:id" element={<CreatorProfile />} />
          <Route path="/subscriber-dashboard" element={<SubscriberDashboard />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/reels" element={<Reels />} />
          <Route path="/live" element={<Live />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
