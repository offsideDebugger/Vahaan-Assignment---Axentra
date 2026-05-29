"use client"
import { Cormorant_Garamond } from "next/font/google";
import Link from "next/link";
import { useState,useEffect } from "react";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
});

export default function Hero() {

  const [scrolled, setScrolled]=useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`h-screen flex flex-col items-center bg-[url('/cari.jpg')] bg-cover relative overflow-hidden bg-center ${cormorantGaramond.className}`}>
     <div className="absolute inset-0 bg-black/10" />
      <div className={`flex items-center justify-around w-full fixed top-0  left-0 z-50 p-4 text-black tracking-tight ${
        scrolled
          ? " text-black transition-all duration-200 shadow-md backdrop-blur-xl"
          : "bg-transparent"
      }`}>
        <div className={`text-5xl font-bold  ${
        scrolled
          ? "text-amber-500"
          : "text-amber-300"
        }`}>Axentra</div>
        {/* Desktop links */}
        <div className="hidden md:flex md:items-center md:space-x-6">
          <Link href="#about"  className="text-xl  font-bold cursor-pointer hover:text-amber-300 hover:text-shadow-amber-100 transition-all duration-300">About</Link>
          <Link href="#expedition" className="text-xl  font-bold cursor-pointer hover:text-amber-300  hover:shadow-amber-100 transition-all duration-300 ">Expedition</Link>
          <Link href="#wearables" className="text-xl font-bold cursor-pointer hover:text-amber-300 hover:shadow-amber-100 transition-all duration-300">Wearable</Link>
          <Link href="#innovation" className="text-xl  font-bold cursor-pointer hover:text-amber-300 hover:text-shadow-amber-100 transition-all duration-300">Innovation</Link>
          <Link href="#contact" className="text-xl  font-bold cursor-pointer hover:text-amber-300 hover:text-shadow-amber-100 transition-all duration-300">Contact</Link>
        </div>
        {/* Mobile burger */}
        <button aria-label="Toggle navigation" onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden ml-auto">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black">
            {mobileOpen ? (
              <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 z-40 bg-white/90 backdrop-blur-sm shadow-md">
          <div className="flex flex-col items-center py-4 space-y-3">
            <Link href="#about" onClick={() => setMobileOpen(false)} className="text-lg font-bold">About</Link>
            <Link href="#expedition" onClick={() => setMobileOpen(false)} className="text-lg font-bold">Expedition</Link>
            <Link href="#wearables" onClick={() => setMobileOpen(false)} className="text-lg font-bold">Wearable</Link>
            <Link href="#innovation" onClick={() => setMobileOpen(false)} className="text-lg font-bold">Innovation</Link>
            <Link href="#contact" onClick={() => setMobileOpen(false)} className="text-lg font-bold">Contact</Link>
          </div>
        </div>
      )}
      
      <div className="pt-20 sm:pt-24 md:pt-32 p-6 sm:p-10 pb-20 md:pb-0 flex flex-col items-center justify-center max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-6xl text-black font-bold text-center leading-normal md:leading-tight">
        Engineering the Future of Intelligent Mobility
        </h1>
        <p className="text-base sm:text-lg md:text-2xl text-black text-center mt-3 max-w-3xl">
        Software-defined vehicles, embedded intelligence and next-generation mobility systems.
        </p>
        <button className="bg-amber-500 hover:shadow-xl z-20 hover:shadow-neutral-900/50 cursor-pointer transition-all duration-300 text-black text-base md:text-xl px-6 py-3 mt-6 md:mt-8 md:static absolute bottom-6 left-1/2 -translate-x-1/2 md:translate-x-0 rounded-lg">
          Explore <span className="ml-2">✈</span> 
        </button>
      </div>  
    </div>
  );
}