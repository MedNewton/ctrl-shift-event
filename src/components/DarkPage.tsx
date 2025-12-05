import React from "react";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Benefits } from "./Benefits";
import { FeatureSection } from "./FeatureSection";
import { CardGrid } from "./CardGrid";
import { Process } from "./Process";
import { Team } from "./Team";
import { EventTracks } from "./EventTracks";
import { Sponsors } from "./Sponsors";
import { Newsletter } from "./Newsletter";
import { Footer } from "./Footer";
import patternImg from "../assets/images/layer.png";

export function DarkPage() {
  return (
    <div className="min-h-screen relative font-sans selection:bg-orange-200 selection:text-black [&_h1]:text-white [&_h2]:text-white [&_h3]:text-white [&_p]:text-white [&_span]:text-white [&_a:not([class*='button'])]:text-white [&_li]:text-white">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#170300] to-[#841403]" />
        <img
          src={patternImg}
          alt=""
          className="absolute inset-0 opacity-20 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 backdrop-blur-[6px]"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent, black)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black)",
          }}
        />
      </div>
      <Header theme="dark" />
      <main>
        <Hero theme="dark" />
        <Benefits />
        <Process />

        {/* Problem Section */}
        <FeatureSection type="problem" />
        <CardGrid />
        <EventTracks />
        <Team />
        <Sponsors />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}