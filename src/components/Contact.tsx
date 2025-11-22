import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Contact() {
  return (
    <section className="py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 bg-[#faeaca] rounded-3xl overflow-hidden">
          {/* Left Side - Visual */}
          <div className="relative min-h-[600px] p-12 flex flex-col justify-end rounded-3xl overflow-hidden text-white">
            <div className="absolute inset-0">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1760442903505-55d8ce6beff8?w=1000&q=80"
                alt="Contact Background"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1">
                   <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "0s" }}/>
                   <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}/>
                   <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}/>
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-white/80">PEACE OF MIND GUARANTEE</span>
              </div>
              
              <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6">
                Turn confusion into clarity, today.
              </h2>
              
              <p className="text-white/80 text-lg max-w-md mb-12">
                Book a free 30-minute consultation call with our team and understand the potential of AI for your business.
              </p>
              
              <div className="flex items-center justify-between text-white/60 text-sm font-mono">
                 <span>Based in London</span>
                 <span>Remote First</span>
                 <span>Global Reach</span>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="p-8 md:p-12 bg-white rounded-3xl">
            <form className="space-y-6">
              <div className="space-y-4">
                <Label htmlFor="name">Name *</Label>
                <Input id="name" placeholder="Jane Doe" className="bg-transparent border-b border-gray-300 rounded-none px-0 shadow-none focus-visible:ring-0 focus-visible:border-black h-12" />
              </div>
              
              <div className="space-y-4">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" placeholder="jane@company.com" className="bg-transparent border-b border-gray-300 rounded-none px-0 shadow-none focus-visible:ring-0 focus-visible:border-black h-12" />
              </div>

              <div className="space-y-4 pt-4">
                 <Label>What are you interested in?</Label>
                 <div className="flex flex-wrap gap-3">
                    {["AI Strategy", "Tech Stack Audit", "Full Flow", "Workshops", "Implementation", "Consulting"].map((item) => (
                       <div key={item} className="flex items-center space-x-2 border border-gray-300 rounded-full px-4 py-2 bg-white/50 hover:bg-white transition-colors cursor-pointer">
                          <Checkbox id={item} className="rounded-full" />
                          <label htmlFor={item} className="text-sm cursor-pointer font-medium text-gray-600">{item}</label>
                       </div>
                    ))}
                 </div>
              </div>

              <div className="space-y-4 pt-4">
                 <div className="grid grid-cols-2 gap-6">
                    <div>
                       <Label htmlFor="budget">Budget Estimation</Label>
                       <Input id="budget" placeholder="$5k - $10k" className="mt-2 bg-white/50 rounded-lg border-gray-200" />
                    </div>
                    <div>
                       <Label htmlFor="timeline">Timeline Expectation</Label>
                       <Input id="timeline" placeholder="1-2 months" className="mt-2 bg-white/50 rounded-lg border-gray-200" />
                    </div>
                 </div>
              </div>
              
              <div className="space-y-4 pt-4">
                <Label htmlFor="message">Tell us about your project</Label>
                <Textarea id="message" placeholder="We are looking to automate..." className="bg-[#F0EFEA] border-0 rounded-xl min-h-[120px] resize-none p-4 focus-visible:ring-1 focus-visible:ring-black/10" />
              </div>

              <Button type="button" className="w-full rounded-full bg-[#2A2A2A] text-[#FAF9F6] hover:bg-black h-14 text-lg mt-4">
                Book a call <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <p className="text-center text-xs text-gray-400 mt-4">
                 By clicking send, you agree to our <span className="underline">Terms</span> and <span className="underline">Privacy Policy</span>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

import { ArrowRight } from "lucide-react";
