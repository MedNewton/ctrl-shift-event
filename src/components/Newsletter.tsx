import { Button } from "./ui/button";
import { Input } from "./ui/input";
import decorationImg from "../assets/images/decorationImage.png";

export function Newsletter() {
  return (
    <section className="pb-24 pt-0 px-4 md:px-6 bg-[rgba(6,6,6,0)]">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] mb-4">
            Our{" "}
            <span className="italic bg-gradient-to-r from-[#A42A2E] to-[#1A0707] bg-[length:200%_auto] animate-text-gradient bg-clip-text text-transparent">
              Newsletter
            </span>
          </h2>
        </div>

        <div className="relative overflow-hidden rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 bg-[image:linear-gradient(180deg,#A42A2E,#1A0707,#A42A2E)] bg-[length:100%_200%] bg-top">
          {/* Decorative Image */}
          <img
            src={decorationImg}
            alt=""
            className="absolute opacity-50 right-0 top-1/2 -translate-y-1/2 pointer-events-none"
          />

          <div className="relative z-10 max-w-lg text-center md:text-left">
            <h3 className="font-medium text-lg text-white">
              Stay updated with our latest news
            </h3>
            <p className="text-sm text-white font-medium font-normal mt-1 opacity-90">
              Join our community and never miss an update about
              our events and speakers.
            </p>
          </div>

          <div className="relative z-10 flex flex-col gap-3 w-full md:w-auto items-stretch">
            <Input
              type="email"
              placeholder="Enter your email"
              className="h-12 min-w-[240px] bg-white border-0 text-black placeholder:text-gray-500 focus-visible:ring-[#A42A2E] focus-visible:border-transparent"
            />
            <Button className="group/btn relative h-12 w-full cursor-pointer overflow-hidden rounded-md bg-[linear-gradient(0deg,#000_0%,#131313_23.08%,#191919_45.67%,#1E1E1E_63.46%,#222_100%)] text-[#FAF9F6] transition-colors text-base font-semibold shadow-xl border-0 hover:text-white">
              <img
                src={decorationImg}
                alt=""
                className="absolute -right-12 top-1/2 -translate-y-1/2 pointer-events-none opacity-0 transition-opacity duration-300 group-hover/btn:opacity-[0.35]"
              />
              <span className="relative z-10 !text-[#FFFFFF]">
                Subscribe
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}