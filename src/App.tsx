import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Benefits } from "./components/Benefits";
import { FeatureSection } from "./components/FeatureSection";
import { CardGrid } from "./components/CardGrid";
import { Process } from "./components/Process";
import { Testimonial } from "./components/Testimonial";
import { Comparison } from "./components/Comparison";
import { Metrics } from "./components/Metrics";
import { Team } from "./components/Team";
import { FAQ } from "./components/FAQ";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
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
        
        <div className="hidden">
          <Testimonial />
          <Comparison />
          <Metrics />
          <FAQ />
        </div>
        <Team />
      </main>
      <Footer />
    </div>
  );
}