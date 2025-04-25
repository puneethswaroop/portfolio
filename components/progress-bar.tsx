"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function ProgressBar() {
  const controls = useAnimation();
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleRouteChangeStart = () => {
      setIsNavigating(true);
      controls.set({ scaleX: 0, opacity: 1 });
      controls.start({
        scaleX: 1,
        transition: { duration: 0.8, ease: "easeInOut" },
      });
    };

    const handleRouteChangeComplete = () => {
      timeoutId = setTimeout(() => {
        controls.start({
          opacity: 0,
          transition: { duration: 0.3 },
        });
        setIsNavigating(false);
      }, 200);
    };

    // Listen for custom navigation events
    document.addEventListener("routeChangeStart", handleRouteChangeStart);
    document.addEventListener("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      document.removeEventListener("routeChangeStart", handleRouteChangeStart);
      document.removeEventListener(
        "routeChangeComplete",
        handleRouteChangeComplete
      );
    };
  }, [controls]);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-1 bg-gray-100">
      <motion.div
        className="h-full bg-black origin-left"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={controls}
      />
    </div>
  );
}
