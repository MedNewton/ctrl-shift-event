import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import decorationImg from "../assets/images/decorationImage.png";
import columnImg from "../assets/images/column.png";
import starImg from "../assets/images/star.png";
import sunImg from "../assets/images/sun.png";
import leafImg from "../assets/images/leaf.png";
import crestImg from "../assets/images/relic.png";
import bgImg from "../assets/images/layer.png";
import { motion, useScroll, useTransform } from "motion/react";

export function Hero({
  theme = "light",
}: {
  theme?: "light" | "dark";
}) {
  const { scrollY } = useScroll();
  const isDark = theme === "dark";

  // Parallax effect - move elements at different speeds relative to scroll
  const yLeft = useTransform(scrollY, [0, 500], [0, 100]);
  const yRight = useTransform(scrollY, [0, 500], [0, -80]); // Opposite direction or different speed
  const yStar = useTransform(scrollY, [0, 500], [0, -50]); // Moves up slightly
  const ySun = useTransform(scrollY, [0, 500], [0, -60]); // Similar to star
  const yLeaf = useTransform(scrollY, [0, 500], [0, 70]); // Moves down
  const yCrest = useTransform(scrollY, [0, 500], [0, -40]); // Moves up slightly

  return (
    <section className="w-full mt-4 md:mt-6 mb-12 md:px-6 overflow-visible px-[12px] py-[0px] relative">
      <div className="container mx-auto max-w-7xl relative">
        <div className="relative h-[80vh] w-full flex flex-col items-center justify-center text-center px-4 md:px-0">
          {/* Floating Crest - Top Center */}
          <motion.div
            style={{ y: yCrest }}
            className="absolute left-1/2 -translate-x-1/2 top-[2%] md:top-[3%] z-0"
          >
            <motion.img
              src={crestImg}
              alt="Decorative crest"
              className="w-auto h-[60px] md:h-[100px] object-contain opacity-90"
              animate={{ y: [-4, 4, -4] }}
              transition={{
                duration: 6.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Floating Star - Top Left-ish */}
          <motion.div
            style={{ y: yStar }}
            className="absolute left-[5%] md:left-[20%] top-[5%] md:top-[3%] z-0"
          >
            <motion.img
              src={starImg}
              alt="Decorative star"
              className="w-auto h-[70px] md:h-[120px] object-contain opacity-90"
              animate={{ y: [-10, 20, -10] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Floating Sun - Top Right-ish */}
          <motion.div
            style={{ y: ySun }}
            className="absolute right-[5%] md:right-[20%] top-[5%] md:top-[4%] z-0"
          >
            <motion.img
              src={sunImg}
              alt="Decorative sun"
              className="w-auto h-[60px] md:h-[100px] object-contain opacity-90"
              animate={{ y: [10, -15, 10] }}
              transition={{
                duration: 7.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
          </motion.div>

          {/* Floating Elements Left */}
          <motion.div
            style={{ y: yLeft }}
            className="absolute -left-28 md:left-0 top-[55%] -translate-y-1/2 z-0"
          >
            <motion.img
              src={columnImg}
              alt="Decorative column"
              className="w-auto h-[290px] md:h-[350px] object-contain opacity-40 md:opacity-90"
              animate={{ y: [-28, 20, -28] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Floating Elements Right */}
          <motion.div
            style={{ y: yRight }}
            className="absolute -right-28 md:right-0 top-[53%] -translate-y-1/2 z-0"
          >
            <motion.img
              src={columnImg}
              alt="Decorative column"
              className="w-auto h-[290px] md:h-[350px] object-contain opacity-40 md:opacity-90 scale-x-[-1]"
              animate={{ y: [20, -20, 20] }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </motion.div>

          {/* Main Content */}
          <div className="relative z-10 flex flex-col items-center">
            <h1
              className={`text-4xl md:text-5xl lg:text-[56px] font-medium tracking-tight leading-tight mb-6 drop-shadow-sm max-w-4xl ${
                isDark ? "text-white" : "text-[#761E21]"
              }`}
            >
              Southern Italy’s <br /> Gateway to the Future
            </h1>

            <p
              className={`max-w-lg text-sm md:text-base mb-[40px] font-normal text-[18px] p-[0px] mt-[0px] mr-[0px] ml-[0px] ${
                isDark ? "text-white" : "text-[#1A1A1A]"
              }`}
            >
              <span className="block mb-2 font-semibold">
                8–14 June 2026 · Naples, Italy
              </span>
              A world-class summit uniting the pioneers of AI,
              Quantum Computing, and Web3.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                className="group relative h-12 w-56 cursor-pointer rounded-md px-0 text-lg font-semibold border-0 transition-all duration-300 text-white hover:shadow-[0_0_24px_rgba(220,184,33,0.6)]"
                style={{
                  background:
                    "radial-gradient(50% 50% at 50% 50%, #841403 0%, #841403 100%)",
                  boxShadow:
                    "inset 0 -4px 2px 0 rgba(0, 0, 0, 0.25), inset 0 2px 1px 0 rgba(255, 255, 255, 0.25)",
                }}
              >
                <div className="relative w-full h-full overflow-hidden rounded-md flex items-center justify-center">
                  <span className="relative flex translate-y-0 items-center justify-center transition-transform duration-300 ease-in-out group-hover:translate-y-[150%] text-[16px]">
                    Get your tickets
                  </span>
                  <span className="absolute inset-0 flex -translate-y-[150%] items-center justify-center transition-transform duration-300 ease-in-out group-hover:translate-y-0 text-[16px]">
                    Get your tickets
                  </span>
                </div>
              </Button>
              <Button
                asChild
                className="group relative h-12 w-56 cursor-pointer rounded-md px-0 text-lg font-semibold border-0 transition-all duration-300 text-white hover:shadow-[0_0_24px_rgba(220,184,33,0.6)]"
                style={{
                  background:
                    "radial-gradient(50% 50% at 50% 50%, #841403 0%, #841403 100%)",
                  boxShadow:
                    "inset 0 -4px 2px 0 rgba(0, 0, 0, 0.25), inset 0 2px 1px 0 rgba(255, 255, 255, 0.25)",
                }}
              >
                <a
                  href="https://docsend.com/v/sbjcj/ctrlshift2026"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="relative w-full h-full overflow-hidden rounded-md flex items-center justify-center">
                    {/* Ghost element for sizing */}
                    <span className="invisible flex items-center justify-center gap-2">
                      <span>Become a sponsor</span>
                      <ArrowRight className="h-4 w-4" />
                    </span>

                    {/* Animated content */}
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="relative mr-2 overflow-hidden whitespace-nowrap transition-all duration-300 ease-in-out group-hover:mr-0 group-hover:max-w-0 group-hover:opacity-0 text-[16px]">
                        Become a sponsor
                      </span>
                      <ArrowRight className="relative h-4 w-4 transition-all duration-300 group-hover:animate-pulse-scale" />
                    </span>
                  </div>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}