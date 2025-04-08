import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// All pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Athletes from "./pages/Athletes";
import AthleteDetails from "./pages/AthleteDetails";
import LegalNotice from "./pages/LegalNotice";
import Portfolio from "./components/Portfolio";
import AthleteServices from "./pages/AthleteServices";
import Press from "./pages/Press";
import TvCommercials from "./pages/TvCommercials";
import Footer from "./components/Footer";

import NavBar from "./components/Navbar/NavBar";

import { useDocTitle } from "./components/CustomHook";
import ScrollToTop from "./components/ScrollToTop";

// Create an authentication context
export const AuthContext = React.createContext({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
});

function App() {
  const [language, setLanguage] = useState("de"); // 'de' for German, 'en' for English
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "de" ? "en" : "de"));
  };

  useEffect(() => {
    // Check authentication status when the app loads
    const authStatus = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(authStatus);

    // Set up event listener for storage changes (for multi-tab support)
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
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: "ease-out-cubic",
      });
    };

    window.addEventListener("load", () => {
      aos_init();
    });
  }, []);

  useDocTitle("peplies consult - Sports Marketing Consultants");

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <Router future={{ v7_relativeSplatPath: true }}>
        <div className="flex flex-col min-h-screen">
          <ScrollToTop>
            <NavBar language={language} toggleLanguage={toggleLanguage} />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home language={language} />} />
                <Route path="/contact" element={<Contact language={language} />} />
                <Route path="/athletes" element={<Athletes language={language} />} />
                <Route path="/athletes/:athleteName" element={<AthleteDetails language={language} />} />
                <Route path="/legal-notice" element={<LegalNotice language={language} />} />
                <Route path="/portfolio" element={<Portfolio language={language} />} />
                <Route path="/services/athletes" element={<AthleteServices language={language} />} />
                <Route path="/press" element={<Press language={language} />} />
                <Route path="/campaigns/tv-spots" element={<TvCommercials language={language} />} />
              </Routes>
            </main>
            <Footer language={language} />
          </ScrollToTop>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
