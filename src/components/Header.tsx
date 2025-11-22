import { Button } from "./ui/button";
import { Link } from "lucide-react";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-[#faeaca]/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <a href="/" className="block text-black hover:opacity-80 transition-opacity">
            <Logo className="h-4 w-auto" />
          </a>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="/" className="text-sm font-medium text-black hover:text-black/60 transition-colors">
            Home
          </a>
          <a href="#about" className="text-sm font-medium text-black hover:text-black/60 transition-colors flex items-center gap-1">
            About
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <Button className="group relative h-10 cursor-pointer overflow-hidden rounded-md bg-black px-6 text-[#FAF9F6] transition-colors hover:bg-[#942629]">
            <span className="flex translate-y-0 items-center justify-center transition-transform duration-300 ease-in-out group-hover:translate-y-[150%]">
              Get your tickets
            </span>
            <span className="absolute inset-0 flex -translate-y-[150%] items-center justify-center transition-transform duration-300 ease-in-out group-hover:translate-y-0">
              Coming soon
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
}
