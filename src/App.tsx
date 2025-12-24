import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
// import JobSeeker from "./pages/JobSeekers/Index";
// import Employer from './pages/Employers/Index'
// import StaffingPage from './pages/MedicalStaffing/Index';
// import CareersPage from "./pages/Careers/Index";
import AboutUsPage from "./pages/AboutUs/Index";
import ServicePage from "./pages/Services/Index";
// import NursesPage from "./pages/Services/sub-pages/NursesPage/Index"
// import LPNpage from "./pages/Services/sub-pages/LPN/Index";
// import CNA from "./pages/Services/sub-pages/CNA/Index";
// import ContactModule from './pages/Contact/Index';
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
          {/* <Route path="/healthcare-staffing-for-job-seekers" element={<JobSeeker />} />
          <Route path="/healthcare-staffing-for-employers" element={<Employer />} />
          <Route path="/healthcare-staffing-medical-staffing" element={<StaffingPage />} />
          <Route path="/healthcare-staffing-careers" element={<CareersPage />} />
          <Route path="/healthcare-staffing-services/nurses" element={<NursesPage />} />
          <Route path="/healthcare-staffing-services/lpn-lvn" element={<LPNpage />} />
          <Route path="/healthcare-staffing-services/cnas" element={<CNA />} />
          <Route path="/healthcare-staffing-contact" element={<ContactModule />} /> */}
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