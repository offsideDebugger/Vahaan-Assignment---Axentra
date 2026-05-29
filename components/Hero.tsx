"use client"
import { Cormorant_Garamond } from "next/font/google";
import Link from "next/link";
import { useState,useEffect } from "react";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
});

export default function Hero() {

  const [scrolled, setScrolled]=useState(false);
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
    <div className={`h-screen flex flex-col w-screen items-center bg-[url('/cari.jpg')] bg-cover relative overflow-hidden bg-center ${cormorantGaramond.className}`}>
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
        <Link href="#about"  className="text-xl  font-bold cursor-pointer hover:text-amber-300 hover:text-shadow-amber-100 transition-all duration-300">About</Link>
        <Link href="#expedition" className="text-xl  font-bold cursor-pointer hover:text-amber-300  hover:shadow-amber-100 transition-all duration-300 ">Expedition</Link>
        <Link href="#wearables" className="text-xl font-bold cursor-pointer hover:text-amber-300 hover:shadow-amber-100 transition-all duration-300">Wearable</Link>
        <Link href="#innovation" className="text-xl  font-bold cursor-pointer hover:text-amber-300 hover:text-shadow-amber-100 transition-all duration-300">Innovation</Link>
        <Link href="#contact" className="text-xl  font-bold cursor-pointer hover:text-amber-300 hover:text-shadow-amber-100 transition-all duration-300">Contact</Link>
      </div>
      
      <div className="mt-38 p-10 flex flex-col items-center justify-center">
        <h1 className="text-6xl text-black font-bold text-center">
        Engineering the Future of Intelligent Mobility
        </h1>
        <p className="text-2xl text-black text-center mt-2">
        Software-defined vehicles, embedded intelligence and next-generation mobility systems.
        </p>
        <button className="bg-amber-500 hover:shadow-xl z-10 hover:shadow-neutral-900/50 cursor-pointer transition-all duration-300 text-black text-xl px-4 py-2 mt-10 rounded-lg">
          Explore <span className="ml-2">&#9992;</span> 
        </button>
      </div>  
    </div>
  );
}