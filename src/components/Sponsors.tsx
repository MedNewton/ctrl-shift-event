import React from "react";

import chainlink from "../assets/images/sponsors/chainlink.png";
import neverlocal from "../assets/images/sponsors/neverlocal.png";
import nex from "../assets/images/sponsors/NEX logo.png";
import quill from "../assets/images/sponsors/QuillAudits.png";
import john from "../assets/images/sponsors/lilic.png";
import fareimpresa from "../assets/images/sponsors/fareimpressa.png";
import mood from "../assets/images/sponsors/mood.png";
import bybit from "../assets/images/sponsors/bybit.png";
import coinmarketcap from "../assets/images/sponsors/CMC.png";
import bitget from "../assets/images/sponsors/Bitget.png";
import wirex from "../assets/images/sponsors/Wirex.png";
import degate from "../assets/images/sponsors/degate.png";

export function Sponsors() {
  const sponsors = [
    { name: "Chainlink", logo: chainlink, scale: 0.9 },
    { name: "CoinMarketCap", logo: coinmarketcap, scale: 1 },
    { name: "Bitget", logo: bitget, scale: 1.5 },
    { name: "Wirex", logo: wirex, scale: 1.2 },
    { name: "DeGate", logo: degate, scale: 0.7 },
    { name: "Neverlocal", logo: neverlocal, scale: 2.1 },
    { name: "Nex", logo: nex, scale: 0.7 },
    { name: "QuillAudits", logo: quill, scale: 1.1 },
    { name: "John Lilic", logo: john, scale: 0.8 },
    { name: "Fare Impresa", logo: fareimpresa, scale: 0.85 },
    { name: "Mood", logo: mood, scale: 0.7 },
    { name: "Bybit", logo: bybit, scale: 0.95 },
  ];

  return (
    <section className="pb-24 pt-0 px-4 md:px-6 bg-transparent">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Our{" "}
            <span className="italic bg-gradient-to-r from-[#A42A2E] to-[#1A0707] bg-[length:200%_auto] animate-text-gradient bg-clip-text text-transparent">
              Sponsors
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {sponsors.map((sponsor, i) => (
            <div
              key={i}
              className="flex items-center justify-center w-full h-24"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                style={{ transform: `scale(${sponsor.scale})` }}
                className={`max-h-10 max-w-full object-contain grayscale brightness-200 contrast-50 opacity-80 hover:grayscale-0 hover:brightness-100 hover:contrast-100 hover:opacity-100 transition-all duration-300 ${
                  i === 5 || i === 8 ? "invert" : ""
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}