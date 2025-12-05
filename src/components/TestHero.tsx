import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import decorationImg from "figma:asset/d2bcffd6c20c92f129eb19dd0423bc988905ec9d.png";
import columnImg from "figma:asset/5ba9eb486ec14084d75a8002dc1ef35e58cbceb0.png";
import starImg from "figma:asset/5724d77b79dee58994a0053aec551545b54024d4.png";
import sunImg from "figma:asset/b2f5d979f7411a97e3cd0f638c194979cf5471cb.png";
import leafImg from "figma:asset/38a1828bac017c88a6169d7c7d5bcd61b2f647fc.png";
import crestImg from "figma:asset/a8264b38ceb7156eae035318338cedc84b25af63.png";
import bgImg from "figma:asset/df712a589f345689a8d8060c72f5b5041b806535.png";
import { motion, useScroll, useTransform } from "motion/react";

export function TestHero() {
  const { scrollY } = useScroll();

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
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-[3%] z-0"
          >
            <motion.img
              src={crestImg}
              alt="Decorative crest"
              className="w-auto h-[100px] object-contain opacity-90"
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
            className="hidden md:block absolute left-[20%] top-[3%] z-0"
          >
            <motion.img
              src={starImg}
              alt="Decorative star"
              className="w-auto h-[120px] object-contain opacity-90"
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
            className="hidden md:block absolute right-[20%] top-[4%] z-0"
          >
            <motion.img
              src={sunImg}
              alt="Decorative sun"
              className="w-auto h-[100px] object-contain opacity-90"
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
            className="hidden md:block absolute left-0 top-[55%] -translate-y-1/2 z-0"
          >
            <motion.img
              src={columnImg}
              alt="Decorative column"
              className="w-auto h-[350px] object-contain opacity-90"
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
            className="hidden md:block absolute right-0 top-[53%] -translate-y-1/2 z-0"
          >
            <motion.img
              src={columnImg}
              alt="Decorative column"
              className="w-auto h-[350px] object-contain opacity-90 scale-x-[-1]"
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
            <h1 className="md:text-4xl lg:text-5xl font-medium tracking-tight leading-tight text-[#761E21] mb-6 drop-shadow-sm max-w-4xl text-[56px]">
              Southern Italy’s <br /> Gateway to the Future
            </h1>

            <p className="max-w-lg text-sm md:text-base text-[#1A1A1A] mb-[40px] font-normal text-[18px] p-[0px] mt-[0px] mr-[0px] ml-[0px]">
              <span className="block mb-2 font-semibold">
                8–14 June 2026 · Naples, Italy
              </span>
              A world-class summit uniting the pioneers of AI,
              Quantum Computing, and Web3.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button className="group relative h-12 w-56 cursor-pointer overflow-hidden rounded-md bg-gradient-to-b from-[#A42A2E] to-[#1A0707] px-0 text-[#FAF9F6] text-base font-semibold shadow-xl border-0 hover:opacity-90 transition-opacity">
                <span className="relative flex translate-y-0 items-center justify-center transition-transform duration-300 ease-in-out group-hover:translate-y-[150%]">
                  Get your tickets
                </span>
                <span className="absolute inset-0 flex -translate-y-[150%] items-center justify-center transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                  Get your tickets
                </span>
              </Button>
              <Button
                asChild
                className="group relative h-12 w-56 cursor-pointer overflow-hidden rounded-md bg-gradient-to-b from-[#A42A2E] to-[#1A0707] px-0 text-[#FAF9F6] text-base font-semibold shadow-xl border-0 hover:opacity-90 transition-opacity"
              >
                <a
                  href="https://docsend.com/v/sbjcj/ctrlshift2026"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* Ghost element for sizing */}
                  <span className="invisible flex items-center justify-center gap-2">
                    <span>Become a sponsor</span>
                    <ArrowRight className="h-4 w-4" />
                  </span>

                  {/* Animated content */}
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="relative mr-2 overflow-hidden whitespace-nowrap transition-all duration-300 ease-in-out group-hover:mr-0 group-hover:max-w-0 group-hover:opacity-0">
                      Become a sponsor
                    </span>
                    <ArrowRight className="relative h-4 w-4 transition-all duration-300 group-hover:animate-pulse-scale" />
                  </span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}