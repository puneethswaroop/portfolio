"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Ref to store the previous scroll position
  const prevScrollY = useRef(0);

  useEffect(() => {
    // Check if we're on the client side
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };

      const handleScroll = () => {
        const currentScrollY = window.scrollY;

        // Determine if we've scrolled enough to add shadow
        setHasScrolled(currentScrollY > 10);

        // Determine scroll direction and visibility
        // If menu is open, always keep header visible
        if (isMenuOpen) {
          setIsVisible(true);
        } else {
          // Show header when scrolling up or at the top
          // Hide header when scrolling down (but not at the top)
          if (currentScrollY < 50) {
            // Always show header near the top
            setIsVisible(true);
          } else if (prevScrollY.current > currentScrollY) {
            // Scrolling up
            setIsVisible(true);
          } else if (prevScrollY.current < currentScrollY) {
            // Scrolling down
            setIsVisible(false);
          }
        }

        // Update the previous scroll position
        prevScrollY.current = currentScrollY;
      };

      // Initial checks
      handleResize();
      handleScroll();

      // Add event listeners
      window.addEventListener("resize", handleResize);
      window.addEventListener("scroll", handleScroll);

      // Cleanup
      return () => {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isMenuOpen]); // Re-run effect when menu state changes

  const navItems = [
    { label: "PORTFOLIO", path: "/" },
    { label: "BIO", path: "/bio" },
    { label: "INSTAGRAM", path: "/instagram" },
    { label: "CONTACT", path: "/contact" },
  ];

  // Animation variants
  const menuVariants = {
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        when: "afterChildren",
      },
    },
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: {
      y: 20,
      opacity: 0,
    },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  // Desktop menu item hover variants
  const desktopItemVariants = {
    initial: { y: 0 },
    hover: {
      y: -2,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  // Underline animation variants
  const underlineVariants = {
    initial: {
      width: 0,
      left: "50%",
      right: "50%",
      opacity: 0,
    },
    hover: {
      width: "100%",
      left: 0,
      right: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  // Header animation variants
  const headerVariants = {
    visible: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30,
      },
    },
    hidden: {
      y: "-100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  // Icon animation variants
  const iconVariants = {
    open: { rotate: 0 },
    closed: { rotate: 180 },
  };

  return (
    <>
      {/* Spacer to prevent content jump when header becomes fixed */}
      <div className="h-[85px]"></div>

      <motion.header
        className={`w-full bg-white text-black fixed top-0 left-0 right-0 z-50 ${
          hasScrolled ? "shadow-md" : ""
        }`}
        initial="visible"
        animate={isVisible ? "visible" : "hidden"}
        variants={headerVariants}
      >
        <div className="flex items-center justify-between py-5 px-6 md:px-12 lg:px-20">
          {/* Logo */}
          <Link href="/" className="text-xl tracking-widest font-medium">
            <div className="flex items-center">
              <span>K</span>
              <span className="relative top-[-5px] mx-[1px]">Y</span>
              <span className="relative top-[1px]">ˉ</span>
              <span>E</span>
            </div>
            <div className="flex items-center">
              <span>G</span>
              <span>A</span>
              <span className="relative top-[1px]">ˍ</span>
              <span>V</span>
              <span>I</span>
              <span>N</span>
            </div>
          </Link>

          {/* Mobile menu button with icons */}
          {isMobile && (
            <motion.button
              className="md:hidden p-2 rounded-md border border-gray-300 hover:bg-gray-100 transition-colors w-10 h-10 flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaTimes size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaBars size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          )}

          {/* Desktop navigation with hover effects */}
          <nav className="hidden md:flex items-center justify-between gap-8">
            {navItems.map((item) => (
              <motion.div
                key={item.path}
                className="relative"
                initial="initial"
                whileHover="hover"
                animate="initial"
                variants={desktopItemVariants}
              >
                <Link
                  href={item.path}
                  className={`block transition-colors ${
                    pathname === item.path
                      ? "border-b-2 border-black pb-1"
                      : "pb-1"
                  }`}
                >
                  {item.label}
                </Link>

                {/* Animated underline on hover (only for non-active items) */}
                {pathname !== item.path && (
                  <motion.div
                    className="absolute bottom-0 h-0.5 bg-black"
                    variants={underlineVariants}
                  />
                )}
              </motion.div>
            ))}
          </nav>
        </div>

        {/* Mobile navigation with animation */}
        <AnimatePresence>
          {isMenuOpen && isMobile && (
            <motion.div
              className="md:hidden bg-gray-100 overflow-hidden"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <motion.nav className="flex flex-col py-4">
                {navItems.map((item) => (
                  <motion.div key={item.path} variants={itemVariants}>
                    <motion.div
                      whileHover={{
                        backgroundColor: "#e5e5e5",
                        x: 5,
                        transition: { duration: 0.2 },
                      }}
                      className={`block py-4 px-6 ${
                        pathname === item.path ? "font-medium" : ""
                      }`}
                    >
                      <Link
                        href={item.path}
                        className="block w-full"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
