"use client"

import type React from "react"
import { motion } from "framer-motion"
import ProblemDifficulty from "./ProblemDifficulty"

interface ProblemHeaderProps {
  name: string
  difficulty: "Easy" | "Medium" | "Hard"
}

const ProblemHeader: React.FC<ProblemHeaderProps> = ({ name, difficulty }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-900 p-6 rounded-b-xl shadow-2xl"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="w-1/3"></div> {/* Spacer for centering */}
        <div className="flex-grow text-center">
          <h1 className="text-3xl font-bold text-white tracking-wider">{name}</h1>
        </div>
        <div className="w-1/3 flex justify-end items-center space-x-4">
          <ProblemDifficulty difficulty={difficulty} />
        </div>
      </div>
    </motion.div>
  )
}

export default ProblemHeader

