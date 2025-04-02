import { useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ children }) => {
  const location = useLocation();

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    // Only scroll to top if the pathname is not /athletes
    if (location.pathname !== "/athletes") {
      scrollToTop();
    }
  }, [location, scrollToTop]);

  return <>{children}</>;
};

export default ScrollToTop;
