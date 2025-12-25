import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CareersPage from "./pages/Careers/Index";
import AboutUsPage from "./pages/AboutUs/Index";
import ServicePage from "./pages/Services/Index";
import Referrals from "./pages/Referrals/Index";
import RequestSub from "./pages/Request/Index";
import ContactModule from './pages/Contact/Index';
import NotFound from "./pages/NotFound"; 
import ScrollToTopButton from "@/components/ScrollToTopButton";
import ChatBubble from "@/components/ChatBubble"; 

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/schools" element={<ServicePage />} />
          <Route path="/referrals" element={<Referrals />} />
          <Route path="/healthcare-staffing-contact" element={<ContactModule />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/general-staffing-request-a-sub-now-or-cover-a-class-now" element={<RequestSub />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      
      {/* Both components will appear in bottom right */}
      <ScrollToTopButton />
      <ChatBubble />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;