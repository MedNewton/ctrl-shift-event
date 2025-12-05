import React from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import featureBg from "../assets/images/lastVersion/stats/statsBg.png";
import decorationImg from "../assets/images/decorationImage.png";

interface FeatureCardProps {
  value: string;
  label: string;
  subtext?: string;
}

function FeatureCard({
  value,
  label,
  subtext,
}: FeatureCardProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl px-8 py-6 aspect-square md:aspect-auto md:min-h-[12rem] flex flex-col justify-center items-center text-center bg-[linear-gradient(180deg,rgba(148,38,41,0.1)_0%,rgba(148,38,41,0.80)_100%)] backdrop-blur-[12px] border border-[#DCB821] shadow-xl transition-transform hover:scale-[1.02] duration-300 group">
      <div className="relative z-10">
        <h3 className="font-serif text-4xl md:text-5xl font-medium text-white drop-shadow-sm mb-4">
          {value}
        </h3>
        <p className="!text-[#DCB821] font-medium text-lg leading-tight max-w-[200px]">
          {label}
        </p>
        {subtext && (
          <p className="text-white/70 text-sm mt-2">
            {subtext}
          </p>
        )}
      </div>
    </div>
  );
}

export function FeatureSection({
  type,
}: {
  type: "problem" | "solution";
}) {
  // Updated content to match specific stats request
  const cards = [
    { value: "1,200+", label: "People happy" },
    { value: "80+", label: "Speakers" },
    { value: "35+", label: "Sponsors" },
    { value: "70+", label: "Partners" },
  ];

  return (
    <section className="pt-24 pb-6 px-4 md:px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] mb-6 text-center">
          Last version :{" "}
          <span className="italic bg-gradient-to-r from-[#A42A2E] to-[#1A0707] bg-[length:200%_auto] animate-text-gradient bg-clip-text text-transparent">
            NapulETH
          </span>{" "}
          2025
        </h2>
        <p className="text-center text-lg text-gray-700 max-w-2xl mx-auto mb-12">
          NapulETH 2025 was a great event! Hundreds of people
          came together to celebrate the fusion of culture and
          frontier tech.
        </p>

        <div className="relative rounded-[2.5rem] overflow-hidden p-6 md:p-12 shadow-2xl">
          {/* Background Image */}
          <div className="absolute inset-0 scale-125">
            <ImageWithFallback
              src={featureBg}
              alt="Background"
              className="w-full h-full object-cover object-bottom"
            />
          </div>

          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {cards.map((card, i) => (
              <FeatureCard {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}