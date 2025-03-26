"use client"

import { motion } from "framer-motion"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function LoadingPage() {
    const router = useRouter()

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/home')
        }, 3000) // Show loading page for 3 seconds

        return () => clearTimeout(timer)
    }, [router])

    return (
        <motion.div
            initial={{ opacity: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
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
                <motion.h1
                    className="text-6xl font-bold text-white mb-4"
                    layoutId="codeforces-title"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    CodeForces
                </motion.h1>
            </motion.div>
        </motion.div>
    )
} 