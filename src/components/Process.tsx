import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CornerDownRight } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import conferenceImage from "figma:asset/6234adce7bfe8a0b3c027cb65d31d404cf14d90d.png";
import buildImage from "figma:asset/265b6d2f1196be534c3a5b925bc05b9591563ae5.png";
import hackathonImage from "figma:asset/5afe7a0a697d2c5b678c04d9da98b18c2f10ab71.png";
import visionsImage from "figma:asset/a41d9e9687241d31bda39bb245e51ff5ab1b9e40.png";
import meetupsImage from "figma:asset/ae29010419b2421b0c8521d0d0969fef352ebdb5.png";
import sideEventsImage from "figma:asset/eb60f426a56522cebf4430f383a14f1a9d84b82f.png";
import decorationImg from "figma:asset/d2bcffd6c20c92f129eb19dd0423bc988905ec9d.png";

const steps = [
  {
    id: "01",
    title: "Conference",
    description:
      "Join us for insightful talks, panels, and networking with industry leaders in AI, Web3, and Quantum Computing.",
    image: conferenceImage,
  },
  {
    id: "02",
    title: "Hackathon",
    description:
      "Prototype bold ideas, solve real challenges, and compete for prizes, grants, and ecosystem opportunities.",
    image: hackathonImage,
    cta: {
      type: "button",
      text: "Apply for hackathon",
      hoverText: "Coming soon",
    },
  },
  {
    id: "03",
    title: "Visions",
    description:
      "An exhibition and competition where aesthetic, economic, and symbolic dimensions merge — shaped by artists exploring the future of value, technology, and identity.",
    image: visionsImage,
    cta: {
      type: "button",
      text: "Explore our marketplace",
    },
  },
  {
    id: "04",
    title: "Side Events",
    description:
      "From boat parties to late-night drinks to delightfully nerdy experiences — discover a playful side of this community.",
    image: sideEventsImage,
  },
  {
    id: "05",
    title: "Meetups",
    description:
      "Discover our next meetups — follow us on Luma for all upcoming dates.",
    image: meetupsImage,
    cta: {
      type: "button",
      text: "Follow us on Luma",
    },
  },
];

export function Process() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="pt-0 pb-0 px-4 md:px-6 bg-transparent">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-medium text-white">
            Discover the event
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column: Step List */}
          <div className="space-y-2">
            {steps.map((step, index) => (
              <div
                key={step.id}
                onMouseEnter={() => setActiveStep(index)}
                className={`relative cursor-pointer transition-all duration-300 px-6 py-4 rounded-2xl overflow-hidden ${
                  activeStep === index
                    ? "bg-[image:linear-gradient(180deg,#A42A2E,#1A0707,#A42A2E)] bg-[length:100%_200%] bg-top shadow-xl"
                    : "hover:bg-white/20"
                }`}
              >
                {activeStep === index && (
                  <img
                    src={decorationImg}
                    alt=""
                    className="absolute -right-48 top-1/2 -translate-y-1/2 pointer-events-none"
                  />
                )}
                <div className="relative z-10">
                  <h3
                    className={`text-3xl md:text-5xl transition-all duration-300 ${
                      activeStep === index
                        ? "text-white pl-0"
                        : "text-white/50 pl-0"
                    }`}
                  >
                    {step.title}
                    <sup className="text-sm ml-1 align-top font-medium">
                      {step.id}
                    </sup>
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Content Display */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="w-full"
              >
                {/* Image Card */}
                <div className="rounded-[2rem] overflow-hidden h-64 md:h-80 mb-6 shadow-sm">
                  <ImageWithFallback
                    src={steps[activeStep].image}
                    alt={steps[activeStep].title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text Content */}
                <div className="space-y-4 px-2">
                  <h4 className="text-xl font-medium text-[rgb(255,255,255)]">
                    {steps[activeStep].title}
                  </h4>
                  <p className="text-white/80 leading-relaxed max-w-md mt-[0px] mr-[0px] mb-[8px] ml-[0px]">
                    {steps[activeStep].description}
                  </p>

                  {steps[activeStep].cta &&
                    (steps[activeStep].cta.type === "button" ? (
                      <Button className="group/btn relative h-12 w-56 cursor-pointer overflow-hidden rounded-md bg-gradient-to-b from-[#A42A2E] to-[#1A0707] px-0 !text-[#FFFFFF] transition-colors text-base font-semibold shadow-xl border-0 mt-4">
                        {steps[activeStep].cta.hoverText ? (
                          <>
                            <span className="relative z-10 flex translate-y-0 items-center justify-center transition-transform duration-300 ease-in-out group-hover/btn:translate-y-[150%] !text-[#FFFFFF]">
                              {steps[activeStep].cta.text}
                            </span>
                            <span className="absolute z-10 inset-0 flex -translate-y-[150%] items-center justify-center transition-transform duration-300 ease-in-out group-hover/btn:translate-y-0 !text-[#FFFFFF]">
                              {steps[activeStep].cta.hoverText}
                            </span>
                          </>
                        ) : (
                          <span className="relative z-10 flex items-center justify-center !text-[#FFFFFF]">
                            {steps[activeStep].cta.text}
                          </span>
                        )}
                      </Button>
                    ) : (
                      <a
                        href="#"
                        className="inline-flex items-center mt-4 text-sm font-bold text-white hover:opacity-70 transition-opacity"
                      >
                        <CornerDownRight className="w-4 h-4 mr-2" />
                        Book a free call
                      </a>
                    ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}