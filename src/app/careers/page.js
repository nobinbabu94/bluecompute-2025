import Image from "next/image";
import React from "react";

const page = () => {
    return (
        <div className=" text-white font-sans flex flex-col pb-32">

            <section className="relative flex flex-col justify-center items-center w-full h-[88vh]  bg-black px-4">
                <h1 className="text-6xl ">
                    Careers
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

            <section className="bg-gradient-to-b from-black via-black to-gray-900 py-32 flex flex-col justify-between items-start w-full ">
                <div className="w-full h-64 overflow-hidden rounded-lg drop-shadow-lg">
                    <Image
                        src="/careers-bluecompute.webp"
                        width={500}
                        height={500}
                        alt="logo"
                        className="w-full h-auto object-bottom-right"
                    />
                </div>
                <div className="flex flex-col w-full gap-2 h-full items-center justify-center md:px-28 pt-14 text-center ">

                    <p className="text-gray-400 text-4xl md:max-w-7xl">

                        Join our team — where passion meets innovation.
                    </p>

                </div>
            </section>
            <section className="py-16 md:py-32 w-full px-4 md:px-12 bg-gradient-to-b from-gray-50 to-white">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-gray-700">
                    <div className="lg:col-span-2 space-y-6">
                        <h4 className="text-3xl font-bold text-gray-900">
                            Head of Engineering
                        </h4>
                        <p className="indent-6 leading-relaxed text-lg">
                            At Blue Compute, our Head of Engineering is a visionary leader responsible for
                            driving innovation, scaling engineering teams, and delivering high-quality technology solutions.
                            This role is critical in shaping our engineering culture, architecture, and execution
                            to ensure our products remain cutting-edge and industry-leading.
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-lg">
                            <li>Define the engineering vision and roadmap, ensuring alignment with business objectives.</li>
                            <li>Build, mentor, and scale a high-performing engineering team.</li>
                            <li>Oversee architecture, infrastructure, and code quality to ensure robust, scalable, and efficient solutions.</li>
                            <li>Work closely with product, design, and business teams to drive seamless execution.</li>
                            <li>Cross-functional collaboration with stakeholders to align goals and execution.</li>
                            <li>Implement best practices in CI/CD, automation, and agile methodologies for faster delivery, while providing technical insights to leadership and investors.</li>
                        </ul>
                    </div>

                    <div className="relative  text-white  p-14 flex  justify-center space-y-4">
                        <div className="relative flex flex-col items-centerj justify-center bg-gray-800 p-4 rounded-2xl shadow-lg ">
                            <h5 className="text-xl font-semibold absolute top-6">Job Summary</h5>
                            <div className="flex flex-col space-y-6">
                                <span className="text-lg">- San Francisco</span>
                                <span className="text-lg">- Full Time</span>
                            </div>
                            <p className="text-gray-200 pt-6 max-w-72 pl-3 relative before:content-['-'] before:absolute before:left-0">
                                Interested candidates can send their resume to sales@bluecompute.com
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
};

export default page;
