'use client';
import React from 'react';
import { motion } from 'framer-motion';

const Headers = ({
    text,
    color = '',
    size = '',
    font = '',
    element: Element = 'h1',
    width = '',
    initial,
    animate,
    whileInView,
    transition,
    viewport,
    variants,
}) => {
    const MotionElement = motion(Element);

    return (
        <MotionElement
            initial={initial}
            animate={animate}
            whileInView={whileInView}
            transition={transition}
            viewport={viewport}
            variants={variants}
            className={`${size} ${color} ${width} ${font}`}
        >
            {text}
        </MotionElement>
    );
};

export default Headers;
