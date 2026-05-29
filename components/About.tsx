import Image from "next/image"

import { Cormorant_Garamond } from "next/font/google";

const cormorantGaramond = Cormorant_Garamond({
    subsets: ["latin"],
  });
  
export default function About(){
    return <div id="about" className="min-h-screen scroll-mt-auto grid grid-cols-1 md:grid-cols-2 w-full items-center justify-center">
        <div className={`flex flex-col ${cormorantGaramond.className} justify-center p-8` }>
            <h1 className="text-6xl md:text-8xl md:ml-20 ml-4 text-neutral-900">
                About Axentra
            </h1>
            <p className="text-lg md:text-3xl md:ml-20 ml-4 max-w-xl mt-6 text-neutral-700">
            We envision a future where cutting-edge technology and sustainability drive the transformation of the global automotive and mobility ecosystem. Through innovative software solutions, transformative educational programs, and pioneering green energy initiatives, we aim to empower businesses, inspire the next generation of creators, and accelerate the adoption of sustainable mobility worldwide. By connecting technology, education, and sustainability, we are building a smarter, greener, and more connected tomorrow.
            </p>
        </div>
        <div className="w-full px-4 md:px-0">
            <div className="rounded-3xl overflow-hidden max-w-full">
                <Image className="rounded-3xl w-full h-auto object-cover" loading="eager" alt="factory" src={'/factory.jpeg'} height={1200} width={800} sizes="(max-width: 768px) 100vw, 50vw"></Image>
            </div>   
        </div>
    </div>
}