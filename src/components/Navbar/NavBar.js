import React, { useState, useEffect, useContext } from "react";
import NavLinks from "./NavLinks";
import { HashLink } from "react-router-hash-link";
import logo from "../../images/pepliesconsult_logo_black.svg";
import germanyFlag from "../../images/flags/germany.png";
import ukFlag from "../../images/flags/united-kingdom.png";
import { AuthContext } from "../../App";

const NavBar = ({ language, toggleLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
    setError("");
    setPassword("");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple password check - in a real app, this would call an API
    if (password === "pepliesgmbh") {
      // Store authentication in localStorage or context
      localStorage.setItem("isAuthenticated", "true");
      setIsAuthenticated(true);
      setShowLoginModal(false);
      setPassword("");
      setError("");
    } else {
      setError(language === "de" ? "Falsches Passwort" : "Incorrect password");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);
  };

  const handleLanguageToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleLanguage();
  };

  return (
    <nav className="fixed top-0 w-full z-30 bg-white shadow-lg">
      <div className="flex flex-row justify-between items-center px-2 py-4 mx-4">
        <div className="flex flex-row justify-center md:mx-12 items-center text-center font-semibold">
          <HashLink smooth to="/#hero">
            <img
              src={logo}
              alt="peplies consult"
              className="sm:h-16 h-12 w-auto [filter:brightness(0)_saturate(100%)_invert(13%)_sepia(97%)_saturate(1000%)_hue-rotate(214deg)_brightness(97%)_contrast(97%)]"
            />
          </HashLink>
        </div>
        <div className="group flex flex-col items-center">
          <div className="flex items-center">
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
          </div>
          <div className="hidden lg:flex items-center space-x-6 p-5">
            <NavLinks language={language} toggleLanguage={toggleLanguage} setIsOpen={setIsOpen} />
            <button
              className="w-8 h-6 hover:opacity-80 transition-opacity"
              onClick={handleLanguageToggle}
              type="button"
              aria-label={language === "de" ? "Switch to English" : "Switch to German"}
            >
              <img
                src={language === "de" ? ukFlag : germanyFlag}
                alt={language === "de" ? "Switch to English" : "Switch to German"}
                className="w-full h-full object-contain"
              />
            </button>
            {isAuthenticated ? (
              <button
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
                onClick={handleLogout}
              >
                {language === "de" ? "Abmelden" : "Logout"}
              </button>
            ) : (
              <button
                className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors duration-200"
                onClick={toggleLoginModal}
              >
                {language === "de" ? "Anmelden" : "Login"}
              </button>
            )}
          </div>
          <div
            className={`fixed transition-all duration-300 ease-in-out flex left-0 w-full h-auto rounded-md p-24 bg-white lg:hidden shadow-xl top-14 z-50 transform ${
              isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"
            }`}
          >
            <div className="flex flex-col space-y-6 w-full">
              <div className="flex flex-col items-start space-y-6">
                <NavLinks language={language} toggleLanguage={toggleLanguage} setIsOpen={setIsOpen} isMobile={true} />
                <div className="flex items-center space-x-4 w-full">
                  <button
                    className="w-8 h-6 hover:opacity-80 transition-opacity"
                    onClick={handleLanguageToggle}
                    type="button"
                    aria-label={language === "de" ? "Switch to English" : "Switch to German"}
                  >
                    <img
                      src={language === "de" ? ukFlag : germanyFlag}
                      alt={language === "de" ? "Switch to English" : "Switch to German"}
                      className="w-full h-full object-contain"
                    />
                  </button>
                  {isAuthenticated ? (
                    <button
                      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
                      onClick={handleLogout}
                    >
                      {language === "de" ? "Abmelden" : "Logout"}
                    </button>
                  ) : (
                    <button
                      className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors duration-200"
                      onClick={toggleLoginModal}
                    >
                      {language === "de" ? "Anmelden" : "Login"}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-blue-900">{language === "de" ? "Anmelden" : "Login"}</h2>
              <button onClick={toggleLoginModal} className="text-gray-500 hover:text-gray-700">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  {language === "de" ? "Passwort" : "Password"}
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder={language === "de" ? "Passwort eingeben" : "Enter password"}
                  required
                />
              </div>
              {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  {language === "de" ? "Anmelden" : "Login"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
