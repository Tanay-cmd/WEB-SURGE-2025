"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  speed: number
  opacity: number
}

const AnimatedTitle = () => {
  const [particles, setParticles] = useState<Particle[]>([])
  const [showText, setShowText] = useState(false)

  useEffect(() => {
    // Create initial particles
    const initialParticles = Array.from({ length: 200 }, (_, i) => ({
      id: i,
      x: -50, // Start off-screen
      y: Math.random() * 200, // Random vertical position
      size: Math.random() * 2 + 1,
      speed: Math.random() * 2 + 1,
      opacity: 0,
    }))
    setParticles(initialParticles)

    // Start text animation after particles have moved
    setTimeout(() => {
      setShowText(true)
    }, 1500)
  }, [])

  useEffect(() => {
    const animate = () => {
      setParticles((prevParticles) =>
        prevParticles.map((particle) => {
          // Move particle to the right
          const newX = particle.x + particle.speed

          // Reset particle position when it goes off screen
          if (newX > window.innerWidth + 50) {
            return {
              ...particle,
              x: -50,
              y: Math.random() * 200,
              speed: Math.random() * 2 + 1,
              opacity: 0,
            }
          }

          // Fade in particle as it moves
          const newOpacity = Math.min(0.8, (newX / window.innerWidth) * 0.8)

          return {
            ...particle,
            x: newX,
            opacity: newOpacity,
          }
        }),
      )
      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return (
    <div className="relative w-full h-[200px] overflow-hidden">
      {/* Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-white rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            x: particle.x,
            y: particle.y,
            opacity: particle.opacity,
          }}
        />
      ))}

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={showText ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-6xl font-bold text-center relative z-10 text-white"
      >
        CodeForces
      </motion.h1>
    </div>
  )
}

export default AnimatedTitle

