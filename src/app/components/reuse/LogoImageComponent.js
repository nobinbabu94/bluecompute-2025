'use client';

import Image from "next/image";
import * as motion from "motion/react-client";
import { useRef } from "react";

export default function LogoImageComponent({ data }) {
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
        </div>
    );
};
