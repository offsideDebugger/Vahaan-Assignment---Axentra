import Image from "next/image"

import { Cormorant_Garamond } from "next/font/google";

const cormorantGaramond = Cormorant_Garamond({
    subsets: ["latin"],
  });
  
export default function Contact(){
    return <div id="contact" className="h-screen scroll-mt-auto grid grid-cols-2 w-full items-center justify-center">
        <div className={`flex flex-col ${cormorantGaramond.className} justify-center p-8`}>
            <h1 className="text-8xl ml-20 text-neutral-900">
                Get in touch
            </h1>
            <p className="text-3xl ml-20 max-w-xl mt-6 text-neutral-700">
            Building meaningful partnerships through innovation, quality, and trust. Get in touch with our team to explore tailored solutions designed to meet the challenges of today and the opportunities of tomorrow.

            </p>
        </div>
        <div className={`flex flex-col bg-white w-full h-full ${cormorantGaramond.className} justify-center p-8`}>
            <div className={`flex flex-col w-full h-full justify-center p-12 ${cormorantGaramond.className}`}>
                <form className="mx-auto w-full max-w-2xl space-y-5">
                    <div className="grid grid-cols-2 gap-5">
                    <div>
                        <label className="mb-2 block text-lg text-black">
                        First name
                        </label>
                        <input
                        type="text"
                        className="w-full rounded-lg border border-black bg-white px-4 py-3 text-black outline-none focus:border-amber-500"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-lg text-black">
                        Last name
                        </label>
                        <input
                        type="text"
                        className="w-full rounded-lg border border-black bg-white px-4 py-3 text-black outline-none focus:border-amber-500"
                        />
                    </div>
                    </div>

                    <div>
                    <label className="mb-2 block text-lg text-black">
                        Email
                    </label>
                    <input
                        type="email"
                        className="w-full rounded-lg border border-black bg-white px-4 py-3 text-black outline-none focus:border-amber-500"
                    />
                    </div>

                    <div>
                    <label className="mb-2 block text-lg text-black">
                        Phone number
                    </label>
                    <input
                        type="tel"
                        className="w-full rounded-lg border border-black bg-white px-4 py-3 text-black outline-none focus:border-amber-500"
                    />
                    </div>

                    <div>
                    <label className="mb-2 block text-lg text-black">
                        Message
                    </label>
                    <textarea
                        rows={6}
                        className="w-full resize-none rounded-lg border border-black bg-white px-4 py-3 text-black outline-none focus:border-amber-500"
                    />
                    </div>

                    <div className="flex justify-end">
                    <button
                        type="submit"
                        className="rounded-lg bg-amber-500 px-6 py-3 text-lg font-semibold text-black transition duration-300 hover:shadow-lg hover:shadow-black hover:bg-amber-600"
                    >
                        Send message
                    </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
}