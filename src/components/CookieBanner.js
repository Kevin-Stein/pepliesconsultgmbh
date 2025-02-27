import React, { useState, useEffect } from "react";

const CookieBanner = ({ language }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (consent) {
      setIsVisible(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 flex justify-between items-center z-50">
      <p>
        {language === "de"
          ? "Diese Website verwendet Cookies, um sicherzustellen, dass Sie die beste Erfahrung auf unserer Website machen."
          : "This website uses cookies to ensure you get the best experience on our website."}
      </p>
      <button onClick={handleAccept} className="bg-blue-500 text-white px-4 py-2 rounded">
        {language === "de" ? "Akzeptieren" : "Accept"}
      </button>
    </div>
  );
};

export default CookieBanner;
