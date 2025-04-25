"use client";

import type React from "react";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import ProgressBar from "@/components/progress-bar";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <ProgressBar />
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {children}
          <PageTransition />
        </motion.div>
      </AnimatePresence>
    </>
  );
}

function PageTransition() {
  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-full h-screen bg-black origin-bottom z-50"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="fixed top-0 left-0 w-full h-screen bg-black origin-top z-50"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
}
