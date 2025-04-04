"use client"

import type React from "react"
import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Upload, FileText, X } from "lucide-react"

const FileUpload: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setSelectedFile(file)
    }
  }

  const handleFileRemove = () => {
    setSelectedFile(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-800 p-6 rounded-lg shadow-2xl space-y-4"
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-white">File Upload</h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => fileInputRef.current?.click()}
          className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-blue-700 transition-colors"
        >
          <Upload size={20} />
          <span>Choose File</span>
        </motion.button>
      </div>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileSelect}
        className="hidden"
        accept=".cpp,.py,.java,.js,.txt"
      />

      {selectedFile && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-gray-900 p-4 rounded-md flex items-center justify-between"
        >
          <div className="flex items-center space-x-3">
            <FileText className="text-blue-400" />
            <div>
              <p className="text-white">{selectedFile.name}</p>
              <p className="text-gray-400 text-sm">{(selectedFile.size / 1024).toFixed(2)} KB</p>
            </div>
          </div>
          <motion.button
            whileHover={{ rotate: 90 }}
            onClick={handleFileRemove}
            className="text-red-500 hover:text-red-600"
          >
            <X size={24} />
          </motion.button>
        </motion.div>
      )}

      <div className="text-gray-400 text-sm">Supported file types: .cpp, .py, .java, .js, .txt</div>
    </motion.div>
  )
}

export default FileUpload

