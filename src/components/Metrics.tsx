import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Metrics() {
  return (
    <section className="py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 block">RESULTS</span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] mb-6">
              We help automate <span className="italic text-gray-500">what matters most.</span>
            </h2>
            <p className="text-gray-600 mb-8">
              From simple tasks to complex workflows, we identify the bottlenecks in your operations and solve them.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl">
                 <h3 className="text-3xl font-bold mb-1">50+</h3>
                 <p className="text-xs uppercase tracking-wider text-gray-500 font-bold">Processes</p>
                 <p className="text-xs text-gray-400 mt-1">Automated per month</p>
              </div>
              <div className="bg-white p-6 rounded-2xl">
                 <h3 className="text-3xl font-bold mb-1">40%</h3>
                 <p className="text-xs uppercase tracking-wider text-gray-500 font-bold">Efficiency</p>
                 <p className="text-xs text-gray-400 mt-1">Increase in output</p>
              </div>
            </div>
          </div>

          <div className="h-[400px] rounded-3xl overflow-hidden relative bg-purple-100">
             <ImageWithFallback
                src="https://images.unsplash.com/photo-1760442903505-55d8ce6beff8?w=800&q=80"
                alt="Abstract Purple"
                className="w-full h-full object-cover mix-blend-multiply opacity-80"
             />
             <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-white text-3xl italic">Hamilton</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
