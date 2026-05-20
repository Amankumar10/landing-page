import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import HomePage from "@/src/pages/HomePage";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

// Legal and info pages
import PrivacyPolicy from "@/src/pages/PrivacyPolicy";
import TermsConditions from "@/src/pages/TermsConditions";
import ContactUs from "@/src/pages/ContactUs";
import AboutPage from "@/src/pages/AboutPage";
import CareersPage from "@/src/pages/CareersPage";
import FAQPage from "@/src/pages/FAQPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsConditions />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/faq" element={<FAQPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
