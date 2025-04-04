"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"

interface InputOutputExampleProps {
  inputExample?: string
  outputExample?: string
}

const InputOutputExample: React.FC<InputOutputExampleProps> = ({
  inputExample = "5\n1 2 3 4 5\n3 7",
  outputExample = "15\n1 2 3 4 5 6 7 8 9 10 11 12 13 14 15",
}) => {
  const [activeTab, setActiveTab] = useState<"input" | "output">("input")

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="bg-gray-800 p-6 rounded-lg shadow-2xl mt-6"
    >
      <div className="flex space-x-4 mb-4">
        {["input", "output"].map((tab) => (
          <motion.button
            key={tab}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab(tab as "input" | "output")}
            className={`
              px-4 py-2 rounded-md font-semibold transition-colors
              ${activeTab === tab ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-300 hover:bg-gray-600"}
            `}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)} Example
          </motion.button>
        ))}
      </div>
      <pre className="bg-gray-900 p-4 rounded-md text-green-400 overflow-x-auto">
        {activeTab === "input" ? inputExample : outputExample}
      </pre>
    </motion.div>
  )
}

export default InputOutputExample

