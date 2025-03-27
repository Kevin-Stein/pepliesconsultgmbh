import React, { useState, useEffect, useRef } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import germanyFlag from "../../images/flags/germany.png";
import ukFlag from "../../images/flags/united-kingdom.png";

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -100;
  window.scrollTo({
    top: yCoordinate + yOffset,
    behavior: "smooth",
  });
};

const NavLinks = ({ language, toggleLanguage, setIsOpen }) => {
  const [leistungenOpen, setLeistungenOpen] = useState(false);
  const [referenzenOpen, setReferenzenOpen] = useState(false);
  const [kampagnenOpen, setKampagnenOpen] = useState(false);

  const leistungenRef = useRef(null);
  const referenzenRef = useRef(null);
  const kampagnenRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (leistungenRef.current && !leistungenRef.current.contains(event.target)) {
        setLeistungenOpen(false);
      }
      if (referenzenRef.current && !referenzenRef.current.contains(event.target)) {
        setReferenzenOpen(false);
      }
      if (kampagnenRef.current && !kampagnenRef.current.contains(event.target)) {
        setKampagnenOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLanguageToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleLanguage();
  };

  const handleNavigationClick = () => {
    setIsOpen(false);
    setLeistungenOpen(false);
    setReferenzenOpen(false);
    setKampagnenOpen(false);
  };

  const handleAboutClick = (e) => {
    e.preventDefault();
    const element = document.getElementById("about");
    if (element) {
      scrollWithOffset(element);
    }
    handleNavigationClick();
  };

  const handleServicesClick = (e) => {
    e.preventDefault();
    const element = document.getElementById("services");
    if (element) {
      scrollWithOffset(element);
    }
    handleNavigationClick();
  };

  const handleReferencesClick = (e) => {
    e.preventDefault();
    const element = document.getElementById("clients");
    if (element) {
      scrollWithOffset(element);
    }
    handleNavigationClick();
  };

  return (
    <>
      <HashLink
        className="px-4 font-extrabold text-gray-500 hover:text-blue-900 tracking-wider"
        to="/#about"
        onClick={handleAboutClick}
      >
        {language === "de" ? "Über uns" : "About Us"}
      </HashLink>

      {/* Leistungen Dropdown */}
      <div className="relative inline-block" ref={leistungenRef}>
        <div
          className="flex flex-col"
          onMouseEnter={() => window.innerWidth > 1024 && setLeistungenOpen(true)}
          onMouseLeave={() => window.innerWidth > 1024 && setLeistungenOpen(false)}
        >
          <HashLink
            className="px-4 font-extrabold text-gray-500 hover:text-blue-900 tracking-wider"
            to="/#services"
            onClick={handleServicesClick}
          >
            {language === "de" ? "Leistungen" : "Services"}
          </HashLink>
          {leistungenOpen && (
            <div className="absolute top-full left-0 w-64 bg-white rounded-md shadow-lg py-1 z-50">
              <Link
                to="/services/athletes"
                className="block px-4 py-2 font-extrabold text-gray-500 hover:text-blue-900 tracking-wider whitespace-nowrap"
                onClick={handleNavigationClick}
              >
                {language === "de" ? "Leistungen für Athleten" : "Services for Athletes"} 🔒
              </Link>
              <Link
                to="/services/companies"
                className="block px-4 py-2 font-extrabold text-gray-500 hover:text-blue-900 tracking-wider whitespace-nowrap"
                onClick={handleNavigationClick}
              >
                {language === "de" ? "Leistungen für Unternehmen" : "Services for Companies"}
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Referenzen Dropdown */}
      <div className="relative inline-block" ref={referenzenRef}>
        <div
          className="flex flex-col"
          onMouseEnter={() => window.innerWidth > 1024 && setReferenzenOpen(true)}
          onMouseLeave={() => window.innerWidth > 1024 && setReferenzenOpen(false)}
        >
          <HashLink
            className="px-4 font-extrabold text-gray-500 hover:text-blue-900 tracking-wider"
            to="/#clients"
            onClick={handleReferencesClick}
          >
            {language === "de" ? "Referenzen" : "References"}
          </HashLink>
          {referenzenOpen && (
            <div className="absolute top-full left-0 w-64 bg-white rounded-md shadow-lg py-1 z-50">
              <Link
                to="/athletes"
                className="block px-4 py-2 font-extrabold text-gray-500 hover:text-blue-900 tracking-wider whitespace-nowrap"
                onClick={handleNavigationClick}
              >
                {language === "de" ? "Referenzen Athleten" : "Athlete References"}
              </Link>
              <Link
                to="/references/companies"
                className="block px-4 py-2 font-extrabold text-gray-500 hover:text-blue-900 tracking-wider whitespace-nowrap"
                onClick={handleNavigationClick}
              >
                {language === "de" ? "Referenzen Unternehmen" : "Company References"}
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Presse Link */}
      <Link
        to="/press"
        className="px-4 font-extrabold text-gray-500 hover:text-blue-900 tracking-wider"
        onClick={handleNavigationClick}
      >
        {language === "de" ? "Presse" : "Press"}
      </Link>

      {/* Kampagnen Dropdown */}
      <div className="relative inline-block" ref={kampagnenRef}>
        <div
          className="flex flex-col"
          onMouseEnter={() => window.innerWidth > 1024 && setKampagnenOpen(true)}
          onMouseLeave={() => window.innerWidth > 1024 && setKampagnenOpen(false)}
        >
          <button
            className="px-4 font-extrabold text-gray-500 hover:text-blue-900 tracking-wider"
            onClick={() => setKampagnenOpen(!kampagnenOpen)}
          >
            {language === "de" ? "Kampagnen" : "Campaigns"}
          </button>
          {kampagnenOpen && (
            <div className="absolute top-full left-0 w-64 bg-white rounded-md shadow-lg py-1 z-50">
              <Link
                to="/campaigns/pr-print-plakat"
                className="block px-4 py-2 font-extrabold text-gray-500 hover:text-blue-900 tracking-wider whitespace-nowrap"
                onClick={handleNavigationClick}
              >
                {language === "de" ? "PR, Print, Plakat" : "PR, Print, Poster"}
              </Link>
              <Link
                to="/campaigns/tv-spots"
                className="block px-4 py-2 font-extrabold text-gray-500 hover:text-blue-900 tracking-wider whitespace-nowrap"
                onClick={handleNavigationClick}
              >
                {language === "de" ? "TV Werbespots" : "TV Commercials"}
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Publikationen Link */}
      <Link
        to="/publications"
        className="px-4 font-extrabold text-gray-500 hover:text-blue-900 tracking-wider"
        onClick={handleNavigationClick}
      >
        {language === "de" ? "Publikationen" : "Publications"}
      </Link>

      {/* Wissenschaftlicher Beirat Link */}
      <Link
        to="/scientific-advisory-board"
        className="px-4 font-extrabold text-gray-500 hover:text-blue-900 tracking-wider"
        onClick={handleNavigationClick}
      >
        {language === "de" ? "Wissenschaftlicher Beirat" : "Scientific Advisory Board"}
      </Link>

      <button className="w-8 h-6 hover:opacity-80 transition-opacity" onClick={handleLanguageToggle} type="button">
        <img
          src={language === "de" ? ukFlag : germanyFlag}
          alt={language === "de" ? "Switch to English" : "Switch to German"}
          className="w-full h-full object-contain"
        />
      </button>
    </>
  );
};

export default NavLinks;
