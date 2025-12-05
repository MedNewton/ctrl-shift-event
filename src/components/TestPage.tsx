import { Header } from "./Header";
import { TestHero } from "./TestHero";
import bgImage from "figma:asset/7b46dd6567537c45c6d4ed225b0c39db0243e924.png";

export function TestPage() {
  return (
    <div 
      className="min-h-screen text-[#1A1A1A] font-sans selection:bg-orange-200 selection:text-black"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <Header />
      <main>
        <TestHero />
      </main>
    </div>
  );
}
