'use client';

import Image from "next/image";
import React from "react";
import * as motion from "motion/react-client"

const LogoImageComponent = ({ data }) => {

    const scrollRef = useRef(null)
    
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
            // transition={{ duration: 0.5, easing: 'ease-out' }}
            viewport={{ root: scrollRef }} // Animates once, when 40% of the element is visible
            className="w-64 md:w-56 py-2 p-6 border border-gray-300 rounded-full flex justify-center items-center"
        >
            <Image
                src={data?.image}
                width={data?.width}
                height={data?.height}
                alt={data?.name}
                className="w-full h-auto"
            />
        </motion.div>
    );
};

export default LogoImageComponent;
