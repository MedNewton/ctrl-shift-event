import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Comparison() {
  return (
    <section className="py-20 px-4 md:px-6 bg-white/50">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] mb-12">
          We're not your <span className="italic text-gray-500">typical</span> AI agency.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Other Agencies - Dark/Chaos */}
          <div className="relative h-[400px] rounded-3xl overflow-hidden group">
            <div className="absolute inset-0 bg-black">
              {/* Simulated noise/chaos */}
              <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-800 via-black to-black opacity-80" />
            </div>
            
            <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center">
               <h3 className="font-serif text-4xl text-white mb-4">Other agencies</h3>
               <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 max-w-sm border border-white/10">
                 <p className="text-gray-300 text-sm">
                   "High retainer costs, generic advice, and tech-speak that leaves you more confused than when you started."
                 </p>
               </div>
            </div>
          </div>

          {/* Clara - Warm/Clarity */}
          <div className="relative h-[400px] rounded-3xl overflow-hidden group">
             <div className="absolute inset-0">
               <ImageWithFallback 
                 src="https://images.unsplash.com/photo-1762715281765-aa051ce82a9a?w=800&q=80" 
                 alt="Clara Clarity"
                 className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-orange-500/20 mix-blend-overlay" />
             </div>
             
             <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center">
                <h3 className="font-serif text-4xl text-white mb-4 drop-shadow-md">Clara</h3>
                <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 max-w-sm border border-white/20">
                  <p className="text-white font-medium text-sm">
                    "Real ROI, clear communication, and systems that actually work for your specific business needs."
                  </p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
