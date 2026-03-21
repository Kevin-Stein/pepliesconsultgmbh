import React, { useState, useCallback } from "react";
import { useI18n } from "../i18n/I18nContext";

const COOKIE_CONSENT_KEY = "cookieConsentLevel";

const CookieBanner = () => {
  const { t } = useI18n();
  const [isVisible, setIsVisible] = useState(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    return !consent;
  });

  const handleConsent = useCallback((level) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, level);
    setIsVisible(false);
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

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-xl max-w-md w-full mx-4 flex flex-col items-center">
        <p className="text-base text-center mb-4">{t("cookie.message")}</p>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
          <button
            onClick={handleAcceptAll}
            className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm transition-colors duration-200"
          >
            {t("cookie.acceptAll")}
          </button>
          <button
            onClick={handleAcceptNecessary}
            className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm transition-colors duration-200"
          >
            {t("cookie.acceptNecessary")}
          </button>
          <button
            onClick={handleDecline}
            className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm transition-colors duration-200"
          >
            {t("cookie.decline")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
