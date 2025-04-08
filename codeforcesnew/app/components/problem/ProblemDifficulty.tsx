"use client"

import type React from "react"
import { motion } from "framer-motion"

interface ProblemDifficultyProps {
  difficulty: "Easy" | "Medium" | "Hard"
}

const DIFFICULTY_COLORS = {
  Easy: "bg-green-500",
  Medium: "bg-yellow-500",
  Hard: "bg-red-500",
}

const ProblemDifficulty: React.FC<ProblemDifficultyProps> = ({ difficulty }) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`${DIFFICULTY_COLORS[difficulty]} text-white px-4 py-2 rounded-full text-lg font-bold inline-block`}
    >
      {difficulty} Difficulty
    </motion.div>
  )
}

export default ProblemDifficulty

