import React, { useState, useEffect, useRef, useContext } from "react";
import { HashLink } from "react-router-hash-link";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../App";
import { useI18n } from "../../i18n/I18nContext";

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -100;
  window.scrollTo({
    top: yCoordinate + yOffset,
    behavior: "smooth",
  });
};

const NavLinks = ({ setIsOpen, isMobile = false }) => {
  const [leistungenOpen, setLeistungenOpen] = useState(false);
  const [referenzenOpen, setReferenzenOpen] = useState(false);
  const [kampagnenOpen, setKampagnenOpen] = useState(false);
  const { isAuthenticated } = useContext(AuthContext);
  const { t } = useI18n();
  const navigate = useNavigate();
  const location = useLocation();

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
    handleNavigationClick();

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById("about");
        if (element) {
          scrollWithOffset(element);
        }
      }, 100);
    } else {
      const element = document.getElementById("about");
      if (element) {
        scrollWithOffset(element);
      }
    }
  };

  const handleServicesClick = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById("services");
        if (element) {
          scrollWithOffset(element);
        }
      }, 100);
    } else {
      const element = document.getElementById("services");
      if (element) {
        scrollWithOffset(element);
      }
    }
    handleNavigationClick();
  };

  const handleReferencesClick = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById("clients");
        if (element) {
          scrollWithOffset(element);
        }
      }, 100);
    } else {
      const element = document.getElementById("clients");
      if (element) {
        scrollWithOffset(element);
      }
    }
    handleNavigationClick();
  };

  return (
    <>
      <Link
        className="px-2 text-m sm:text-base font-semibold text-gray-500 hover:text-blue-900"
        to="/"
        onClick={handleAboutClick}
      >
        {t("nav.about")}
      </Link>

      {isAuthenticated && (
        <>
          <Link
            className="px-2 text-m sm:text-base font-semibold text-gray-500 hover:text-blue-900"
            to="/hall-of-fame"
            onClick={handleNavigationClick}
          >
            {t("nav.hallOfFame")}
          </Link>

          <div className={`${isMobile ? "w-full" : "relative inline-block"}`} ref={leistungenRef}>
            <div
              className="flex flex-col"
              onMouseEnter={!isMobile ? () => setLeistungenOpen(true) : undefined}
              onMouseLeave={!isMobile ? () => setLeistungenOpen(false) : undefined}
            >
              <HashLink
                className="px-2 text-m sm:text-base font-semibold text-gray-500 hover:text-blue-900 inline-flex items-center"
                to="/#services"
                onClick={handleServicesClick}
              >
                <span>{t("nav.services")}</span>
                <svg className="ml-1 w-2 h-2 sm:w-3 sm:h-3 fill-current" viewBox="0 0 12 12">
                  <path d="M5.9 9.7L.5 4.2l1.4-1.4L6 7l4.1-4.2L11.5 4z" />
                </svg>
              </HashLink>
              {(isMobile || leistungenOpen) && (
                <div
                  className={`${
                    isMobile
                      ? "ml-2 mt-0.5 space-y-0.5"
                      : "absolute top-full left-0 w-64 bg-white rounded-md shadow-lg py-1 z-50"
                  }`}
                >
                  <Link
                    to="/services/athletes"
                    className="block px-2 py-0.5 text-xs sm:text-sm font-medium text-gray-500 hover:text-blue-900 whitespace-nowrap"
                    onClick={handleNavigationClick}
                  >
                    {t("nav.servicesAthletes")}
                  </Link>
                  <Link
                    to="/services/companies"
                    className="block px-2 py-0.5 text-xs sm:text-sm font-medium text-gray-500 hover:text-blue-900 whitespace-nowrap"
                    onClick={handleNavigationClick}
                  >
                    {t("nav.servicesCompanies")}
                  </Link>
                </div>
              )}
            </div>
          </div>

          <div className={`${isMobile ? "w-full" : "relative inline-block"}`} ref={referenzenRef}>
            <div
              className="flex flex-col"
              onMouseEnter={!isMobile ? () => setReferenzenOpen(true) : undefined}
              onMouseLeave={!isMobile ? () => setReferenzenOpen(false) : undefined}
            >
              <HashLink
                className="px-2 text-m sm:text-base font-semibold text-gray-500 hover:text-blue-900 inline-flex items-center"
                to="/#clients"
                onClick={handleReferencesClick}
              >
                <span>{t("nav.references")}</span>
                <svg className="ml-1 w-2 h-2 sm:w-3 sm:h-3 fill-current" viewBox="0 0 12 12">
                  <path d="M5.9 9.7L.5 4.2l1.4-1.4L6 7l4.1-4.2L11.5 4z" />
                </svg>
              </HashLink>
              {(isMobile || referenzenOpen) && (
                <div
                  className={`${
                    isMobile
                      ? "ml-2 mt-0.5 space-y-0.5"
                      : "absolute top-full left-0 w-64 bg-white rounded-md shadow-lg py-1 z-50"
                  }`}
                >
                  <Link
                    to="/athletes"
                    className="block px-2 py-0.5 text-xs sm:text-sm font-medium text-gray-500 hover:text-blue-900 whitespace-nowrap"
                    onClick={handleNavigationClick}
                  >
                    {t("nav.refAthletes")}
                  </Link>
                  <Link
                    to="/references/companies"
                    className="block px-2 py-0.5 text-xs sm:text-sm font-medium text-gray-500 hover:text-blue-900 whitespace-nowrap"
                    onClick={handleNavigationClick}
                  >
                    {t("nav.refCompanies")}
                  </Link>
                </div>
              )}
            </div>
          </div>

          <Link
            to="/press"
            className="px-2 text-m sm:text-base font-semibold text-gray-500 hover:text-blue-900"
            onClick={handleNavigationClick}
          >
            {t("nav.press")}
          </Link>

          <div className={`${isMobile ? "w-full" : "relative inline-block"}`} ref={kampagnenRef}>
            <div
              className="flex flex-col"
              onMouseEnter={!isMobile ? () => setKampagnenOpen(true) : undefined}
              onMouseLeave={!isMobile ? () => setKampagnenOpen(false) : undefined}
            >
              <button
                type="button"
                className="px-2 text-m sm:text-base font-semibold text-gray-500 hover:text-blue-900 inline-flex items-center text-left"
                onClick={() => !isMobile && setKampagnenOpen(!kampagnenOpen)}
              >
                <span>{t("nav.campaigns")}</span>
                <svg className="ml-1 w-2 h-2 sm:w-3 sm:h-3 fill-current" viewBox="0 0 12 12">
                  <path d="M5.9 9.7L.5 4.2l1.4-1.4L6 7l4.1-4.2L11.5 4z" />
                </svg>
              </button>
              {(isMobile || kampagnenOpen) && (
                <div
                  className={`${
                    isMobile
                      ? "ml-2 mt-0.5 space-y-0.5"
                      : "absolute top-full left-0 w-64 bg-white rounded-md shadow-lg py-1 z-50"
                  }`}
                >
                  <Link
                    to="/campaigns/pr-print-plakat"
                    className="block px-2 py-0.5 text-xs sm:text-sm font-medium text-gray-500 hover:text-blue-900 whitespace-nowrap"
                    onClick={handleNavigationClick}
                  >
                    {t("nav.campaignsPrint")}
                  </Link>
                  <Link
                    to="/campaigns/tv-spots"
                    className="block px-2 py-0.5 text-xs sm:text-sm font-medium text-gray-500 hover:text-blue-900 whitespace-nowrap"
                    onClick={handleNavigationClick}
                  >
                    {t("nav.campaignsTv")}
                  </Link>
                </div>
              )}
            </div>
          </div>

          <Link
            to="/publications"
            className="px-2 text-m sm:text-base font-semibold text-gray-500 hover:text-blue-900"
            onClick={handleNavigationClick}
          >
            {t("nav.publications")}
          </Link>

          <Link
            to="/scientific-advisory-board"
            className="px-2 text-m sm:text-base font-semibold text-gray-500 hover:text-blue-900"
            onClick={handleNavigationClick}
          >
            {t("nav.scientificAdvisoryBoard")}
          </Link>
        </>
      )}
    </>
  );
};

export default NavLinks;
