"use client"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const PixelGlitch = () => {
  const [glitchBoxes, setGlitchBoxes] = useState([])

  useEffect(() => {
    const generateGlitchBoxes = () => {
      const boxes = Array.from({ length: 8 }).map(() => ({
        id: Math.random(),
        x: Math.random() * 100 - 50, // Random x shift
        y: Math.random() * 100 - 50, // Random y shift
        width: Math.random() * 100 + 20, // Random width
        height: Math.random() * 20 + 10, // Random height
      }))
      setGlitchBoxes(boxes)
    }

    const interval = setInterval(generateGlitchBoxes, 500) // Change effect every 500ms
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Main Content */}
      <div className="text-white text-6xl font-bold relative z-10">PIXEL GLITCH</div>

      {/* Glitching Boxes */}
      {glitchBoxes.map(({ id, x, y, width, height }) => (
        <motion.div
          key={id}
          className="absolute bg-red-500"
          style={{ width, height }}
          animate={{
            x: [x, -x, 0], // Move back and forth
            y: [y, -y, 0],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 0.2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

export default PixelGlitch

