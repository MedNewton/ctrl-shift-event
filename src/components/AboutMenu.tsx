import { ImageWithFallback } from "./figma/ImageWithFallback";
import bgPattern from "../assets/images/decorationImage.webp";

export function AboutMenu() {
  const menuItems = [
    {
      title: "Speakers",
      subtitle: "Find the speakers of ctrl/shift 2026",
      badge: "Coming soon",
    },
    {
      title: "Team",
      subtitle: "Meet the team behind ctrl/shift 2026",
    },
    {
      title: "Event Location",
      subtitle: "Find the location of our event",
    },
    {
      title: "Archive 2025",
      subtitle: "Previous edition of NapulETH",
    },
    {
      title: "Archive 2024",
      subtitle: "First edition of NapulETH",
    },
  ];

  return (
    <div className="w-[500px] rounded-xl p-4 bg-gradient-to-b from-[#942629] to-[#1a0707] shadow-2xl overflow-hidden border border-white/10">
      <div className="flex gap-2">
        {/* Left Column: Navigation Items */}
        <div className="flex-1 flex flex-col gap-4 py-2 pl-2">
          {menuItems.map((item) => (
            <div
              key={item.title}
              className="group/item cursor-pointer"
            >
              <div className="flex items-center gap-2 mb-0.5">
                <h3 className="text-lg font-medium text-white leading-none group-hover/item:text-white/90 transition-colors">
                  {item.title}
                </h3>
                {item.badge && (
                  <span className="bg-white/20 text-white text-[10px] px-2 py-0.5 rounded-full font-medium whitespace-nowrap backdrop-blur-sm">
                    {item.badge}
                  </span>
                )}
              </div>
              <p className="text-white/60 text-sm leading-tight group-hover/item:text-white/80 transition-colors">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* Right Column: Image */}
        <div className="w-[200px] shrink-0">
          <div className="h-full w-full rounded-lg overflow-hidden relative bg-[#E59804]">
            <img
              src={bgPattern}
              alt="Decorative pattern"
              className="w-full h-full object-cover mix-blend-multiply"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}