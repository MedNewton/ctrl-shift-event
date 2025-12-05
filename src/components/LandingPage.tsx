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

export function LandingPage() {
  return (
    <div className="min-h-screen bg-[#faeaca] text-[#1A1A1A] font-sans selection:bg-orange-200 selection:text-black">
      <Header />
      <main>
        <Hero />
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
