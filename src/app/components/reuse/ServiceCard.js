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
            {selectService === 'Cloud Migration' ?
                <div className="flex flex-col md:flex-row py-16 ">
                    <div className="flex flex-col md:w-[50%] w-full p-4 space-y-6">
                        <h3 className="text-5xl font-semibold">Cloud Migration
                        </h3>
                        <div className="flex flex-col space-y-6 font-light">
                            <p className="indent-4 text-xl text-justify">
                                There was a time where we didn't need to rely on technology. But things have changed.In this day and age even the smallest of businesses can't imagine operating without technology.
                            </p>
                            <p className="indent-4 text-xl text-justify">
                                Technology is growing and changing at an exponential rate. If we do not keep up with technology, we shall be left behind.                            </p>
                            <p className="indent-4 text-xl text-justify">
                                Utilize the full capabilities of the cloud services. Update your legacy application to a scalable and cloud native environment using the modern technology. So that we can meet the modern day user expectation and give the best user experience regardless of the technology change.
                            </p>
                            <p className="indent-4 text-xl text-justify">
                                Our Multi-cloud Deployment Services (MCDS) provide a multi-cloud development solution enabling enterprises to transform infrastructure and modernize the applications.  Our services are pre-integrated and tested with various infrastructure services, application services, and cloud services
                            </p>

                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center md:w-[50%] p-4 space-y-6">
                        <Image
                            src={'/swimlane-build-cloud-apps.webp'}
                            width={500}
                            height={500}
                            alt="Cloud Advisory"
                        />

                    </div>

                </div> : ''}

            {selectService === 'Application Modernization' ?
                <div className="flex flex-col md:flex-row py-16 ">
                    <div className="flex flex-col md:w-[50%] w-full p-4 space-y-6">
                        <h3 className="text-5xl font-semibold">Application Modernization
                        </h3>
                        <div className="flex flex-col space-y-6 font-light">
                            <p className="indent-4 text-xl text-justify">
                                There was a time where we didn't need to rely on technology. But things have changed.In this day and age even the smallest of businesses can't imagine operating without technology.
                            </p>
                            <p className="indent-4 text-xl text-justify">
                                Technology is growing and changing at an exponential rate. If we do not keep up with technology, we shall be left behind.

                            </p>
                            <p className="indent-4 text-xl text-justify">
                                Utilize the full capabilities of the cloud services. Update your legacy application to a scalable and cloud native environment using the modern technology. So that we can meet the modern day user expectation and give the best user experience regardless of the technology change.
                            </p>
                            <p className="indent-4 text-xl text-justify">
                                Our Multi-cloud Deployment Services (MCDS) provide a multi-cloud development solution enabling enterprises to transform infrastructure and modernize the applications.  Our services are pre-integrated and tested with various infrastructure services, application services, and cloud services
                            </p>

                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center md:w-[50%] p-4 space-y-6">
                        <Image
                            src={'/application-modernization.webp'}
                            width={500}
                            height={500}
                            alt="Cloud Advisory"
                        />

                    </div>

                </div> : ''}

            {selectService === 'Data & Analytics' ?
                <div className="flex flex-col md:flex-row py-16 ">
                    <div className="flex flex-col md:w-[50%] w-full p-4 space-y-6">
                        <h3 className="text-5xl font-semibold">Data & Analytics
                        </h3>
                        <div className="flex flex-col space-y-6 font-light">
                            <p className="indent-4 text-xl text-justify">
                                It’s hard for a business to keep track of each and every step we take in business. We are humans after all. No matter how much effort we put in, we are always prone to errors. 
                            </p>
                            <p className="indent-4 text-xl text-justify">
                                One of the best things about adopting cloud technology is that we get to use the benefits of data analytics. Know every move you make and every step you take.

                            </p>
                            <p className="indent-4 text-xl text-justify">
                              Get more in-depth analysis and insights of  your business, customers and your clients. Achieve your business goal in an efficient and cost effective manner. 
                            </p>
                            <p className="indent-4 text-xl text-justify">
                               Blue Compute Cloud Services are designed around our customers and delivered on the platform that best meets their needs. Whether you are looking to fix issues, develop a strategy, utilize managed services, or further modernize and secure your applications and infrastructure.
                            </p>

                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center md:w-[50%] p-4 space-y-6">
                        <Image
                            src={'/Data & Analytics.webp'}
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
