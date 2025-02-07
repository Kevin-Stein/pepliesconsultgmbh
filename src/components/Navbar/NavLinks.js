import React from "react";
import { HashLink } from "react-router-hash-link";

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -100; // Adjust this value to set the offset
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

const NavLinks = ({ language, toggleLanguage }) => {
  return (
    <>
      <HashLink
        className="px-4 font-extrabold text-gray-500 hover:text-blue-900"
        smooth
        to="/#about"
        scroll={scrollWithOffset}
      >
        {language === "de" ? "Über uns" : "About Us"}
      </HashLink>
      <HashLink
        className="px-4 font-extrabold text-gray-500 hover:text-blue-900"
        smooth
        to="/#services"
        scroll={scrollWithOffset}
      >
        {language === "de" ? "Leistungen" : "Services"}
      </HashLink>
      <HashLink
        className="px-4 font-extrabold text-gray-500 hover:text-blue-900"
        smooth
        to="/#portfolio"
        scroll={scrollWithOffset}
      >
        {language === "de" ? "Athleten" : "Athletes"}
      </HashLink>
      <button
        className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl"
        onClick={toggleLanguage}
      >
        {language === "de" ? "ENG" : "DE"}
      </button>
    </>
  );
};

export default NavLinks;
