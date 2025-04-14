import React, { useState, useEffect, useRef, useContext } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { AuthContext } from "../../App";

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -100;
  window.scrollTo({
    top: yCoordinate + yOffset,
    behavior: "smooth",
  });
};

const NavLinks = ({ language, toggleLanguage, setIsOpen, isMobile = false }) => {
  const [leistungenOpen, setLeistungenOpen] = useState(false);
  const [referenzenOpen, setReferenzenOpen] = useState(false);
  const [kampagnenOpen, setKampagnenOpen] = useState(false);
  const { isAuthenticated } = useContext(AuthContext);

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

      <Link
        className="px-4 font-extrabold text-gray-500 hover:text-blue-900 tracking-wider"
        to="/hall-of-fame"
        onClick={handleNavigationClick}
      >
        Hall of Fame
      </Link>

      {/* Leistungen Dropdown */}
      <div className={`${isMobile ? "w-full" : "relative inline-block"}`} ref={leistungenRef}>
        <div
          className="flex flex-col"
          onMouseEnter={!isMobile ? () => setLeistungenOpen(true) : undefined}
          onMouseLeave={!isMobile ? () => setLeistungenOpen(false) : undefined}
        >
          <HashLink
            className="px-4 font-extrabold text-gray-500 hover:text-blue-900 tracking-wider inline-flex items-center"
            to="/#services"
            onClick={handleServicesClick}
          >
            <span>{language === "de" ? "Leistungen" : "Services"}</span>
            {/* Arrow Icon */}
            <svg className="ml-1 w-3 h-3 fill-current" viewBox="0 0 12 12">
              <path d="M5.9 9.7L.5 4.2l1.4-1.4L6 7l4.1-4.2L11.5 4z" />
            </svg>
          </HashLink>
          {(isMobile || leistungenOpen) && (
            <div
              className={`${
                isMobile
                  ? "ml-4 mt-1 space-y-1"
                  : "absolute top-full left-0 w-64 bg-white rounded-md shadow-lg py-1 z-50"
              }`}
            >
              {isAuthenticated && (
                <Link
                  to="/services/athletes"
                  className="block px-4 py-2 font-extrabold text-gray-500 hover:text-blue-900 tracking-wider whitespace-nowrap"
                  onClick={handleNavigationClick}
                >
                  {language === "de" ? "Leistungen für Athleten" : "Services for Athletes"}
                </Link>
              )}
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
      <div className={`${isMobile ? "w-full" : "relative inline-block"}`} ref={referenzenRef}>
        <div
          className="flex flex-col"
          onMouseEnter={!isMobile ? () => setReferenzenOpen(true) : undefined}
          onMouseLeave={!isMobile ? () => setReferenzenOpen(false) : undefined}
        >
          <HashLink
            className="px-4 font-extrabold text-gray-500 hover:text-blue-900 tracking-wider inline-flex items-center"
            to="/#clients"
            onClick={handleReferencesClick}
          >
            <span>{language === "de" ? "Referenzen" : "References"}</span>
            {/* Arrow Icon */}
            <svg className="ml-1 w-3 h-3 fill-current" viewBox="0 0 12 12">
              <path d="M5.9 9.7L.5 4.2l1.4-1.4L6 7l4.1-4.2L11.5 4z" />
            </svg>
          </HashLink>
          {(isMobile || referenzenOpen) && (
            <div
              className={`${
                isMobile
                  ? "ml-4 mt-1 space-y-1"
                  : "absolute top-full left-0 w-64 bg-white rounded-md shadow-lg py-1 z-50"
              }`}
            >
              {isAuthenticated && (
                <Link
                  to="/athletes"
                  className="block px-4 py-2 font-extrabold text-gray-500 hover:text-blue-900 tracking-wider whitespace-nowrap"
                  onClick={handleNavigationClick}
                >
                  {language === "de" ? "Referenzen Athleten" : "Athlete References"}
                </Link>
              )}
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
      <div className={`${isMobile ? "w-full" : "relative inline-block"}`} ref={kampagnenRef}>
        <div
          className="flex flex-col"
          onMouseEnter={!isMobile ? () => setKampagnenOpen(true) : undefined}
          onMouseLeave={!isMobile ? () => setKampagnenOpen(false) : undefined}
        >
          <button
            type="button"
            className="px-4 font-extrabold text-gray-500 hover:text-blue-900 tracking-wider inline-flex items-center text-left"
            onClick={() => !isMobile && setKampagnenOpen(!kampagnenOpen)}
          >
            <span>{language === "de" ? "Kampagnen" : "Campaigns"}</span>
            {/* Arrow Icon */}
            <svg className="ml-1 w-3 h-3 fill-current" viewBox="0 0 12 12">
              <path d="M5.9 9.7L.5 4.2l1.4-1.4L6 7l4.1-4.2L11.5 4z" />
            </svg>
          </button>
          {(isMobile || kampagnenOpen) && (
            <div
              className={`${
                isMobile
                  ? "ml-4 mt-1 space-y-1"
                  : "absolute top-full left-0 w-64 bg-white rounded-md shadow-lg py-1 z-50"
              }`}
            >
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
    </>
  );
};

export default NavLinks;
