'use client';
import React, { useRef } from 'react';
import * as motion from "motion/react-client"

const Headers = ({
    text,

    element,
    classname,
    initial,
    animate,
    whileInView,
    transition,
    viewport,
    variants,
}) => {
    const scrollRef = useRef(null)

    const MotionTag = motion[element];

    return (
        <div ref={scrollRef} >
            <MotionTag
                initial={initial}
                animate={animate}
                whileInView={whileInView}
                viewport={{ root: scrollRef }}
                className={`${classname}`}
            >
                {text}
            </MotionTag>
        </div>
    );
};

export default Headers;
