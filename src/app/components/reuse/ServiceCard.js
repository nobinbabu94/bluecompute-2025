'use client'
import Image from "next/image";
import React, { useState } from "react";

const ServiceCard = () => {
    const [selectService, setSelectService] = useState('Cloud Advisory')
    return (
        <section className="bg-gray-900 flex flex-col gap-4 justify-center  w-full py-16">

            <div className="flex flex-wrap gap-3 md:gap-4 px-3 md:px-6 justify-center w-full">
                {["Cloud Advisory", "Cloud Migration", "Application Modernization", "Data & Analytics"].map((item, index) => (
                    <span
                        key={index}
                        onClick={() => setSelectService(item)}
                        className={`${selectService === item ? 'bg-gray-500' : ''} 
      rounded-full md:px-4 px-3 md:py-3 py-2 text-sm border border-blue-100 cursor-pointer hover:border-blue-200 hover:bg-gray-600`}
                    >
                        {item}
                    </span>
                ))}
            </div>

            {selectService === 'Cloud Advisory' ?
                <div className="flex flex-col md:flex-row py-16 ">
                    <div className="flex flex-col md:w-[50%] w-full p-4 space-y-6">
                        <h3 className="text-5xl font-semibold">Cloud Advisory
                        </h3>
                        <div className="flex flex-col space-y-6 font-light">
                            <p className="indent-4 text-xl text-justify">
                                Moving to the cloud has never been this simple. But the main question one should be having is that, is it going to affect my daily business. Rest assured, it's all safe in our hands. You needn't  worry about a thing.
                            </p>
                            <p className="indent-4 text-xl text-justify">
                                With the BlueCompute’s experts team and technology, migrate your data with ease without causing downtime in your business or any other business interruptions.  We help our customers migrate to secure, repeatable, and scalable cloud environments on the cloud provider of choice.
                            </p>
                            <p className="indent-4 text-xl text-justify">
                                Many of our clients begin with an end-to-end managed IT Portfolio Discovery for infrastructure and applications that provides detailed dependency mapping to facilitate migration sequencing and deriving wave groups.
                            </p>

                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center md:w-[50%] p-4 space-y-6">
                        <Image
                            src={'/Cloud-Computing-Services-hero-image-1024x709.webp'}
                            width={500}
                            height={500}
                            alt="Cloud Advisory"
                        />

                    </div>

                </div> : ''}
        </section>
    )
};

export default ServiceCard;
