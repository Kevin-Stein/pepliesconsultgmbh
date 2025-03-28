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
import Footer from "./components/Footer";

import NavBar from "./components/Navbar/NavBar";

import { useDocTitle } from "./components/CustomHook";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [language, setLanguage] = useState("de"); // 'de' for German, 'en' for English

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "de" ? "en" : "de"));
  };

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
            </Routes>
          </main>
          <Footer language={language} />
        </ScrollToTop>
      </div>
    </Router>
  );
}

export default App;
