import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";

export function Team() {
  const team = [
    {
      name: "David Cole",
      role: "Head of Strategy",
      image: "https://images.unsplash.com/photo-1642610225765-a1cd62b7b565?w=600&q=80"
    },
    {
      name: "Jane Cooper",
      role: "Lead Engineer",
      image: "https://images.unsplash.com/photo-1623594675959-02360202d4d6?w=600&q=80"
    },
    {
      name: "Paul Kim",
      role: "Product Design",
      image: "https://images.unsplash.com/photo-1750187655549-b5009f762677?w=600&q=80"
    },
    {
      name: "Emma Banks",
      role: "Operations",
      image: "https://images.unsplash.com/photo-1622825312265-5d5caaed05b4?w=600&q=80"
    }
  ];

  return (
    <section className="pb-24 pt-0 px-4 md:px-6 bg-[#faeaca]">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 block">SPEAKERS</span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] mb-4">
             Voices from <span className="italic text-gray-500">around</span> the world
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Faces, stories, and ideas that make our event unforgettable
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {team.map((member, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl aspect-[3/4]">
              <ImageWithFallback
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover blur-md transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
        
        <div className="mt-6 bg-white rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
           <div>
             <h3 className="font-medium text-lg">Want to be a speaker at ctrl/shift?</h3>
             <p className="text-sm text-gray-500">We are always looking for talented people who want to come and share their ideas with the blockchain community</p>
           </div>
           <Button asChild className="h-10 rounded-md bg-black px-6 text-[#FAF9F6] transition-colors hover:bg-[#942629] cursor-pointer">
             <a href="https://speak.ctrlshift.events/">Become a speaker</a>
           </Button>
        </div>
      </div>
    </section>
  );
}
