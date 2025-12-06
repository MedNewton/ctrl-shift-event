import React from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import quantumImg from "../assets/images/lastVersion/stats/quantum.webp";
import web3Img from "../assets/images/lastVersion/stats/web3.webp";
import networkingImg from "../assets/images/lastVersion/stats/networking.webp";
import aiImg from "../assets/images/lastVersion/stats/ai.webp";
import lawImg from "../assets/images/lastVersion/stats/law.webp";
import artImg from "../assets/images/lastVersion/stats/art.webp";
import foodImg from "../assets/images/lastVersion/stats/food.webp";
import institutionsImg from "../assets/images/lastVersion/stats/institutions.webp";

const cards = [
  {
    tag: "Quantum Computing",
    image: quantumImg,
  },
  {
    tag: "AI",
    image: aiImg,
  },
  {
    tag: "Web3",
    image: web3Img,
  },
  {
    tag: "Law",
    image: lawImg,
  },
  {
    tag: "Institutions",
    image: institutionsImg,
  },
  {
    tag: "Art",
    image: artImg,
  },
  {
    tag: "Networking Opportunities",
    image: networkingImg,
  },
  {
    tag: "Amazing Food",
    image: foodImg,
  },
];

export function CardGrid() {
  return (
    <section className="pb-24 px-4 md:px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative rounded-3xl overflow-hidden h-[320px] group shadow-lg cursor-pointer"
            >
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                <ImageWithFallback
                  src={card.image}
                  alt={card.tag}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:bg-black/20" />

              <div className="absolute top-6 left-6 z-20">
                <span className="bg-[#942629] !text-[#FFFFFF] px-4 py-2 rounded-lg text-sm font-medium">
                  {card.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}