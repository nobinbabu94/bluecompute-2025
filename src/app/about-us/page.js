import React from "react";
import { constructMetadata } from "../metadata";
import Image from "next/image";
import ContactFormNet from "../components/contact/ContactFormNet";

export const metadata = constructMetadata({
    title: "About Us | Bluecompute",
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

            <section className="relative flex flex-col justify-center items-center w-full h-[88vh]  bg-black px-4">
                <h1 className="text-6xl ">
                    About us
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
            <section className="bg-gradient-to-b from-black via-black to-gray-900 py-32 flex md:flex-row flex-col justify-between items-start w-full px-4 md:pt-32 pt-16">
                <div className="flex flex-col w-full gap-2 h-full items-center justify-center md:px-28 text-center">
                    <Image
                        src={'/logo.png'}
                        width={500}
                        height={500}
                        alt="logo"
                        className="w-52 md:w-60 mb-8 drop-shadow-lg"
                    />
                    <p className="text-gray-500 text-2xl md:max-w-7xl">
                        <span className="font-semibold text-3xl text-gray-300">At BlueCompute, we don’t just build software - we craft digital possibilities. </span>
                        By merging imagination with precision, we turn bold ideas into transformative solutions that
                        accelerate business growth. Every line of code is intentional, every design element purposeful.
                        Fueled by curiosity, empowered by talent, and grounded in trust, we deliver technology that not
                        only works — it inspires, scales, and creates lasting impact.
                    </p>

                </div>
            </section>
            <section className="py-16 flex md:flex-row flex-col gap-4 justify-center items-stretch w-full px-4">
                <div className="flex flex-col flex-1 px-6 py-16 space-y-5 max-w-sm bg-gray-800 backdrop-blur-2xl text-center text-white rounded-[50%/20%]">
                    <h3 className="text-3xl font-semibold text-blue-200">Our Mission</h3>
                    <p className="text-xl text-gray-400">
                        Our mission is to empower businesses with next-generation AI solutions that simplify sales and
                        distribution management. We strive to make advanced technology accessible and practical, enabling
                        organizations to optimize operations, gain actionable insights, and achieve sustainable growth with
                        confidence.
                    </p>
                </div>

                <div className="flex flex-col flex-1 px-6 py-16 space-y-5 max-w-sm bg-gray-800 text-center text-white rounded-[50%/20%]">
                    <h3 className="text-3xl font-semibold text-blue-200">The Bluecompute Team</h3>
                    <p className="text-xl text-gray-400 pb-4">
                        At the heart of our success is a team that blends deep domain knowledge with cutting-edge technology
                        expertise. With years of experience in sales and distribution software, salesforce automation,
                        and retail management solutions, our specialists design systems that are powerful, scalable,
                        and built to meet the unique demands of the industry.
                    </p>
                </div>

                <div className="flex flex-col flex-1 px-6 py-16 space-y-5 max-w-sm bg-gray-800 text-center text-white rounded-[50%/20%]">
                    <h3 className="text-3xl font-semibold text-blue-200">Our Values</h3>
                    <p className="text-xl text-gray-400">
                        We value trust, transparency, and teamwork. Innovation guides us, integrity grounds us,
                        and our customers' success is at the heart of everything we do.
                    </p>
                </div>
            </section>


            <section className=" rounded-4xl pt-32 flex md:flex-row flex-col items-stretch justify-center w-full px-4  md:pt-16  gap-y-4">
                <div className="md:w-[50%] w-full bg-black flex flex-col justify-center space-y-6 items-start md:px-4  py-4 px-4">
                    <h2 className="text-5xl md:max-w-sm">
                        Let’s discuss your vision with us!
                    </h2>
                    <p className="text-lg max-w-xl py-16">
                        Our ability to partner to create new approaches and deliver what we promise with proven and reliable services.
                    </p>

                </div>
                <div className="md:w-[50%] w-full bg-black flex justify-center items-center">

                    <ContactFormNet color={'text-gray-200'} />
                </div>
            </section>
        </div>
    )
};

export default page;
