import React from "react";
import { useState } from "react";
import { Button } from "./ui/button";
import { FaXTwitter, FaInstagram, FaLinkedin, FaTelegram, FaBars, FaX } from "react-icons/fa6";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import logoImg from "../assets/images/logo.webp";
import { motion, AnimatePresence } from "motion/react";

import { AboutMenu } from "./AboutMenu";

const SOCIAL_LINKS = [
  {
    name: "X",
    Icon: FaXTwitter,
    href: "#",
  },
  {
    name: "Instagram",
    Icon: FaInstagram,
    href: "#",
  },
  {
    name: "Linkedin",
    Icon: FaLinkedin,
    href: "#",
  },
  {
    name: "Telegram",
    Icon: FaTelegram,
    href: "#",
  },
] as const;

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
          {SOCIAL_LINKS.map(({ name, href, Icon }) => (
            <a
              key={name}
              href={href}
              className="group flex h-10 w-10 items-center justify-center rounded-md bg-transparent"
              aria-label={name}
            >
              <Icon
                className={`h-5 w-5 transition-colors ${isDark ? "text-white" : "text-[#942629]"
                  } group-hover:text-[#DCB821]`}
              />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center text-white"
          onClick={() => setIsOpen(true)}
        >
          <FaBars className="h-6 w-6" />
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
                <FaX className="h-6 w-6" />
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

              <div className="mx-auto">
                <div className="flex md:hidden items-center gap-0">
                  {SOCIAL_LINKS.map(({ name, href, Icon }) => (
                    <a
                      key={name}
                      href={href}
                      className="group flex h-10 w-10 items-center justify-center rounded-md bg-transparent"
                      aria-label={name}
                    >
                      <Icon
                        className="h-5 w-5 text-white transition-colors group-hover:text-[#DCB821]"
                      />
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