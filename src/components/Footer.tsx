import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-20 px-4 md:px-6 border-t border-black bg-[#faeaca]">
      <div className="container mx-auto max-w-5xl">
        
        <div className="grid grid-cols-2 md:flex md:justify-between gap-8 text-left w-full">
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase">About us</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="/team" className="hover:text-black">Team</a></li>
              <li><a href="https://www.google.com/maps?rlz=1C1GCEA_enMA1157MA1157&gs_lcrp=EgZjaHJvbWUqCAgAEEUYJxg7MggIABBFGCcYOzIHCAEQLhiABDIGCAIQRRhAMgYIAxBFGDkyBwgEEAAYgAQyBwgFEAAYgAQyBwgGEAAYgAQyEwgHEC4YrwEYxwEYgAQYmAUYmQXSAQgxNjYzajBqN6gCALACAA&um=1&ie=UTF-8&fb=1&gl=ma&sa=X&geocode=KSVSUD5UCTsTMWR_h4VL9kmF&daddr=Via+Francesco+Petrarca,+80,+80123+Napoli+NA,+%D8%A5%D9%8A%D8%B7%D8%A7%D9%84%D9%8A%D8%A7" target="_blank" rel="noopener noreferrer" className="hover:text-black">Location</a></li>
              <li><a href="https://www.napuleth.org/archive/2025" target="_blank" rel="noopener noreferrer" className="hover:text-black">Archive 2025</a></li>
              <li><a href="https://www.napuleth.org/archive/2024" target="_blank" rel="noopener noreferrer" className="hover:text-black">Archive 2024</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase">Join us</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="https://docsend.com/view/zaw8ij7k9avkcg6z" target="_blank" rel="noopener noreferrer" className="hover:text-black">Sponsor us</a></li>
              <li><a href="https://speak.ctrlshift.events/" target="_blank" rel="noopener noreferrer" className="hover:text-black">Join as a speaker</a></li>
              <li><a href="https://t.me/napulETH" target="_blank" rel="noopener noreferrer" className="hover:text-black">Text us</a></li>
              <li><a href="https://t.me/napulETH" target="_blank" rel="noopener noreferrer" className="hover:text-black">Volunteer</a></li>
            </ul>
          </div>
           <div>
            <h4 className="font-bold mb-4 text-sm uppercase">Follow us</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="https://x.com/napulETH" target="_blank" rel="noopener noreferrer" className="hover:text-black flex items-center gap-2"><Twitter className="w-4 h-4" /> Twitter</a></li>
              <li><a href="https://www.instagram.com/napulETH/" target="_blank" rel="noopener noreferrer" className="hover:text-black flex items-center gap-2"><Instagram className="w-4 h-4" /> Instagram</a></li>
              <li><a href="https://www.linkedin.com/company/napul-eth" target="_blank" rel="noopener noreferrer" className="hover:text-black flex items-center gap-2"><Linkedin className="w-4 h-4" /> Linkedin</a></li>
              <li><a href="https://t.me/napuleth" target="_blank" rel="noopener noreferrer" className="hover:text-black flex items-center gap-2"><Send className="w-4 h-4" /> Telegram</a></li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <h4 className="font-bold mb-4 text-sm uppercase">Date</h4>
              <p className="text-sm text-gray-600">8 -14 June 2026</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-sm uppercase">Location</h4>
              <p className="text-sm text-gray-600">Villa Doria D'Angri, Via Francesco Petrarca,<br />80, 80123 Napoli NA</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 w-full border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
           <p>© 2024 Clara Agency. All rights reserved.</p>
           <p>Designed with love.</p>
        </div>
      </div>
    </footer>
  );
}
