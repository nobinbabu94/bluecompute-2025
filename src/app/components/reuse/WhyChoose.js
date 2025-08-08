'use client';

import React, { useRef } from "react";
import * as motion from "motion/react-client";

const WhyChoose = ({ service }) => {
    const scrollRef = useRef(null)
    return (
        <div ref={scrollRef} style={{ overflow: "hidden" }}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                    opacity: 1, y: 0, animation: { rotateX: 90 }, transition: {
                        type: "spring",
                        visualDuration: 0.5,
                        bounce: 0.25
                    }
                }}
                viewport={{ root: scrollRef }}
                className="bg-gray-900 text-white p-6 w-full text-center rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-full"
            >
                {/* <div className="flex justify-center mb-4 text-orange-500">{service.icon}</div> */}
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
            </motion.div>
        </div>
    )
};

export default WhyChoose;
