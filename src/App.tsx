
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import ProtectedRoute from "@/components/ProtectedRoute";
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
import Explore from "./pages/Explore";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AgeVerification />} />
            <Route path="/login" element={<Index />} />
            <Route path="/home" element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } />
            <Route path="/explore" element={
              <ProtectedRoute>
                <Explore />
              </ProtectedRoute>
            } />
            <Route path="/creator-dashboard" element={
              <ProtectedRoute>
                <CreatorDashboard />
              </ProtectedRoute>
            } />
            <Route path="/creator/:id" element={
              <ProtectedRoute>
                <CreatorProfile />
              </ProtectedRoute>
            } />
            <Route path="/subscriber-dashboard" element={
              <ProtectedRoute>
                <SubscriberDashboard />
              </ProtectedRoute>
            } />
            <Route path="/chat" element={
              <ProtectedRoute>
                <Chat />
              </ProtectedRoute>
            } />
            <Route path="/reels" element={
              <ProtectedRoute>
                <Reels />
              </ProtectedRoute>
            } />
            <Route path="/live" element={
              <ProtectedRoute>
                <Live />
              </ProtectedRoute>
            } />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
