import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

interface StepProps {
  number: string;
  title: string;
  description: string;
  buttonText: string;
  buttonHoverText?: string;
  link?: string;
}

function Step({ number, title, description, buttonText, buttonHoverText, link }: StepProps) {
  const content = buttonHoverText ? (
    <>
      <span className="flex translate-y-0 items-center justify-center transition-transform duration-300 ease-in-out group-hover/btn:translate-y-[150%]">
        {buttonText}
      </span>
      <span className="absolute inset-0 flex -translate-y-[150%] items-center justify-center transition-transform duration-300 ease-in-out group-hover/btn:translate-y-0">
        {buttonHoverText}
      </span>
    </>
  ) : (
    <span>{buttonText}</span>
  );

  return (
    <div className="flex gap-8 items-start group">
      <span className="text-xs font-medium text-gray-400 mt-1.5">{number}</span>
      <div>
        <h3 className="font-medium text-xl text-[#1A1A1A] mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed max-w-md mb-6">
          {description}
        </p>
        <Button 
          asChild={!!link}
          className="group/btn relative h-10 cursor-pointer overflow-hidden rounded-md bg-black px-6 text-[#FAF9F6] transition-colors hover:bg-[#942629] text-sm font-medium"
        >
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer">
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
      description: "Become a sponsor and get the opportunity to showcase your brand to a global audience.",
      buttonText: "Become a sponsor",
      link: "https://docsend.com/view/zaw8ij7k9avkcg6z"
    },
    {
      number: "02",
      title: "Become a speaker",
      description: "Become a speaker and share your expertise with a global audience.",
      buttonText: "Become a speaker",
      link: "https://speak.ctrlshift.events/"
    },
    {
      number: "03",
      title: "Explore our agenda",
      description: "Explore the event agenda and find the best talks, panels, workshops & more.",
      buttonText: "Check the agenda",
      buttonHoverText: "Coming soon"
    }
  ];

  return (
    <section className="py-10 md:py-16 px-4 md:px-6 bg-[#faeaca]">
      <div className="container mx-auto max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6 block">
              THE MOMENT OUR IDENTITY EXPANDS
            </span>
            
            <h2 className="text-4xl md:text-5xl font-medium text-[#1A1A1A] mb-6 leading-tight tracking-tight">
              From <span className="font-serif italic text-gray-500">NapulETH</span> <br />
              to <span className="text-[#942629]">ctrl/shift</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 max-w-md leading-relaxed">
              What started as a spark in Web3 now unfolds into a wider constellation— AI, Quantum Computing, blockchain, and the technologies that bend the horizon.
            </p>
            <p className="text-lg text-gray-600 mb-6 max-w-md leading-relaxed">
              This year, thinkers and builders gather not just to speak, but to experiment, to collide, to imagine.
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-md leading-relaxed">
              Institutions, researchers, creators, and protocols meet under one roof to trace new patterns, uncover hidden connections, and turn emerging ideas into living, breathing experiences.
            </p>

            <p className="text-lg text-gray-600 mb-8 max-w-md leading-relaxed">
              A shift in scale, a shift in ambition, a shift in what’s possible: Welcome to a new chapter.
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-col space-y-10 lg:pt-10">
            {steps.map((step, i) => (
              <Step key={i} {...step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
