import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import napulethIcon from "../assets/images/napulethLogo.webp";
import ctrlShiftIcon from "../assets/images/rawLogo.webp";
import decorationImg from "../assets/images/decorationImage.webp";

interface StepProps {
  number: string;
  title: string;
  description: string;
  buttonText: string;
  buttonHoverText?: string;
  link?: string;
}

function Step({
  number,
  title,
  description,
  buttonText,
  buttonHoverText,
  link,
}: StepProps) {
  const content = (
    <>
      {buttonHoverText ? (
        <>
          <span className="relative z-10 flex translate-y-0 items-center justify-center transition-transform duration-300 ease-in-out group-hover/btn:translate-y-[150%]">
            {buttonText}
          </span>
          <span className="absolute z-10 inset-0 flex -translate-y-[150%] items-center justify-center transition-transform duration-300 ease-in-out group-hover/btn:translate-y-0">
            {buttonHoverText}
          </span>
        </>
      ) : (
        <span className="relative z-10">
          {buttonText}
        </span>
      )}
    </>
  );

  return (
    <div className="flex gap-8 items-start group">
      <span className="text-xs font-medium !text-[#FAD021] mt-1.5 font-bold text-[14px]">
        {number}
      </span>
      <div>
        <h3 className="font-medium text-xl text-white mb-3">
          {title}
        </h3>
        <p className="text-white/80 leading-relaxed max-w-md mb-[12px] mt-[0px] mr-[0px] ml-[0px]">
          {description}
        </p>
        <Button
          asChild={!!link}
          className="group/btn relative h-12 w-56 cursor-pointer overflow-hidden rounded-md px-0 text-base font-semibold border-0 hover:opacity-90 transition-opacity text-white"
          style={{
            background: "radial-gradient(50% 50% at 50% 50%, #942629 0%, #942629 100%)",
            boxShadow: "inset 0 -4px 2px 0 rgba(0, 0, 0, 0.25), inset 0 2px 1px 0 rgba(255, 255, 255, 0.25)"
          }}
        >
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {content}
            </a>
          ) : (
            content
          )}
        </Button>
      </div>
    </div>
  );
}

export function Benefits() {
  const steps = [
    {
      number: "01",
      title: "Become a sponsor",
      description:
        "We partner selectively — if your brand shapes the future, this is your stage.",
      buttonText: "Become a sponsor",
      link: "https://docsend.com/view/zaw8ij7k9avkcg6z",
    },
    {
      number: "02",
      title: "Become a speaker",
      description:
        "We’re selective, but simple: if you bring real value, you’re welcome on our stage.",
      buttonText: "Become a speaker",
      link: "https://speak.ctrlshift.events/",
    },
    {
      number: "03",
      title: "Explore our agenda",
      description:
        "Discover sessions across AI, Web3, and Quantum — the full agenda drops soon.",
      buttonText: "Check the agenda",
      buttonHoverText: "Coming soon",
    },
  ];

  return (
    <section className="md:pt-8 md:pb-16 px-4 md:px-6 bg-transparent pt-[8px] pr-[24px] pb-[64px] pl-[24px]">
      <div className="container mx-auto max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest !text-[#DCB821] mb-6 block text-[14px]">
              THE MOMENT OUR IDENTITY EXPANDS
            </span>

            <h2 className="text-4xl md:text-5xl font-medium text-white mb-6 leading-tight tracking-tight">
              From{" "}
              <span className="font-serif italic text-white/60 inline-flex items-center gap-2">
                NapulETH
                <ImageWithFallback
                  src={napulethIcon}
                  alt="NapulETH"
                  className="h-9 w-auto"
                />
              </span>{" "}
              <br />
              to{" "}
              <span className="!text-[#942629] inline-flex items-center gap-2">
                ctrl/shift
                <ImageWithFallback
                  src={ctrlShiftIcon}
                  alt="ctrl/shift"
                  className="h-6 w-auto mt-[4px] mr-[0px] mb-[0px] ml-[0px]"
                />
              </span>
            </h2>

            <p className="text-white/80 mb-6 max-w-md leading-relaxed">
              What started as a spark in Web3 now unfolds into a
              wider constellation—{" "}
              <span className="bg-gradient-to-r from-[#A42A2E] to-[#1A0707] bg-[length:200%_auto] animate-text-gradient bg-clip-text text-transparent font-medium">
                AI
              </span>
              ,{" "}
              <span className="bg-gradient-to-r from-[#A42A2E] to-[#1A0707] bg-[length:200%_auto] animate-text-gradient bg-clip-text text-transparent font-medium">
                Quantum Computing
              </span>
              ,{" "}
              <span className="bg-gradient-to-r from-[#A42A2E] to-[#1A0707] bg-[length:200%_auto] animate-text-gradient bg-clip-text text-transparent font-medium">
                blockchain
              </span>
              , and the technologies that bend the horizon.
            </p>
            <p className="text-white/80 mb-6 max-w-md leading-relaxed">
              This year,{" "}
              <span className="bg-gradient-to-r from-[#A42A2E] to-[#1A0707] bg-[length:200%_auto] animate-text-gradient bg-clip-text text-transparent font-medium">
                thinkers
              </span>{" "}
              and{" "}
              <span className="bg-gradient-to-r from-[#A42A2E] to-[#1A0707] bg-[length:200%_auto] animate-text-gradient bg-clip-text text-transparent font-medium">
                builders
              </span>{" "}
              gather not just to speak, but to experiment, to
              collide, to imagine.
            </p>
            <p className="text-white/80 mb-8 max-w-md leading-relaxed">
              <span className="bg-gradient-to-r from-[#A42A2E] to-[#1A0707] bg-[length:200%_auto] animate-text-gradient bg-clip-text text-transparent font-medium">
                Institutions
              </span>
              ,{" "}
              <span className="bg-gradient-to-r from-[#A42A2E] to-[#1A0707] bg-[length:200%_auto] animate-text-gradient bg-clip-text text-transparent font-medium">
                researchers
              </span>
              ,{" "}
              <span className="bg-gradient-to-r from-[#A42A2E] to-[#1A0707] bg-[length:200%_auto] animate-text-gradient bg-clip-text text-transparent font-medium">
                creators
              </span>
              , and{" "}
              <span className="bg-gradient-to-r from-[#A42A2E] to-[#1A0707] bg-[length:200%_auto] animate-text-gradient bg-clip-text text-transparent font-medium">
                protocols
              </span>{" "}
              meet under one roof to trace new patterns, uncover
              hidden connections, and turn emerging ideas into
              living, breathing experiences.
            </p>

            <p className="text-white/80 mb-8 max-w-md leading-relaxed">
              A shift in{" "}
              <span className="bg-gradient-to-r from-[#A42A2E] to-[#1A0707] bg-[length:200%_auto] animate-text-gradient bg-clip-text text-transparent font-medium">
                scale
              </span>
              , a shift in{" "}
              <span className="bg-gradient-to-r from-[#A42A2E] to-[#1A0707] bg-[length:200%_auto] animate-text-gradient bg-clip-text text-transparent font-medium">
                ambition
              </span>
              , a shift in what’s possible: Welcome to a new{" "}
              <span className="bg-gradient-to-r from-[#A42A2E] to-[#1A0707] bg-[length:200%_auto] animate-text-gradient bg-clip-text text-transparent font-medium">
                chapter
              </span>
              .
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-col space-y-10 lg:pt-10">
            {steps.map((step) => (
              <Step {...step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}