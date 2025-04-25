"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, useSpring, useMotionValue } from "framer-motion";
import type { PortfolioItem } from "@/lib/types";

interface RelatedItemsProps {
  items: PortfolioItem[];
}

export default function RelatedItems({ items }: RelatedItemsProps) {
  const router = useRouter();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // Motion values for cursor position with spring physics
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  // Apply spring physics to the cursor
  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    // Update the motion values with current mouse position
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
  };

  const handleItemClick = (e: React.MouseEvent, slug: string) => {
    e.preventDefault();

    // Dispatch custom navigation event
    document.dispatchEvent(
      new CustomEvent("routeChangeStart", {
        detail: { url: `/portfolio/${slug}` },
      })
    );

    // Navigate programmatically after a slight delay to allow for exit animations
    setTimeout(() => {
      router.push(`/portfolio/${slug}`);
    }, 300);
  };

  return (
    <>
      {/* Elastic custom cursor with Framer Motion */}
      {hoveredItem && (
        <motion.div
          className="fixed pointer-events-none z-50"
          style={{
            left: cursorXSpring,
            top: cursorYSpring,
            translateX: "-50%",
            translateY: "-50%",
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            rotate: [0, 5, 0, -5, 0], // subtle rotation animation
          }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{
            type: "spring",
            damping: 15,
            stiffness: 150,
            rotate: {
              repeat: Number.POSITIVE_INFINITY,
              duration: 5,
              ease: "easeInOut",
            },
          }}
        >
          <motion.div
            className="relative w-24 h-24 bg-black rounded-full flex items-center justify-center"
            whileTap={{ scale: 0.9 }} // Scale down slightly when clicking
          >
            <motion.p
              className="text-white text-center text-sm font-medium tracking-wider"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              VIEW
              <br />
              WORK
            </motion.p>
          </motion.div>
        </motion.div>
      )}

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
        onMouseMove={handleMouseMove}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          staggerChildren: 0.1,
          delayChildren: 0.3,
        }}
      >
        {items.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
          >
            <a
              href={`/portfolio/${item.slug}`}
              onClick={(e) => handleItemClick(e, item.slug)}
              className="group relative overflow-hidden block portfolio-related-item"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={item.imageUrl || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-all duration-300 group-hover:grayscale group-hover:brightness-75 group-hover:contrast-125"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                />

                {/* Title overlay on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white text-xl font-bold text-center px-4">
                    {item.title}
                  </h3>
                </div>
              </div>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}
