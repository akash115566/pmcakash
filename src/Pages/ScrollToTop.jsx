import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    // Disable browser scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    if (navigationType === "PUSH") {
      // New page → always top
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant", // smooth hata do (important)
      });
    }

    // POP (back/forward) → do nothing (browser will handle)
  }, [location.pathname, navigationType]);

  return null;
};

export default ScrollToTop;