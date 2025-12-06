import React from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import decorationImg from "../assets/images/decorationImage.webp";

export function Team() {
  const team = [
    {
      name: "David Cole",
      role: "Head of Strategy",
      image:
        "https://images.unsplash.com/photo-1642610225765-a1cd62b7b565?w=600&q=80",
    },
    {
      name: "Jane Cooper",
      role: "Lead Engineer",
      image:
        "https://images.unsplash.com/photo-1623594675959-02360202d4d6?w=600&q=80",
    },
    {
      name: "Paul Kim",
      role: "Product Design",
      image:
        "https://images.unsplash.com/photo-1750187655549-b5009f762677?w=600&q=80",
    },
    {
      name: "Emma Banks",
      role: "Operations",
      image:
        "https://images.unsplash.com/photo-1622825312265-5d5caaed05b4?w=600&q=80",
    },
  ];

  return (
    <section className="pt-[0px] px-4 md:px-6 bg-transparent pr-[24px] pl-[24px] pb-[96px]">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-12">
          <span className="text-xs font-bold uppercase tracking-widest !text-[#DCB821] mb-4 block text-[14px]">
            SPEAKERS
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">
            Voices from{" "}
            <span className="italic bg-gradient-to-r from-[#A42A2E] to-[#1A0707] bg-[length:200%_auto] animate-text-gradient bg-clip-text text-transparent">
              around
            </span>{" "}
            the world
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl">
            Faces, stories, and ideas that make our event
            unforgettable
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {team.map((member, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl aspect-[3/4]"
            >
              <ImageWithFallback
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover blur-md transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 mb-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Apply{" "}
            <span className="italic bg-gradient-to-r from-[#A42A2E] to-[#1A0707] bg-[length:200%_auto] animate-text-gradient bg-clip-text text-transparent">
              Here
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

          <div className="relative z-10 max-w-2xl">
            <h3 className="font-medium text-lg text-white">
              Want to be a speaker at ctrl/shift?
            </h3>
            <p className="text-sm text-white font-medium font-normal text-[16px] pt-[0px] pr-[8px] pb-[0px] pl-[0px] mt-[0px] mr-[6px] mb-[0px] ml-[0px]">
              We are always looking for talented people who want
              to come and share their ideas with the blockchain
              community
            </p>
          </div>
          <Button
            asChild
            className="group/btn relative z-10 h-12 w-56 cursor-pointer overflow-hidden rounded-md bg-[linear-gradient(0deg,#000_0%,#131313_23.08%,#191919_45.67%,#1E1E1E_63.46%,#222_100%)] px-0 !text-[#DCB821] transition-colors text-base font-semibold shadow-xl border-0"
          >
            <a href="https://speak.ctrlshift.events/">
              <img
                src={decorationImg}
                alt=""
                className="absolute -right-12 top-1/2 -translate-y-1/2 pointer-events-none opacity-0 transition-opacity duration-300 group-hover/btn:opacity-[0.35]"
              />
              <span className="relative z-10 !text-[#FFFFFF]">
                Become a speaker
              </span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}