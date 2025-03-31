"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Search, Filter, Tag, Clock, Users, ArrowUpDown, Trophy } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/app/components/badge"
import { useSearchParams } from "next/navigation"
import Link from "next/link"

// Sample contests data
const contests = [
  {
    id: 1,
    name: "Global Coding Championship",
    type: "Algorithm",
    date: "2024-03-25",
    time: "14:00",
    duration: "3 hours",
    writer: "John Doe",
    rated: true,
    status: "upcoming",
  },
  {
    id: 2,
    name: "Web Development Challenge",
    type: "Web",
    date: "2024-03-20",
    time: "16:00",
    duration: "2 hours",
    writer: "Jane Smith",
    rated: true,
    status: "upcoming",
  },
  {
    id: 3,
    name: "Data Structures Marathon",
    type: "DSA",
    date: "2024-02-15",
    time: "10:00",
    duration: "4 hours",
    writer: "Mike Johnson",
    rated: false,
    status: "past",
  },
]

// Sample problems data
const problemsData = [
  {
    id: "1A",
    name: "Theatre Square",
    tags: ["math", "geometry"],
    difficulty: 1000,
    solvedCount: 245789,
    timeLimit: "1 second",
    memoryLimit: "256 MB",
    contestId: 1,
  },
  {
    id: "1B",
    name: "Spreadsheet",
    tags: ["implementation", "math", "strings"],
    difficulty: 1600,
    solvedCount: 87654,
    timeLimit: "2 seconds",
    memoryLimit: "256 MB",
    contestId: 1,
  },
  {
    id: "1C",
    name: "Ancient Berland Circus",
    tags: ["geometry", "math"],
    difficulty: 2100,
    solvedCount: 32456,
    timeLimit: "2 seconds",
    memoryLimit: "256 MB",
    contestId: 1,
  },
  {
    id: "2A",
    name: "Winner",
    tags: ["implementation", "hashing"],
    difficulty: 1500,
    solvedCount: 56789,
    timeLimit: "1 second",
    memoryLimit: "256 MB",
    contestId: 2,
  },
  {
    id: "2B",
    name: "The Least Round Way",
    tags: ["dp", "math"],
    difficulty: 2000,
    solvedCount: 23456,
    timeLimit: "2 seconds",
    memoryLimit: "256 MB",
    contestId: 2,
  },
  {
    id: "3A",
    name: "Shortest Path of the King",
    tags: ["graphs", "shortest paths"],
    difficulty: 1300,
    solvedCount: 78901,
    timeLimit: "1 second",
    memoryLimit: "256 MB",
    contestId: 3,
  },
  {
    id: "3B",
    name: "Lorry",
    tags: ["greedy", "sortings"],
    difficulty: 1900,
    solvedCount: 19876,
    timeLimit: "2 seconds",
    memoryLimit: "256 MB",
    contestId: 3,
  },
  {
    id: "4A",
    name: "Watermelon",
    tags: ["brute force", "math"],
    difficulty: 800,
    solvedCount: 345678,
    timeLimit: "1 second",
    memoryLimit: "256 MB",
    contestId: 3,
  },
  {
    id: "4B",
    name: "Before an Exam",
    tags: ["constructive algorithms", "greedy"],
    difficulty: 1400,
    solvedCount: 45678,
    timeLimit: "1 second",
    memoryLimit: "256 MB",
    contestId: 3,
  },
  {
    id: "4C",
    name: "Registration System",
    tags: ["data structures", "hashing", "implementation"],
    difficulty: 1300,
    solvedCount: 67890,
    timeLimit: "1 second",
    memoryLimit: "256 MB",
    contestId: 3,
  },
]

// Function to get color based on difficulty
const getDifficultyColor = (difficulty: number) => {
  if (difficulty >= 2400) return "text-red-500"
  if (difficulty >= 2100) return "text-orange-500"
  if (difficulty >= 1900) return "text-violet-500"
  if (difficulty >= 1600) return "text-blue-500"
  if (difficulty >= 1400) return "text-cyan-500"
  if (difficulty >= 1200) return "text-green-500"
  return "text-gray-500"
}

