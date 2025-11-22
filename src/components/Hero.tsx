import { Button } from "./ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { OrnamentalReveal } from "./OrnamentalReveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 md:pt-32 pb-8 md:pb-12 px-4 md:px-6">
      <div className="container mx-auto max-w-5xl text-center">
        <h1 className="text-3xl md:text-6xl font-medium tracking-tight leading-tight text-[#1A1A1A] mb-6 px-4 md:px-20">
          Southern Italy’s <br /> Gateway to the Future
        </h1>
        
        <p className="mx-auto max-w-3xl text-lg text-gray-600 mb-10 px-8 md:px-32">
          <span className="block">8–14 June 2026 · Naples, Italy</span>
          A world-class summit uniting the pioneers of AI, Quantum Computing, and Web3.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <Button className="group relative h-11 cursor-pointer overflow-hidden rounded-md bg-black px-6 text-[#FAF9F6] transition-colors hover:bg-[#942629] text-sm font-medium">
            <span className="flex translate-y-0 items-center justify-center transition-transform duration-300 ease-in-out group-hover:translate-y-[150%]">
              Get your tickets
            </span>
            <span className="absolute inset-0 flex -translate-y-[150%] items-center justify-center transition-transform duration-300 ease-in-out group-hover:translate-y-0">
              Coming soon
            </span>
          </Button>
          <Button asChild className="group relative h-11 cursor-pointer rounded-md bg-[#E6DACD] px-5 text-[#2A2A2A] hover:bg-[#DCC8B3] text-sm font-medium">
            <a href="https://docsend.com/v/sbjcj/ctrlshift2026" target="_blank" rel="noopener noreferrer">
              {/* Ghost element for sizing */}
              <span className="invisible flex items-center gap-2">
                <span>Become a sponsor</span>
                <ArrowRight className="h-4 w-4" />
              </span>
              
              {/* Animated content */}
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="mr-2 overflow-hidden whitespace-nowrap transition-all duration-300 ease-in-out group-hover:mr-0 group-hover:max-w-0 group-hover:opacity-0">
                  Become a sponsor
                </span>
                <ArrowRight className="h-4 w-4 transition-all duration-300 group-hover:animate-pulse-scale" />
              </span>
            </a>
          </Button>
        </div>

        {/* Abstract Visual */}
        <div className="relative mx-auto max-w-4xl aspect-[2/1] rounded-3xl overflow-hidden shadow-md bg-[#942629]">
          <OrnamentalReveal />
        </div>

      </div>
    </section>
  );
}
