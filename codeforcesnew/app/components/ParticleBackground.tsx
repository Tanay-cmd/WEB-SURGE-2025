"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

function Particle({ delay }: { delay: number }) {
  // Generate random speed between 2 and 5 seconds
  const randomSpeed = Math.random() * 3 + 2

  // Generate random starting Y position within 100px height
  const startY = Math.random() * 100

  return (
    <motion.div
      className="absolute h-[1px] w-2 bg-white rounded-full"
      initial={{
        opacity: 0,
        x: -50,
        y: startY,
      }}
      animate={{
        opacity: [0, 1, 0],
        x: window.innerWidth + 50,
        width: [1, 5, 1],
        y: startY,
      }}
      transition={{
        duration: randomSpeed,
        delay,
        ease: "linear",
        repeat: Number.POSITIVE_INFINITY,
      }}
      whileHover={{
        opacity: [0, 1, 0],
        x: window.innerWidth + 50,
        width: [1, 5, 1],
        y: startY,
        transition: {
          duration: randomSpeed / 2,
          delay,
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
        },
      }}
    />
  )
}

const ParticleBackground = () => {
  const [particles, setParticles] = useState<number[]>([])

  useEffect(() => {
    // Create 100 particles with different delays
    const particleDelays = Array.from({ length: 25 }, (_, i) => i * 0.05)
    setParticles(particleDelays)
  }, [])

  return (
    <div className="h-screen relative">
      <div className="absolute left-[-25vw] inset-0">
        {particles.map((delay, index) => (
          <Particle key={index} delay={delay} />
        ))}
      </div>
    </div>
  )
}

export default ParticleBackground

