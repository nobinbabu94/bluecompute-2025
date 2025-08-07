import React from "react";
import Animation from "../components/particles/Animation";

const page = () => {
    return (
        <div className=" text-white font-sans flex flex-col pb-32">
                <Animation />

            <section className="relative flex flex-col justify-center items-center w-full h-[88vh]  bg-black px-4">
                <h1 className="text-6xl ">
                    Services
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
            {/* <div className="w-full h-screen inset-0 z-0"> */}
            {/* </div> */}
            <section className="relative min-h-screen bg-gradient-to-b from-black via-black to-gray-900 py-32 flex md:flex-row flex-col justify-between items-start w-full px-4 md:pt-32 pt-16">

                <div className="flex flex-col w-full gap-2 h-full items-center justify-center md:px-28 text-center">
                    <p className="text-gray-500 text-2xl md:max-w-7xl">
                        We craft with purpose — building high-performing products that are both reliable and user-friendly,
                        combining expert development with intelligent validation at every step.
                    </p>
                </div>
            </section>
        </div>
    )
};

export default page;
