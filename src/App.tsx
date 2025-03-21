
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, useNavigationType } from "react-router-dom";
import { useRef, useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ReadingProgress from "./components/layout/ReadingProgress";
import Index from "./pages/Index";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Article from "./pages/Article";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import WebStories from "./pages/WebStories";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

// Component to scroll to top of page when navigating to a new route
const ScrollToTop = () => {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    // Only scroll to top if it's a PUSH navigation (not when going back)
    if (navigationType === 'PUSH') {
      window.scrollTo(0, 0);
    }
  }, [pathname, navigationType]);

  return null;
};

// Main app content with ReadingProgress
const AppContent = () => {
  const mainRef = useRef<HTMLElement>(null);
  const { pathname } = useLocation();
  
  // Determine if progress bar should be shown (only on certain pages)
  const showReadingProgress = pathname.includes('/blog/') || 
                              pathname === '/about' || 
                              pathname === '/privacy-policy' || 
                              pathname === '/terms-of-use';

  return (
    <div className="flex flex-col min-h-screen">
      {showReadingProgress && <ReadingProgress target={mainRef} />}
      <Navbar />
      <main ref={mainRef} className="flex-grow pt-16">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Article />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/webstories" element={<WebStories />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
