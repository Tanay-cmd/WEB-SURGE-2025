"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Calendar } from "lucide-react"
import { AnimatedHeader } from "@/app/components/contests/AnimatedHeader"
import { ContestFilters } from "@/app/components/contests/ContestFilters"
import { ContestCard } from "@/app/components/contests/ContestCard"
import Link from "next/link"

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
    problems: [
      { id: "1A", name: "Theatre Square", difficulty: 1000 },
      { id: "1B", name: "Spreadsheet", difficulty: 1600 },
      { id: "1C", name: "Ancient Berland Circus", difficulty: 2100 },
    ],
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
    problems: [
      { id: "2A", name: "Winner", difficulty: 1500 },
      { id: "2B", name: "The Least Round Way", difficulty: 2000 },
    ],
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
    problems: [
      { id: "3A", name: "Shortest Path of the King", difficulty: 1300 },
      { id: "3B", name: "Lorry", difficulty: 1900 },
      { id: "4A", name: "Watermelon", difficulty: 800 },
      { id: "4B", name: "Before an Exam", difficulty: 1400 },
      { id: "4C", name: "Registration System", difficulty: 1300 },
    ],
  },
]

export default function ContestsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [contestType, setContestType] = useState("all")
  const [ratedOnly, setRatedOnly] = useState(false)
  const [expandedContest, setExpandedContest] = useState<number | null>(null)

  const filteredContests = contests.filter((contest) => {
    const matchesSearch =
      contest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contest.writer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = contestType === "all" || contest.type === contestType
    const matchesRated = !ratedOnly || contest.rated
    return matchesSearch && matchesType && matchesRated
  })

  const upcomingContests = filteredContests.filter((contest) => contest.status === "upcoming")
  const pastContests = filteredContests.filter((contest) => contest.status === "past")

  const toggleExpandContest = (contestId: number) => {
    if (expandedContest === contestId) {
      setExpandedContest(null)
    } else {
      setExpandedContest(contestId)
    }
  }

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

  return (
    <div className="min-h-screen bg-black bg-[linear-gradient(rgba(0,255,0,0.03)_2px,transparent_2px),linear-gradient(90deg,rgba(0,255,0,0.03)_2px,transparent_2px)] bg-[size:50px_50px]">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-7xl mx-auto p-6 space-y-8">
        <AnimatedHeader />

        <ContestFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          contestType={contestType}
          setContestType={setContestType}
          ratedOnly={ratedOnly}
          setRatedOnly={setRatedOnly}
        />

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold flex items-center gap-2 text-gray-300">
            <Calendar className="text-[hsl(142,72%,29%)]" />
            Upcoming Contests
          </h2>
          <div className="grid gap-4">
            {upcomingContests.map((contest, index) => (
              <Link href={`/problems?contestId=${contest.id}`} key={contest.id}>
                <div className="cursor-pointer">
                  <ContestCard contest={contest} index={index} />
                </div>
              </Link>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold flex items-center gap-2 text-gray-300">
            <Calendar className="text-[hsl(142,72%,29%)]" />
            Past Contests
          </h2>
          <div className="grid gap-4">
            {pastContests.map((contest, index) => (
              <Link href={`/problems?contestId=${contest.id}`} key={contest.id}>
                <div className="cursor-pointer">
                  <ContestCard contest={contest} index={index} />
                </div>
              </Link>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </div>
  )
}

