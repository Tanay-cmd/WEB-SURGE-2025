"use client"

import type React from "react"
import { motion } from "framer-motion"

interface ProblemStatsProps {
  rating: number
  acceptance: number
  submissions: number
}

const ProblemStats: React.FC<ProblemStatsProps> = ({ rating, acceptance, submissions }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-between items-center bg-gray-800 p-4 rounded-lg shadow-lg"
    >
      <div className="flex flex-col items-center">
        <span className="text-xl font-bold text-blue-400">Rating</span>
        <span className="text-2xl font-semibold text-white">{rating}</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-xl font-bold text-green-400">Acceptance</span>
        <span className="text-2xl font-semibold text-white">{acceptance}%</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-xl font-bold text-purple-400">Submissions</span>
        <span className="text-2xl font-semibold text-white">{submissions}</span>
      </div>
    </motion.div>
  )
}

export default ProblemStats

