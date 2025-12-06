import React from "react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Instagram, Linkedin, Menu, X } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import logoImg from "../assets/images/logo.webp";
import { motion, AnimatePresence } from "motion/react";

import { AboutMenu } from "./AboutMenu";

const SOCIAL_LINKS = [
  {
    name: "X",
    icon: (
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 fill-current transition-colors group-hover:text-[#DCB821]"
      >
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
      </svg>
    ),    
    href: "#",
  },
  {
    name: "Instagram",
    icon: (
      <Instagram className="h-4 w-4 transition-colors group-hover:text-[#DCB821]" />
    ),
    href: "#",
  },
  {
    name: "Linkedin",
    icon: (
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 fill-current transition-colors group-hover:text-[#DCB821]"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
      </svg>
    ),
    href: "#",
  },
  {
    name: "Telegram",
    icon: (
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 fill-current transition-colors group-hover:text-[#DCB821]"
      >
        <path d="M21.684 1.97L2.133 9.756c-1.41.58-1.403 1.39.247 1.907l5.165 1.663 11.793-7.54c.577-.393 1.12-.185.678.213l-9.715 8.92-.368 5.43c.53 0 .765-.247 1.063-.54l2.564-2.53 5.35 4.02c.987.556 1.704.272 1.95-1.13L24.632 3.52c.347-1.67-.626-2.44-1.63-2.44-1.12 0-1.318.89-1.318.89z" />
      </svg>
    ),
    href: "#",
  },
];

export function Header({
  theme = "light",
}: {
  theme?: "light" | "dark";
}) {
  const isDark = theme === "dark";
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b backdrop-blur-md px-4 md:px-6 ${isDark
        ? "bg-transparent border-white/10 text-white"
        : "bg-[#faeaca]/80 border-black/5"
        }`}
    >
      <div className="container mx-auto max-w-5xl flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <a
            href="/"
            className={`block transition-opacity hover:opacity-80 ${isDark ? "text-white" : "text-black"}`}
          >
            <ImageWithFallback
              src={logoImg}
              alt="Logo"
              className="h-[18px] w-auto"
            />
          </a>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="/"
            className={`relative text-base font-medium hover:opacity-70 transition-opacity after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${isDark
              ? "text-white after:bg-white"
              : "text-[#942629] after:bg-[#942629]"
              }`}
          >
            Home
          </a>
          <div className="relative group">
            <a
              href="#about"
              className={`relative text-base font-medium hover:opacity-70 transition-opacity flex items-center gap-1 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${isDark
                ? "text-white after:bg-white"
                : "text-[#942629] after:bg-[#942629]"
                }`}
            >
              About
            </a>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out transform group-hover:translate-y-0 translate-y-2">
              <AboutMenu />
            </div>
          </div>
        </nav>
        <div className="hidden md:flex items-center gap-0">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.name}
              href={social.href}
              className="flex h-10 w-10 items-center justify-center rounded-md bg-transparent text-white [&_svg]:h-5 [&_svg]:w-5"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center text-white"
          onClick={() => setIsOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-[100] h-[100dvh] w-screen bg-gradient-to-b from-[#170300] to-[#841403] flex flex-col"
          >
            <div className="flex h-16 items-center justify-between px-4 border-b border-white/10">
              <a href="/" onClick={() => setIsOpen(false)}>
                <ImageWithFallback
                  src={logoImg}
                  alt="Logo"
                  className="h-[18px] w-auto"
                />
              </a>
              <button
                className="flex items-center justify-center text-white"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="flex flex-col flex-1 p-8">
              <nav className="flex flex-col gap-6 items-center justify-center flex-1">
                <a
                  href="/"
                  className="text-2xl font-medium text-white hover:opacity-70 transition-opacity"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </a>
                <a
                  href="#speakers"
                  className="text-2xl font-medium text-white hover:opacity-70 transition-opacity"
                  onClick={() => setIsOpen(false)}
                >
                  Speakers
                </a>
                <a
                  href="#team"
                  className="text-2xl font-medium text-white hover:opacity-70 transition-opacity"
                  onClick={() => setIsOpen(false)}
                >
                  Team
                </a>
                <a
                  href="#location"
                  className="text-2xl font-medium text-white hover:opacity-70 transition-opacity"
                  onClick={() => setIsOpen(false)}
                >
                  Event Location
                </a>
                <a
                  href="#archive-2025"
                  className="text-2xl font-medium text-white hover:opacity-70 transition-opacity"
                  onClick={() => setIsOpen(false)}
                >
                  Archive 2025
                </a>
                <a
                  href="#archive-2024"
                  className="text-2xl font-medium text-white hover:opacity-70 transition-opacity"
                  onClick={() => setIsOpen(false)}
                >
                  Archive 2024
                </a>
              </nav>

              <div className="mt-auto">
                <div className="hidden md:flex items-center gap-0">
                  {SOCIAL_LINKS.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="
                        group
                        flex h-10 w-10 items-center justify-center
                        rounded-md bg-transparent
                        text-white
                        transition-colors
                        [&_svg]:h-5 [&_svg]:w-5
                      "
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}