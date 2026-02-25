import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E4E6E8] h-[72px]">
      <div className="max-w-[1120px] mx-auto px-4 md:px-6 h-full flex items-center justify-between">
        
        <div className="font-bold text-lg">
          KUSI
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        <nav className="hidden md:flex gap-6 font-medium">
          <a href="/en/" className="hover:text-[#C4161C]">Home</a>
          <a href="/en/pricing" className="hover:text-[#C4161C]">Pricing</a>
        </nav>

      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#E4E6E8] p-4 animate-in slide-in-from-top">
          <a href="/en/" className="block py-2">Home</a>
          <a href="/en/pricing" className="block py-2">Pricing</a>
        </div>
      )}
    </header>
  );
}