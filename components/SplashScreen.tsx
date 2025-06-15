// components/SplashScreen.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("visited");
    if (hasVisited) {
      setShowSplash(false);
    } else {
      sessionStorage.setItem("visited", "true");
      const timer = setTimeout(() => {
        setShowSplash(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!showSplash) {
    return null;
  }
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-black z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2, duration: 1 }}
    >
      <motion.div
        // initial={{ scale: 0 }}
        // animate={{ scale: 1 }}
        // transition={{ type: "spring", stiffness: 100 }}
        className="text-white flex items-center justify-center w-full h-full font-bold"
      >
        <Image
          src="/logo-inverted.png"
          alt="Logo"
          width={1024}
          height={1024}
          className="w-1/2 h-auto"
        />
      </motion.div>
    </motion.div>
  );
}