export default function ProblemsPage() {
  const searchParams = useSearchParams()
  const contestId = searchParams.get("contestId")
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState<"id" | "name" | "difficulty" | "solvedCount">("id")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [currentContest, setCurrentContest] = useState<any>(null)

  // Find current contest
  useEffect(() => {
    if (contestId) {
      const contest = contests.find((c) => c.id === Number.parseInt(contestId))
      setCurrentContest(contest)
    }
  }, [contestId])

  // Get all unique tags
  const allTags = Array.from(new Set(problemsData.flatMap((problem) => problem.tags))).sort()

  // Toggle tag selection
  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag))
    } else {
      setSelectedTags([...selectedTags, tag])
    }
  }

  // Filter problems based on search, tags, and contest
  const filteredProblems = problemsData.filter((problem) => {
    const matchesSearch =
      problem.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      problem.name.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesTags = selectedTags.length === 0 || selectedTags.some((tag) => problem.tags.includes(tag))

    const matchesContest = !contestId || problem.contestId === Number.parseInt(contestId)

    return matchesSearch && matchesTags && matchesContest
  })

  // Sort problems
  const sortedProblems = [...filteredProblems].sort((a, b) => {
    if (sortBy === "id") {
      return sortOrder === "asc" ? a.id.localeCompare(b.id) : b.id.localeCompare(a.id)
    } else if (sortBy === "name") {
      return sortOrder === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    } else if (sortBy === "difficulty") {
      return sortOrder === "asc" ? a.difficulty - b.difficulty : b.difficulty - a.difficulty
    } else {
      return sortOrder === "asc" ? a.solvedCount - b.solvedCount : b.solvedCount - a.solvedCount
    }
  })

  // Handle sort click
  const handleSort = (column: "id" | "name" | "difficulty" | "solvedCount") => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc")
    } else {
      setSortBy(column)
      setSortOrder("asc")
    }
  }

  return (
    <div className="min-h-screen bg-black bg-[linear-gradient(rgba(0,255,0,0.03)_2px,transparent_2px),linear-gradient(90deg,rgba(0,255,0,0.03)_2px,transparent_2px)] bg-[size:50px_50px] text-gray-300 pb-20">
      <div className="max-w-7xl mx-auto p-6 space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-2"
        >
          {currentContest ? (
            <>
              <motion.h1
                className="text-4xl font-bold text-[#4ff0b7]"
                animate={{
                  textShadow: [
                    "0 0 5px rgba(79, 240, 183, 0.5)",
                    "0 0 20px rgba(79, 240, 183, 0.8)",
                    "0 0 5px rgba(79, 240, 183, 0.5)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                {currentContest.name}
              </motion.h1>
              <div className="flex justify-center items-center gap-4 text-gray-400">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>
                    {currentContest.date} at {currentContest.time}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Trophy className="w-4 h-4" />
                  <span>{currentContest.rated ? "Rated" : "Unrated"}</span>
                </div>
              </div>
              <p className="text-gray-400 mt-2">Problems for this contest</p>
            </>
          ) : (
            <>
              <motion.h1
                className="text-4xl font-bold text-[#4ff0b7]"
                animate={{
                  textShadow: [
                    "0 0 5px rgba(79, 240, 183, 0.5)",
                    "0 0 20px rgba(79, 240, 183, 0.8)",
                    "0 0 5px rgba(79, 240, 183, 0.5)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                Problems
              </motion.h1>
              <p className="text-gray-400">Sharpen your coding skills with these algorithmic challenges</p>
            </>
          )}
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="backdrop-blur-md bg-[rgba(18,18,18,0.8)] border border-white/10 rounded-lg p-6 space-y-4"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 flex items-center space-x-2">
              <Search className="w-5 h-5 text-[hsl(142,72%,29%)]" />
              <Input
                placeholder="Search by problem ID or name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-[hsl(240,4%,16%)]/50 border-[hsl(142,72%,29%)]/20"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-[hsl(142,72%,29%)]" />
                <span className="text-gray-300">Filter by tags:</span>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <motion.div
                key={tag}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => toggleTag(tag)}
              >
                <Badge
                  rating={0}
                  className={`cursor-pointer flex items-center gap-1 ${
                    selectedTags.includes(tag) ? "bg-[#4ff0b7] text-black" : "bg-gray-800 text-gray-300"
                  }`}
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Problems Table */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="backdrop-blur-md bg-[rgba(18,18,18,0.8)] border border-white/10 rounded-lg overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10 text-left">
                  <th className="p-4 cursor-pointer hover:bg-white/5" onClick={() => handleSort("id")}>
                    <div className="flex items-center space-x-1">
                      <span>#</span>
                      {sortBy === "id" && (
                        <ArrowUpDown className={`w-4 h-4 ${sortOrder === "asc" ? "rotate-0" : "rotate-180"}`} />
                      )}
                    </div>
                  </th>
                  <th className="p-4 cursor-pointer hover:bg-white/5" onClick={() => handleSort("name")}>
                    <div className="flex items-center space-x-1">
                      <span>Name</span>
                      {sortBy === "name" && (
                        <ArrowUpDown className={`w-4 h-4 ${sortOrder === "asc" ? "rotate-0" : "rotate-180"}`} />
                      )}
                    </div>
                  </th>
                  <th className="p-4">Tags</th>
                  <th className="p-4 cursor-pointer hover:bg-white/5" onClick={() => handleSort("difficulty")}>
                    <div className="flex items-center space-x-1">
                      <span>Difficulty</span>
                      {sortBy === "difficulty" && (
                        <ArrowUpDown className={`w-4 h-4 ${sortOrder === "asc" ? "rotate-0" : "rotate-180"}`} />
                      )}
                    </div>
                  </th>
                  <th className="p-4 cursor-pointer hover:bg-white/5" onClick={() => handleSort("solvedCount")}>
                    <div className="flex items-center space-x-1">
                      <span>Solved</span>
                      {sortBy === "solvedCount" && (
                        <ArrowUpDown className={`w-4 h-4 ${sortOrder === "asc" ? "rotate-0" : "rotate-180"}`} />
                      )}
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {sortedProblems.map((problem, index) => (
                  <motion.tr
                    key={problem.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                    whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                    className="border-b border-white/10 cursor-pointer"
                  >
                    <td className="p-4 font-mono">
                      <Link href={`/problem?id=${problem.id}`} className="hover:text-[#4ff0b7]">
                        {problem.id}
                      </Link>
                    </td>
                    <td className="p-4">
                      <div className="flex flex-col">
                        <Link href={`/problem?id=${problem.id}`} className="hover:text-[#4ff0b7]">
                          <span className={getDifficultyColor(problem.difficulty)}>{problem.name}</span>
                        </Link>
                        <div className="flex items-center space-x-2 text-xs text-gray-400 mt-1">
                          <div className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {problem.timeLimit}
                          </div>
                          <div>|</div>
                          <div>{problem.memoryLimit}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex flex-wrap gap-1">
                        {problem.tags.map((tag) => (
                          <Badge key={tag} rating={0} className="bg-gray-800 text-xs flex items-center gap-1">
                            <Tag className="w-3 h-3" />
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={getDifficultyColor(problem.difficulty)}>{problem.difficulty}</span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2 text-gray-400" />
                        <span>{problem.solvedCount.toLocaleString()}</span>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

