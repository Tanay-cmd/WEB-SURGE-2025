"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Code, Search } from "lucide-react"

const LANGUAGES = ["Python", "C++", "Java", "JavaScript", "Rust", "Go", "Haskell", "Ruby"]

const LanguageSelectorCodeEditor: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("Python")
  const [searchTerm, setSearchTerm] = useState("")
  const [code, setCode] = useState("# Write your code here")

  const filteredLanguages = LANGUAGES.filter((lang) => lang.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-800 rounded-lg p-6 space-y-4"
    >
      {/* Language Selector */}
      <div className="flex items-center space-x-4 mb-4">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search languages..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {/* Language List */}
      <motion.div
        className="grid grid-cols-2 gap-2 mb-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              delayChildren: 0.2,
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {filteredLanguages.map((lang) => (
          <motion.button
            key={lang}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedLanguage(lang)}
            className={`
              px-3 py-2 rounded-md text-sm font-medium transition-colors
              ${selectedLanguage === lang ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-300 hover:bg-gray-600"}
            `}
          >
            {lang}
          </motion.button>
        ))}
      </motion.div>

      {/* Code Editor */}
      <div className="relative">
        <div className="absolute top-2 left-3 text-gray-400 flex items-center">
          <Code className="mr-2" size={20} />
          <span>{selectedLanguage}</span>
        </div>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full min-h-[300px] bg-gray-900 text-green-400 p-4 pl-24 rounded-md font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          spellCheck="false"
        />
      </div>
    </motion.div>
  )
}

export default LanguageSelectorCodeEditor

