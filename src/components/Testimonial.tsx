import { Quote } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Testimonial() {
  return (
    <section className="py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="relative rounded-3xl overflow-hidden h-[400px] flex items-center">
          <div className="absolute inset-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1760298479587-52cd4a946f66?w=1600&q=80"
              alt="Testimonial Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
          
          <div className="relative z-10 p-8 md:p-16 max-w-3xl">
            <div className="bg-white/20 backdrop-blur-md p-3 rounded-xl inline-block mb-6">
              <Quote className="w-6 h-6 text-white fill-white" />
            </div>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-8">
              "They didn't overwhelm us with jargon. They just built exactly what we needed. We're saving 25 hours a week and saw ROI in under two months."
            </h2>
            
            <div>
              <p className="font-bold text-white text-lg">Sarah Vloss</p>
              <p className="text-white/80 text-sm">Founder, Global Tech Solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
