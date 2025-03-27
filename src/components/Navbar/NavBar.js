import React, { useState, useEffect } from "react";
import NavLinks from "./NavLinks";
import { HashLink } from "react-router-hash-link";

const NavBar = ({ language, toggleLanguage }) => {
  const [top, setTop] = useState(!window.scrollY);
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 20 ? setTop(false) : setTop(true);
    };

    const mouseMoveHandler = (e) => {
      const windowHeight = window.innerHeight;
      const threshold = windowHeight / 3;
      setShowNav(e.clientY <= threshold);
    };

    window.addEventListener("scroll", scrollHandler);
    window.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-30 transition-all duration-300 ease-in-out mb-16 bg-white ${
        !top || showNav ? "translate-y-0 shadow-lg" : "-translate-y-full"
      }`}
    >
      <div className="flex flex-row justify-between items-center px-2 py-4 mx-4">
        <div className="flex flex-row justify-center md:mx-12 items-center text-center font-semibold">
          <HashLink smooth to="/#hero">
            <h1 className="font-extrabold text-2xl text-blue-900">peplies consult</h1>
          </HashLink>
        </div>
        <div className="group flex flex-col items-center">
          <button className="rounded-lg lg:hidden text-blue-900" onClick={handleClick}>
            <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
                />
              )}
            </svg>
          </button>
          <div className="hidden space-x-6 lg:inline-block p-5">
            <NavLinks language={language} toggleLanguage={toggleLanguage} setIsOpen={setIsOpen} />
          </div>
          <div
            className={`fixed transition-all duration-300 ease-in-out flex left-0 w-full h-auto rounded-md p-24 bg-white lg:hidden shadow-xl top-14 z-50 transform ${
              isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"
            }`}
          >
            <div className="flex flex-col space-y-6 w-full">
              <div className="flex flex-col items-start space-y-6">
                <NavLinks language={language} toggleLanguage={toggleLanguage} setIsOpen={setIsOpen} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
