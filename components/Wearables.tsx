import Image from "next/image"

import { Cormorant_Garamond } from "next/font/google";

const cormorantGaramond = Cormorant_Garamond({
    subsets: ["latin"],
  });
  
export default function Wearables(){
    return <div id="wearables" className="min-h-screen grid grid-cols-1 md:grid-cols-2 w-full items-center scroll-mt-auto justify-center">
        <div className={`flex flex-col ${cormorantGaramond.className} justify-center p-8`}>
            <h1 className="text-6xl md:text-8xl md:ml-20 ml-4 text-neutral-900">
                 Axentra Wearables
            </h1>
            <p className="text-lg md:text-3xl md:ml-20 ml-4 max-w-xl mt-6 text-neutral-700">
            Our Wearables division is focused on creating products that seamlessly blend technology, functionality, and design. By combining modern manufacturing practices with a deep understanding of consumer needs, we develop solutions that enhance everyday experiences while maintaining exceptional quality and reliability.

            From lifestyle-focused accessories to performance-driven wearable products, we emphasize comfort, durability, and innovation at every stage of development. Our commitment to precision engineering and continuous improvement enables us to deliver products that meet evolving market expectations and industry standards.
            </p>
        </div>
        <div className="w-full px-4 md:px-0">
            <div className="rounded-3xl overflow-hidden max-w-full">
                <Image className="rounded-3xl w-full h-auto object-cover" loading="eager" alt="wearables" src={'/wearables.png'} height={1200} width={800} sizes="(max-width: 768px) 100vw, 50vw"></Image>
            </div>   
        </div>
    </div>
}