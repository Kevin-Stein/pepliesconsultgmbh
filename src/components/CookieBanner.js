import React, { useState, useCallback } from "react";

const COOKIE_CONSENT_KEY = "cookieConsentLevel";

const CookieBanner = ({ language }) => {
  // Determine initial visibility based on localStorage
  const [isVisible, setIsVisible] = useState(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    return !consent; // Show banner only if no consent is stored
  });

  // Function to handle setting consent and hiding banner
  const handleConsent = useCallback((level) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, level);
    setIsVisible(false);
    // Optional: Add logic here to initialize services based on 'level'
    // e.g., if (level === 'all') { initAnalytics(); }
  }, []);

  const handleAcceptAll = useCallback(() => {
    handleConsent("all");
  }, [handleConsent]);

  const handleAcceptNecessary = useCallback(() => {
    handleConsent("necessary");
  }, [handleConsent]);

  const handleDecline = useCallback(() => {
    handleConsent("declined");
  }, [handleConsent]);

  // No useEffect needed here anymore as initial state handles it

  if (!isVisible) {
    return null;
  }

  // Translations
  const translations = {
    de: {
      message: "Diese Website verwendet Cookies, um Ihre Erfahrung zu verbessern. Bitte wählen Sie Ihre Präferenz.",
      acceptAll: "Alle Akzeptieren",
      acceptNecessary: "Nur Notwendige",
      decline: "Ablehnen",
    },
    en: {
      message: "This website uses cookies to enhance your experience. Please choose your preference.",
      acceptAll: "Accept All",
      acceptNecessary: "Accept Necessary",
      decline: "Decline",
    },
  };

  const t = translations[language] || translations.en; // Fallback to English

  return (
    // Backdrop: Fixed position, covers screen, centers content, semi-transparent background
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
      {/* Modal Box: Background, padding, rounded, max-width, shadow */}
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-xl max-w-md w-full mx-4 flex flex-col items-center">
        {/* Modal Content */}
        <p className="text-base text-center mb-4">{t.message}</p>
        {/* Button Container */}
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
          <button
            onClick={handleAcceptAll}
            className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm transition-colors duration-200"
          >
            {t.acceptAll}
          </button>
          <button
            onClick={handleAcceptNecessary}
            className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm transition-colors duration-200"
          >
            {t.acceptNecessary}
          </button>
          <button
            onClick={handleDecline}
            className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm transition-colors duration-200"
          >
            {t.decline}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
