"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import ParticleBackground from "./ParticleBackground"

export default function LoadingPage() {
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false)
        }, 3000) // Show loading page for 3 seconds

        return () => clearTimeout(timer)
    }, [])

    if (!isVisible) return null

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{
                backgroundImage: 'url("/loader.gif")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 text-center"
            >
                
            </motion.div>
        </motion.div>
    )
} 