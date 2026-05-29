import Image from "next/image"

import { Cormorant_Garamond } from "next/font/google";

const cormorantGaramond = Cormorant_Garamond({
    subsets: ["latin"],
  });
  
export default function Services(){
    return <div id="expedition" className="h-screen grid grid-cols-2 scroll-mt-auto w-full bg-neutral-200 items-center justify-center">
        <div className="">
            <div className="rounded-3xl flex flex-col overflow-hidden ml-40">
                <Image className="rounded-3xl" loading="eager" alt="factory" src={'/expedition.jpg'} height={1200} width={650} ></Image>
                <Image className="rounded-3xl mt-12" loading="eager" alt="factory" src={'/expeditionn.jpg'} height={200} width={650} ></Image>
            </div>   
        </div>
        <div className={`flex flex-col ${cormorantGaramond.className} justify-center p-8`}>
            <h1 className="text-8xl text-neutral-900">
                Axentra Expedition
            </h1>
            <p className="text-3xl max-w-xl mt-6 text-neutral-700">
            We provide end-to-end expedition and logistics solutions, ensuring seamless transportation of goods across domestic and international markets. Our network and operational expertise help businesses move products efficiently, securely, and on time.
            With a strong focus on operational excellence, real-time coordination, and customer satisfaction, we help organizations overcome logistical challenges while maintaining speed, transparency, and cost efficiency. Our experienced teams work closely with partners and clients to ensure every shipment is handled with precision and care.
            </p>
        </div>
    </div>
}