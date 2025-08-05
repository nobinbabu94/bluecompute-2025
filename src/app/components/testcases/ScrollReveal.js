'use client'
import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'

// Custom useInView hook
  

// Usage
export default function ScrollReveal() {

  return (
     <motion.div
      // Content is visible by default, then animates
      initial={{ opacity: 1, y: 0 }} // Start visible for SSR
      animate={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 className='text-gray-500'>This animates when scrolled into view</h2>
    </motion.div>
  )
}