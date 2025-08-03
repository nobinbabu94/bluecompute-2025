import React from "react";
import ContactFrom from "../components/contact/ContactForm";
import { constructMetadata } from "../metadata";


export const metadata = constructMetadata({
  title: "Contact Us - Get in Touch for IT Solutions",
  description: "Contact TechSolutions Pro for your IT needs. Reach out to our expert team for consultations, support, or to discuss your next technology project. Multiple ways to connect.",
  keywords: [
    "contact us",
    "IT consultation",
    "get quote",
    "technical support",
    "business inquiry",
    "project discussion"
  ],
  canonicalUrl: "https://bluecompute.com/contact"
})

const page = () => {
    return (
        <div className=" text-white font-sans flex flex-col pb-32">
            <section className="flex flex-col justify-center items-center w-full min-h-screen h-screen bg-black px-4">
                <h1 className="text-6xl ">
                    Contact us
                </h1>
                <div className="flex flex-col items-center justify-center mt-8 animate-bounce">
                    <span className="text-sm text-blue-400">Scroll down</span>
                    <svg
                        className="w-6 h-6 text-blue-400 mt-1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </section>
            <section className="flex justify-between items-start w-full px-4 pt-32">
                <div className="flex flex-col w-[50%] gap-2 h-full items-center justify-center">
                    <div className="w-full px-10 py-6 bg-gray-200 text-gray-800 rounded-xl">
                        <h3 className="text-2xl py-1 font-semibold">Contact</h3>
                        <h4 className="py-2">
                            <strong>Phone: </strong>
                            408-242-0283
                        </h4>
                        <h4 className="py-2">
                            <strong>Email: </strong>
                            info@bluecompute.com
                        </h4>
                    </div>

                    <div className="w-full px-10 py-6 bg-gray-200 text-gray-800 rounded-xl">
                        <h3 className="text-2xl py-1 font-semibold">Address</h3>
                        <h4 className="py-2"><strong>Addresses: </strong>USA: 968 NORFOLK SQ Norfolk  VA  ,23502

                            4643 Holycon Circle San Jose CA. 95136
                        </h4>

                    </div>

                </div>
                <div className="flex flex-col w-[50%] h-full items-center justify-start ">
                    <ContactFrom />
                </div>


            </section>
        </div>
    )
};

export default page;
