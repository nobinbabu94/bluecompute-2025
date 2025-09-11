import Image from "next/image";
import React from "react";

const page = () => {
    return (
        <div className=" text-white font-sans flex flex-col pb-32 ">
            <section className="relative flex flex-col justify-center items-center w-full h-[88vh] overflow-hidden bg-black px-4">
                <h1 className="text-6xl ">
                    Products
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
            <section className="bg-gradient-to-b from-black via-gray-900 to-gray-950 py-24 px-6 md:px-20 flex flex-col items-center text-center">
                <Image
                    src={'/revealnext-logo-black.webp'}
                    width={500}
                    height={500}
                    alt="RevealNext Logo"
                    className="w-52 md:w-60 mb-8 drop-shadow-lg"
                />
                <h2 className="text-xl md:text-3xl font-extrabold text-gray-100 leading-snug max-w-4xl mb-6">
                    Transform Retail Shelf Planning with{" "}
                    <span className="text-blue-400">AI-Powered Planogram Analytics</span>
                </h2>
                <p className="text-lg md:text-xl text-gray-400 max-w-5xl mb-10">
                    RevealNext leverages next-generation AI and modern cloud infrastructure to
                    convert your planogram assets into actionable insights in{" "}
                    <span className="font-semibold text-gray-200">minutes — not weeks</span>.
                    It empowers businesses to optimize sales, streamline distribution
                    management, and drive sustainable growth with confidence.
                </p>
                <div className="bg-gray-800/40 border border-gray-700 backdrop-blur-xl rounded-2xl shadow-xl p-10 md:p-14 w-full md:w-4/5 text-left ">
                    <p className="text-xl text-gray-300 mb-8 font-medium leading-relaxed">
                        AI-powered planogram analytics for retail — automate PDF/image conversion,
                        gain real-time insights, and securely access your dashboards anytime,
                        anywhere.
                    </p>

                    <ul className="space-y-4 text-gray-400 text-lg">
                        <li className="flex items-start space-x-3">
                            <span className="text-blue-400 mt-1">✔</span>
                            <span>Instant PDF/Image to Planogram conversion</span>
                        </li>
                        <li className="flex items-start space-x-3">
                            <span className="text-blue-400 mt-1">✔</span>
                            <span>Custom dashboards with real-time analytics</span>
                        </li>
                        <li className="flex items-start space-x-3">
                            <span className="text-blue-400 mt-1">✔</span>
                            <span>Enterprise-grade cloud security & compliance</span>
                        </li>
                        <li className="flex items-start space-x-3">
                            <span className="text-blue-400 mt-1">✔</span>
                            <span>Zero setup required — risk-free 30-day trial</span>
                        </li>
                    </ul>
                    <div className="mt-10 flex justify-center">
                        <a
                            href="https://revealnext.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 backdrop-blur-2xl px-4 py-3 rounded-xl"
                        >
                            <span>Explore RevealNext</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
            <section className="pt-24 px-6 md:px-20 flex flex-col ">
                {/* <Image
                    src={'/revealnext-logo-black.webp'}
                    width={500}
                    height={500}
                    alt="RevealNext Logo"
                    className="w-52 md:w-60 mb-8 drop-shadow-lg"
                /> */}
                <div className="flex w-full justify-between">
                    <h2 className="text-xl md:text-4xl font-bold text-blue-500 leading-snug max-w-lg mb-6">
                        AI Merchandising Assistant {" "}
                        <span className=" text-gray-600 font-normal">Get answers from your store data</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-500 max-w-xl mb-10 pt-5">
                        Meet your intelligent retail partner. With the AI Merchandising Assistant, you can upload your {" "}
                        <span className="font-semibold text-gray-600">PSA files</span>.
                        and instantly unlock insights hidden inside them. No more manual reviews or waiting for reports — the assistant reads your planograms, understands the data, and answers your questions in real time.
                    </p>
                </div>

                <div className="flex flex-col  rounded-2xl shadow-xl p-10 md:p-14 w-full  text-left ">
                    <p className="text-xl text-gray-800 mb-8 font-medium leading-relaxed">
                        Whether you want to know about shelf execution, product availability, performance gaps, or missing planograms, the assistant delivers accurate, actionable responses directly from your own data.
                    </p>
                    <div className="flex justify-between gap-2">

                        <ul className="space-y-4 text-gray-800 text-lg">
                            <li className="flex items-start space-x-3">
                                <span className="text-blue-400 mt-1">✔</span>
                                <span>IUpload PSA Files → Quickly upload your planogram or PSA files into the system.</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <span className="text-blue-400 mt-1">✔</span>
                                <span>Automated Processing → The assistant parses and processes your data using AI, saving hours of manual effort.</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <span className="text-blue-400 mt-1">✔</span>
                                <span>Ask Questions → Interact naturally — ask about product placement, availability, or performance.</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <span className="text-blue-400 mt-1">✔</span>
                                <span>Instant Answers → Get accurate responses and insights derived directly from your uploaded PSA file.</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <span className="text-blue-400 mt-1">✔</span>
                                <span>Data-Driven Decisions → Turn complex planogram data into clear, actionable insights for your merchandising team.</span>
                            </li>
                        </ul>

                        <Image
                            src={'/pas-data-assitant.png'}
                            alt="Ai Assitant"
                            width={500}
                            height={500}
                        />
                    </div>

                </div>
            </section>

        </div>
    )
};

export default page;
