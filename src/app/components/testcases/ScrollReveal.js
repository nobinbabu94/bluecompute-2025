'use client'
import * as motion from "motion/react-client"
import { useRef } from "react"

// Custom useInView hook


// Usage
export default function ScrollReveal() {

  const scrollRef = useRef(null)


  return (
    <div ref={scrollRef} style={{ overflow: "scroll" }}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        
        style={{
          width: 100,
          height: 100,
          backgroundColor: "#9911ff",
          borderRadius: 5,
        }}
      >

      </motion.div>
    </div>
  )
}