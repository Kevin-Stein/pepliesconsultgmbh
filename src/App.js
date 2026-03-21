import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// All pages
import Home from "./pages/Home";
import Athletes from "./pages/Athletes";
import AthleteDetails from "./pages/AthleteDetails";
import CompanyReferences from "./pages/CompanyReferences";

import LegalNotice from "./pages/LegalNotice";
import AthleteServices from "./pages/AthleteServices";
import CompanyServices from "./pages/CompanyServices";
import Press from "./pages/Press";
import Publications from "./pages/Publications";
import ScientificAdvisoryBoard from "./pages/ScientificAdvisoryBoard";
import TvCommercials from "./pages/TvCommercials";
import PrintCampaign from "./pages/PrintCampaign";
import Footer from "./components/Footer";
import HallOfFame from "./pages/HallOfFame";

import NavBar from "./components/Navbar/NavBar";
import ProtectedRoute from "./components/ProtectedRoute";

import { useDocTitle } from "./components/CustomHook";
import ScrollToTop from "./components/ScrollToTop";
import CookieBanner from "./components/CookieBanner";
import { ContactModalProvider } from "./components/ContactModalContext";
import { ContactModal } from "./components/ContactModal";

// Create an authentication context
export const AuthContext = React.createContext({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
});

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(authStatus);

    const handleStorageChange = (e) => {
      if (e.key === "isAuthenticated") {
        setIsAuthenticated(e.newValue === "true");
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      easing: "ease-out-cubic",
      offset: 100,
      delay: 0,
      disable: false,
    });

    const refreshTimer = setTimeout(() => {
      AOS.refresh();
    }, 100);

    const handleLoad = () => {
      AOS.refresh();
    };

    if (document.readyState === "complete") {
      AOS.refresh();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      clearTimeout(refreshTimer);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  useDocTitle("peplies consult - Sports Marketing Consultants");

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <ContactModalProvider>
        <Router future={{ v7_relativeSplatPath: true }}>
          <div className="flex flex-col min-h-screen">
            <ScrollToTop>
              <NavBar />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/legal-notice" element={<LegalNotice />} />
                  <Route path="/contact" element={<Navigate to="/" replace />} />
                  <Route
                    path="/athletes"
                    element={
                      <ProtectedRoute>
                        <Athletes />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/athletes/:athleteName"
                    element={
                      <ProtectedRoute>
                        <AthleteDetails />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/references/companies"
                    element={
                      <ProtectedRoute>
                        <CompanyReferences />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/services/athletes"
                    element={
                      <ProtectedRoute>
                        <AthleteServices />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/services/companies"
                    element={
                      <ProtectedRoute>
                        <CompanyServices />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/press"
                    element={
                      <ProtectedRoute>
                        <Press />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/publications"
                    element={
                      <ProtectedRoute>
                        <Publications />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/scientific-advisory-board"
                    element={
                      <ProtectedRoute>
                        <ScientificAdvisoryBoard />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/campaigns/tv-spots"
                    element={
                      <ProtectedRoute>
                        <TvCommercials />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/campaigns/pr-print-plakat"
                    element={
                      <ProtectedRoute>
                        <PrintCampaign />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/hall-of-fame"
                    element={
                      <ProtectedRoute>
                        <HallOfFame />
                      </ProtectedRoute>
                    }
                  />
                </Routes>
              </main>
              <Footer />
            </ScrollToTop>
            <CookieBanner />
            <ContactModal />
          </div>
        </Router>
      </ContactModalProvider>
    </AuthContext.Provider>
  );
}

export default App;
