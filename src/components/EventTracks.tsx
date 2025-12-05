import React from "react";
import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  AnimatePresence,
} from "motion/react";
import decorationImg from "../assets/images/decorationImage.png";

const tracks = [
  {
    id: "01",
    title: (
      <>
        Quantum
        <br />
        Futures
      </>
    ),
  },
  {
    id: "02",
    title: (
      <>
        Artificial Intelligence
        <br />& AI Systems
      </>
    ),
  },
  { id: "03", title: "Blockchain & Decentralized Tech" },
  { id: "04", title: "Culture, Creativity & Narrative" },
];

const topicsMap = {
  0: [
    "Quantum Computing",
    "Quantum Threats",
    "Post-Quantum Cryptography",
    "Quantum Money",
  ],
  1: [
    "Artificial Intelligence",
    "AI Agents",
    "Vibe Coding",
    "Ethics",
  ],
  2: [
    "DeFi",
    "RWA",
    "ZK Proofs",
    "Privacy",
    "Layer 2",
    "Infrastructure",
    "Law",
    "Community",
  ],
  3: ["Art", "Marketing", "Sci-Fi"],
};

export function EventTracks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTrack, setActiveTrack] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on(
      "change",
      (latest) => {
        if (latest < 0.2) setActiveTrack(0);
        else if (latest < 0.45) setActiveTrack(1);
        else if (latest < 0.7) setActiveTrack(2);
        else setActiveTrack(3);
      },
    );
    return () => unsubscribe();
  }, [scrollYProgress]);

  // Prepare the topics list with sufficient repetition for the marquee
  const rawTopics =
    topicsMap[activeTrack as keyof typeof topicsMap] || [];
  // Repeat list to ensure smooth scrolling
  const repeatedTopics = Array(8).fill(rawTopics).flat();

  return (
    <section
      ref={containerRef}
      className="relative h-[300vh] bg-transparent"
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="container mx-auto max-w-5xl px-4 md:px-6 flex flex-col items-center mb-4 md:mb-8 shrink-0">
          <h2 className="font-serif text-3xl md:text-5xl text-[#1A1A1A] text-center">
            Tracks & themes :{" "}
            <span className="bg-gradient-to-r from-[#A42A2E] to-[#1A0707] bg-[length:200%_auto] animate-text-gradient bg-clip-text text-transparent">
              ctrl/shift
            </span>{" "}
            2026
          </h2>
        </div>

        <div className="container mx-auto max-w-5xl px-4 md:px-2 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 h-[70vh] md:h-[80vh]">
          {/* Left Column - Tracks Selection */}
          <div className="flex flex-col justify-center md:justify-between h-auto md:h-full gap-2 md:gap-0">
            {tracks.map((track, index) => {
              const isActive = activeTrack === index;

              return (
                <div
                  key={track.id}
                  className="relative px-4 py-4 md:px-6 md:py-6 rounded-2xl overflow-hidden cursor-default transition-colors duration-300"
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTrackBackground"
                      className="absolute inset-0 bg-[image:linear-gradient(180deg,#A42A2E,#1A0707,#A42A2E)] bg-[length:100%_200%] bg-top shadow-xl"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    >
                      <img
                        src={decorationImg}
                        alt=""
                        className="absolute -right-24 md:-right-48 top-1/2 -translate-y-1/2 pointer-events-none opacity-50 w-64 md:w-auto max-w-none"
                      />
                    </motion.div>
                  )}

                  <div className="relative z-10 flex items-center justify-between">
                    <h3
                      className={`text-xl md:text-4xl font-medium transition-colors duration-300 ${
                        isActive
                          ? "text-[#DCB821]"
                          : "text-neutral-500"
                      }`}
                    >
                      {track.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column - Desktop Vertical Marquee */}
          <div className="hidden md:flex items-center justify-center relative h-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTrack}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full relative overflow-hidden"
              >
                {/* Gradient Masks for Top/Bottom Shadows */}
                <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[rgba(255,255,255,0.05)] to-transparent blur-md z-20 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[rgba(255,255,255,0.05)] to-transparent blur-md z-20 pointer-events-none" />

                {/* Marquee Container */}
                <div className="h-full overflow-hidden flex gap-6">
                  {/* Column 1 */}
                  <motion.div
                    className="flex flex-col gap-6 w-1/2"
                    animate={{ y: ["0%", "-50%"] }}
                    transition={{
                      duration: 20,
                      ease: "linear",
                      repeat: Infinity,
                    }}
                  >
                    {repeatedTopics.map((topic, i) => (
                      <div
                        key={`col1-${i}`}
                        className="flex-shrink-0 h-32 bg-[linear-gradient(180deg,rgba(148,38,41,0.1)_0%,rgba(148,38,41,0.80)_100%)] backdrop-blur-[12px] border border-[#942629] rounded-2xl px-6 flex items-center justify-center text-center shadow-[0_8px_20px_-6px_rgba(148,38,41,0.4)]"
                      >
                        <span className="!text-[#DCB821] font-medium text-lg leading-tight">
                          {topic}
                        </span>
                      </div>
                    ))}
                  </motion.div>

                  {/* Column 2 - Staggered */}
                  <motion.div
                    className="flex flex-col gap-6 w-1/2 pt-16"
                    animate={{ y: ["0%", "-50%"] }}
                    transition={{
                      duration: 25,
                      ease: "linear",
                      repeat: Infinity,
                    }}
                  >
                    {repeatedTopics.map((topic, i) => (
                      <div
                        key={`col2-${i}`}
                        className="flex-shrink-0 h-32 bg-[linear-gradient(180deg,rgba(148,38,41,0.1)_0%,rgba(148,38,41,0.80)_100%)] backdrop-blur-[12px] border border-[#942629] rounded-2xl px-6 flex items-center justify-center text-center shadow-[0_8px_20px_-6px_rgba(148,38,41,0.4)]"
                      >
                        <span className="!text-[#DCB821] font-medium text-lg leading-tight">
                          {topic}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile Horizontal Marquees */}
          <div className="flex md:hidden flex-col justify-start h-[45vh] gap-4 overflow-hidden w-full mt-1 py-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTrack}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col gap-1 w-full"
              >
                {/* Row 1 - Moving Left */}
                <div className="flex relative w-full overflow-hidden py-2 mask-linear-gradient-to-r from-transparent via-black to-transparent">
                  {/* Gradient Masks */}
                  <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-[#170300]/50 to-transparent z-10 pointer-events-none" />
                  <div className="absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l from-[#170300]/50 to-transparent z-10 pointer-events-none" />

                  <motion.div
                    className="flex gap-3 whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                      duration: 40,
                      ease: "linear",
                      repeat: Infinity,
                    }}
                  >
                    {repeatedTopics.map((topic, i) => (
                      <div
                        key={`row1-${i}`}
                        className="flex-shrink-0 h-16 min-w-[140px] px-4 bg-[linear-gradient(180deg,rgba(148,38,41,0.1)_0%,rgba(148,38,41,0.80)_100%)] backdrop-blur-[12px] border border-[#942629] rounded-xl flex items-center justify-center text-center shadow-[0_4px_10px_-3px_rgba(148,38,41,0.4)]"
                      >
                        <span className="!text-[#DCB821] font-medium text-sm leading-tight">
                          {topic}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* Row 2 - Moving Right (Reverse) */}
                <div className="flex relative w-full overflow-hidden py-2">
                  {/* Gradient Masks */}
                  <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-[#170300]/50 to-transparent z-10 pointer-events-none" />
                  <div className="absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l from-[#170300]/50 to-transparent z-10 pointer-events-none" />

                  <motion.div
                    className="flex gap-3 whitespace-nowrap"
                    animate={{ x: ["-50%", "0%"] }}
                    transition={{
                      duration: 50,
                      ease: "linear",
                      repeat: Infinity,
                    }}
                  >
                    {repeatedTopics.map((topic, i) => (
                      <div
                        key={`row2-${i}`}
                        className="flex-shrink-0 h-16 min-w-[140px] px-4 bg-[linear-gradient(180deg,rgba(148,38,41,0.1)_0%,rgba(148,38,41,0.80)_100%)] backdrop-blur-[12px] border border-[#942629] rounded-xl flex items-center justify-center text-center shadow-[0_4px_10px_-3px_rgba(148,38,41,0.4)]"
                      >
                        <span className="!text-[#DCB821] font-medium text-sm leading-tight">
                          {topic}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* Row 3 - Moving Left */}
                <div className="flex relative w-full overflow-hidden py-2 mask-linear-gradient-to-r from-transparent via-black to-transparent">
                  {/* Gradient Masks */}
                  <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-[#170300]/50 to-transparent z-10 pointer-events-none" />
                  <div className="absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l from-[#170300]/50 to-transparent z-10 pointer-events-none" />

                  <motion.div
                    className="flex gap-3 whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                      duration: 44,
                      ease: "linear",
                      repeat: Infinity,
                    }}
                  >
                    {repeatedTopics.map((topic, i) => (
                      <div
                        key={`row3-${i}`}
                        className="flex-shrink-0 h-16 min-w-[140px] px-4 bg-[linear-gradient(180deg,rgba(148,38,41,0.1)_0%,rgba(148,38,41,0.80)_100%)] backdrop-blur-[12px] border border-[#942629] rounded-xl flex items-center justify-center text-center shadow-[0_4px_10px_-3px_rgba(148,38,41,0.4)]"
                      >
                        <span className="!text-[#DCB821] font-medium text-sm leading-tight">
                          {topic}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}