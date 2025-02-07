import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = (props) => {
    const location = useLocation();
    useEffect(() => {
        const yOffset = -100; // Adjust this value to set the offset
        window.scrollTo({ top: yOffset, left: 0, behavior: 'smooth' });
    }, [location]);

    return <>{props.children}</>;
};

export default ScrollToTop;
