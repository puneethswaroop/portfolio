"use client";
import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactLinks() {
  return (
    <div className="sm:h-full h-screen bg-white flex flex-col justify-between">
      <Header />
      <section className="grid gap-2 bg-white px-5 sm:px-20 py-5 sm:py-24 text-black">
        <FlipLink href="#">Twitter</FlipLink>
        <FlipLink href="#">Linkedin</FlipLink>
        <FlipLink href="#">Facebook</FlipLink>
        <FlipLink href="#">Instagram</FlipLink>
      </section>
      <Footer />
    </div>
  );
}

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }: { children: any; href: any }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
      style={{
        lineHeight: 0.8,
      }}
    >
      <div>
        {children.split("").map((l: any, i: any) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l: any, i: any) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};
