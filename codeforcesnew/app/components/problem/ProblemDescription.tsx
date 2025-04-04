"use client"

import type React from "react"
import { motion } from "framer-motion"

interface ProblemDescriptionProps {
  description: string
  inputFormat: string
  outputFormat: string
}

const ProblemDescription: React.FC<ProblemDescriptionProps> = ({ description, inputFormat, outputFormat }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="bg-gray-800 p-6 rounded-lg space-y-4 text-gray-300"
    >
      <section>
        <h2 className="text-2xl font-semibold text-white mb-3">Problem Description</h2>
        <p>{description}</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-3">Input Format</h2>
        <p>{inputFormat}</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-3">Output Format</h2>
        <p>{outputFormat}</p>
      </section>
    </motion.div>
  )
}

export default ProblemDescription

