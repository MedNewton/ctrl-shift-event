import { Header } from "./Header";
import { Hero } from "./Hero";
import { Benefits } from "./Benefits";
import { FeatureSection } from "./FeatureSection";
import { CardGrid } from "./CardGrid";
import { Process } from "./Process";
import { Testimonial } from "./Testimonial";
import { Comparison } from "./Comparison";
import { Metrics } from "./Metrics";
import { Team } from "./Team";
import { EventTracks } from "./EventTracks";
import { Sponsors } from "./Sponsors";
import { Newsletter } from "./Newsletter";
import { FAQ } from "./FAQ";
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

        <div className="hidden">
          <Testimonial />
          <Comparison />
          <Metrics />
          <FAQ />
        </div>
        <Team />
        <Sponsors />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
