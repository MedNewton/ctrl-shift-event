import { ImageWithFallback } from "./figma/ImageWithFallback";
import quantumImg from "figma:asset/f8b67f71cb82e155adcd09a861d42ccc0aed605d.png";
import web3Img from "figma:asset/47e1ac401499037b5ef978e3f39f26681fcb8216.png";
import networkingImg from "figma:asset/6bd3caec5fcbc03d7ebd20ad96010154047472dd.png";
import aiImg from "figma:asset/73f4df02ed3ef778b08fff9cddd07493bf1e5046.png";
import lawImg from "figma:asset/0413f8a4ef05d0dcb4abcf26eb7081db20d17333.png";
import artImg from "figma:asset/7d480f09f9bc0b03210d72c19e8b9bb685447850.png";

const cards = [
  {
    tag: "Quantum Computing",
    image: quantumImg
  },
  {
    tag: "AI",
    image: aiImg
  },
  {
    tag: "Web3",
    image: web3Img
  },
  {
    tag: "Law",
    image: lawImg
  },
  {
    tag: "Art",
    image: artImg
  },
  {
    tag: "Networking Opportunities",
    image: networkingImg
  }
];

export function CardGrid() {
  return (
    <section className="pb-24 px-4 md:px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <div key={index} className="relative rounded-3xl overflow-hidden h-[320px] group shadow-lg cursor-pointer">
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                <ImageWithFallback 
                  src={card.image} 
                  alt={card.tag} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:bg-black/20" />
              
              <div className="absolute top-6 left-6 z-20">
                <span className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium">
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
