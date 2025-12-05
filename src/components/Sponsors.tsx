import chainlink from "figma:asset/50117a58dac84626d271419e1a31bd1f467a3d6b.png";
import neverlocal from "figma:asset/986f99163d840705d43c3d2f29e62d486943f244.png";
import nex from "figma:asset/d86e813c97ead9d502a6b3cac4ab3f3aae3a2d4a.png";
import quill from "figma:asset/7d0b02e19b1f6ec5248d820ae924632dcc48be81.png";
import john from "figma:asset/ad6f552a49e32edae4848c87edd71fb31f470326.png";
import fareimpresa from "figma:asset/71f5c3c4769119832dea33afef882a60573bd36b.png";
import mood from "figma:asset/98339af9cb6d5e31d47a0c1a84ec6c0c562ad507.png";
import bybit from "figma:asset/090216e45b7aa5e04668a63fac1f902785f3ccbd.png";
import coinmarketcap from "figma:asset/e628b6fe17effbd9c3afb3e5677ea4cc0cdc9f7d.png";
import bitget from "figma:asset/5cba3ff75fb916f52d4b33a0cc6238a8134f9d9a.png";
import wirex from "figma:asset/803dab77fbe63d16b37c958dcf85986314a767ae.png";
import degate from "figma:asset/f2b714506d2cfa52177961c9caf9fd17237e5bde.png";

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