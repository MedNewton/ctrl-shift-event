import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CornerDownRight } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import buildImage from "figma:asset/265b6d2f1196be534c3a5b925bc05b9591563ae5.png";
import hackathonImage from "figma:asset/5afe7a0a697d2c5b678c04d9da98b18c2f10ab71.png";
import visionsImage from "figma:asset/a41d9e9687241d31bda39bb245e51ff5ab1b9e40.png";
import meetupsImage from "figma:asset/ae29010419b2421b0c8521d0d0969fef352ebdb5.png";
import sideEventsImage from "figma:asset/d335aace473ce9dc6077429d0f86547800a9db27.png";

const steps = [
  {
    id: "01",
    title: "Hackathon",
    description: "Prototype bold ideas, solve real challenges, and compete for prizes, grants, and ecosystem opportunities.",
    image: hackathonImage,
    cta: {
      type: "button",
      text: "Apply for hackathon",
      hoverText: "Coming soon"
    }
  },
  {
    id: "02",
    title: "Visions",
    description: "Aesthetic, economic, and symbolic dimensions merge and transform, guided by a network of interconnected actors.",
    image: visionsImage
  },
  {
    id: "03",
    title: "Side Events",
    description: "Explore the Ethereum community with interactive workshops, panels, and networking.",
    image: sideEventsImage
  },
  {
    id: "04",
    title: "Meetups",
    description: "where a community of blockchain enthusiasts and seasoned professionals converge to foster knowledge exchange.",
    image: meetupsImage
  }
];

export function Process() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="pt-0 pb-0 px-4 md:px-6 bg-[#faeaca]">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-medium text-[#1A1A1A]">
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
                className={`relative cursor-pointer transition-all duration-300 px-6 py-4 rounded-2xl ${
                  activeStep === index ? "bg-gray-500/20" : "hover:bg-white/20"
                }`}
              >
                <div>
                  <h3
                    className={`text-3xl md:text-5xl transition-all duration-300 ${
                      activeStep === index 
                        ? "text-[#1A1A1A] pl-6" 
                        : "text-gray-500 pl-0"
                    }`}
                  >
                    {step.title}
                    <sup className="text-sm ml-1 align-top font-medium">{step.id}</sup>
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
                  <h4 className="text-xl font-medium text-[#1A1A1A]">
                    {steps[activeStep].title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed max-w-md">
                    {steps[activeStep].description}
                  </p>
                  
                  {steps[activeStep].cta && (
                    steps[activeStep].cta.type === "button" ? (
                      <Button className="group relative h-10 cursor-pointer overflow-hidden rounded-md bg-black px-6 text-[#FAF9F6] transition-colors hover:bg-[#942629] mt-4">
                        <span className="flex translate-y-0 items-center justify-center transition-transform duration-300 ease-in-out group-hover:translate-y-[150%]">
                          {steps[activeStep].cta.text}
                        </span>
                        <span className="absolute inset-0 flex -translate-y-[150%] items-center justify-center transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                          {steps[activeStep].cta.hoverText}
                        </span>
                      </Button>
                    ) : (
                      <a 
                        href="#" 
                        className="inline-flex items-center mt-4 text-sm font-bold text-[#1A1A1A] hover:opacity-70 transition-opacity"
                      >
                        <CornerDownRight className="w-4 h-4 mr-2" />
                        Book a free call
                      </a>
                    )
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
