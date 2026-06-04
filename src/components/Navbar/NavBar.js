import React, { useState, useContext, useEffect, useRef, useCallback } from "react";
import NavLinks from "./NavLinks";
import { HashLink } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";
import logo from "../../images/pepliesconsult_logo_black.svg";
import { AuthContext } from "../../App";
import LanguageSwitcher from "./LanguageSwitcher";
import { useContactModal } from "../ContactModalContext";
import { useI18n } from "../../i18n/I18nContext";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const passwordInputRef = useRef(null);
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const { openContact } = useContactModal();
  const { t } = useI18n();

  const handleOpenContact = () => {
    setIsOpen(false);
    openContact();
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const toggleLoginModal = useCallback(() => {
    setShowLoginModal((prev) => !prev);
    setError("");
    setPassword("");
    setShowPassword(false);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const correctPassword = process.env.REACT_APP_LOGIN_PASSWORD || "";
    if (!correctPassword) {
      setError(t("auth.unavailable"));
      return;
    }

    if (password === correctPassword) {
      localStorage.setItem("isAuthenticated", "true");
      setIsAuthenticated(true);
      setShowLoginModal(false);
      setPassword("");
      setError("");
    } else {
      setError(t("auth.wrongPassword"));
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);
    navigate("/");
  };

  useEffect(() => {
    if (!showLoginModal) return undefined;
    passwordInputRef.current?.focus();
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        toggleLoginModal();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [showLoginModal, toggleLoginModal]);

  return (
    <nav className="fixed top-0 w-full z-30 bg-white shadow-lg">
      <div className="flex flex-row justify-between items-center px-2 py-4 mx-4">
        <div className="flex flex-row justify-center md:mx-12 items-center text-center font-semibold">
          <HashLink smooth to="/#hero">
            <img
              src={logo}
              alt={t("contact.logoAlt")}
              className="z-10 sm:h-16 h-12 w-auto [filter:brightness(0)_saturate(100%)_invert(13%)_sepia(97%)_saturate(1000%)_hue-rotate(214deg)_brightness(97%)_contrast(97%)]"
            />
          </HashLink>
        </div>
        <div className="group flex flex-col items-center">
          <div className="flex items-center">
            <button className="rounded-lg lg:hidden text-blue-900" onClick={handleClick} aria-label={t("nav.toggleMenu")}>
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
            <NavLinks setIsOpen={setIsOpen} />
            <button
              type="button"
              onClick={handleOpenContact}
              className="px-4 font-semibold text-gray-500 hover:text-blue-900 tracking-wider"
            >
              {t("footer.contact")}
            </button>
            {isAuthenticated ? (
              <button
                className="px-4 font-semibold text-gray-500 hover:text-blue-900 tracking-wider"
                onClick={handleLogout}
              >
                {t("auth.logout")}
              </button>
            ) : (
              <button
                className="px-4 font-semibold text-gray-500 hover:text-blue-900 tracking-wider"
                onClick={toggleLoginModal}
              >
                {t("auth.login")}
              </button>
            )}
            <LanguageSwitcher />
          </div>
          <div
            className={`fixed transition-all duration-300 ease-in-out flex right-0 w-[80%] h-auto rounded-md p-10 bg-white lg:hidden shadow-xl top-14 z-50 transform ${
              isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"
            }`}
          >
            <div className="flex flex-col space-y-2 w-full">
              <div className="flex flex-col items-start space-y-2">
                <NavLinks setIsOpen={setIsOpen} isMobile={true} />
                <div className="flex flex-wrap items-center gap-3 w-full">
                  <button
                    type="button"
                    onClick={handleOpenContact}
                    className="px-2 text-xs font-medium text-gray-500 active:text-blue-900"
                  >
                    {t("footer.contact")}
                  </button>
                  {isAuthenticated ? (
                    <button
                      className="px-2 text-xs font-medium text-gray-500 active:text-blue-900"
                      onClick={handleLogout}
                    >
                      {t("auth.logout")}
                    </button>
                  ) : (
                    <button
                      className="px-2 text-xs font-medium text-gray-500 active:text-blue-900"
                      onClick={toggleLoginModal}
                    >
                      {t("auth.login")}
                    </button>
                  )}
                  <LanguageSwitcher id="site-language-mobile" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showLoginModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={toggleLoginModal}>
          <div
            className="bg-white rounded-lg p-8 max-w-md w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="login-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 id="login-modal-title" className="text-2xl font-bold text-blue-900">
                {t("auth.login")}
              </h2>
              <button onClick={toggleLoginModal} className="text-gray-500 hover:text-gray-700" aria-label={t("contact.close")}>
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  {t("auth.password")}
                </label>
                <div className="relative">
                  <input
                    ref={passwordInputRef}
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder={t("auth.passwordPlaceholder")}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700 focus:outline-none"
                    aria-label={showPassword ? t("auth.hidePassword") : t("auth.showPassword")}
                  >
                    {showPassword ? (
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                      </svg>
                    ) : (
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  {t("auth.login")}
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
