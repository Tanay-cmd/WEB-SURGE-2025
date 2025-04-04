"use client"
import { motion } from "framer-motion"
import ProblemHeader from "../components/problem/ProblemHeader"
import ProblemStats from "../components/problem/ProblemStats"
import ProblemDescription from "../components/problem/ProblemDescription"
import InputOutputExample from "../components/problem/InputOutput"
import LanguageSelectorCodeEditor from "../components/problem/LangSelect"
import FileUpload from "../components/problem/FileUpload"

export default function ProblemPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8">
      <ProblemHeader name="A. Watermelon" difficulty="Easy" />

      <div className="max-w-6xl mx-auto mt-6 grid md:grid-cols-2 gap-6">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <ProblemStats rating={800} acceptance={54.3} submissions={45000} />

          <ProblemDescription
            description="One summer day, a boy and his friends went to a watermelon farm. There are lots of watermelons in the farm. They decided to divide the watermelons, so each boy will get an even number of watermelons."
            inputFormat="The first and only line of the input contains an integer w (1 ≤ w ≤ 10000) — the weight of watermelon purchased by the young man."
            outputFormat="Print 'YES' if the number of watermelons can be divided equally among participants, and 'NO' otherwise."
          />

          <InputOutputExample inputExample="8" outputExample="YES" />
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <LanguageSelectorCodeEditor />
          <FileUpload />
        </motion.div>
      </div>
    </div>
  )
}

