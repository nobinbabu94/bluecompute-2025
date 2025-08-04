import React from "react";
import ContactFrom from "../components/contact/ContactForm";
import { constructMetadata } from "../metadata";
import ContactFormNet from "../components/contact/ContactFormNet";


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
        <div className=" text-white font-sans flex flex-col pb-32 ">
            <section className="relative flex flex-col justify-center items-center w-full h-[88vh]  bg-black px-4">
                <h1 className="text-6xl ">
                    Contact us
                </h1>
                <div className="absolute bottom-4 flex flex-col items-center justify-center mt-8 animate-bounce">
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
                    <form
                        name="contact"
                        method="POST"
                        data-netlify="true"
                        data-netlify-recaptcha="true"
                        className="w-[80%] px-6 py-8 md:py-16 flex flex-col items-center bg-gray-200 rounded-xl"
                    >
                        <input type="hidden" name="form-name" value="contact" />

                        <h3 className="text-2xl text-gray-800 font-bold">Fill The Contact Form</h3>
                        <h4 className="text-base text-gray-500">Feel free to contact with us, we don't spam your email</h4>

                        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 py-6">
                            <input
                                className="px-3 py-2 text-gray-500 border border-gray-200 focus:outline-1 outline-gray-500 rounded-md"
                                placeholder="Name"
                                type="text"
                                name="name"
                                required
                            />

                            <input
                                className="px-3 py-2 text-gray-500 border border-gray-200 focus:outline-1 outline-gray-500 rounded-md"
                                placeholder="Email"
                                type="email"
                                name="email"
                                required
                            />

                            <input
                                className="px-3 py-2 text-gray-500 border border-gray-200 focus:outline-1 outline-gray-500 rounded-md"
                                placeholder="Phone Number"
                                type="tel"
                                name="phone"
                            />

                            <input
                                className="px-3 py-2 text-gray-500 border border-gray-200 focus:outline-1 outline-gray-500 rounded-md"
                                placeholder="Company Name"
                                type="text"
                                name="company"
                            />
                        </div>

                        <div className="w-full">
                            <textarea
                                className="px-3 py-2 text-gray-500 border border-gray-200 focus:outline-1 outline-gray-500 rounded-md w-full h-32 resize-y mb-4"
                                name="message"
                                placeholder="How can we help you?"
                                required
                            />

                            <div data-netlify-recaptcha="true" className="mb-4"></div>
                        </div>

                        <button
                            type="submit"
                            className="px-6 py-2 text-white bg-black/50 rounded-md hover:bg-black/70"
                        >
                            Submit
                        </button>
                    </form>
                </div>


            </section>
        </div>
    )
};

export default page;
