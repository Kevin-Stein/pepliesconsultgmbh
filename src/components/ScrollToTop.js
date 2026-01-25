import { useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";

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
    
    // Refresh AOS animations when route changes
    // Use setTimeout to ensure DOM is fully updated
    const timer = setTimeout(() => {
      AOS.refresh();
    }, 100);

    return () => clearTimeout(timer);
  }, [location, scrollToTop]);

  return <>{children}</>;
};

export default ScrollToTop;
