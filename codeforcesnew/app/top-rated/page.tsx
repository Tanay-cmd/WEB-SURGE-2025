"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Search, ArrowUpDown, Globe, Award, Star, Users } from "lucide-react"
import { Input } from "@/components/ui/input"

// Sample top rated users data
const topRatedUsersData = [
  {
    rank: 1,
    handle: "tourist",
    name: "Gennady Korotkevich",
    rating: 3850,
    maxRating: 3850,
    country: "Belarus",
    organization: "ITMO University",
    contribution: 149,
    friendOf: 219,
    lastOnline: "1 hour ago",
    registered: "9 years ago",
  },
  {
    rank: 2,
    handle: "Um_nik",
    name: "Mikhail Tikhomirov",
    rating: 3750,
    maxRating: 3799,
    country: "Russia",
    organization: "ITMO University",
    contribution: 135,
    friendOf: 198,
    lastOnline: "2 hours ago",
    registered: "8 years ago",
  },
  {
    rank: 3,
    handle: "Petr",
    name: "Petr Mitrichev",
    rating: 3700,
    maxRating: 3743,
    country: "Russia",
    organization: "Google",
    contribution: 140,
    friendOf: 210,
    lastOnline: "3 days ago",
    registered: "10 years ago",
  },
  {
    rank: 4,
    handle: "ecnerwala",
    name: "Andrew He",
    rating: 3650,
    maxRating: 3675,
    country: "United States",
    organization: "MIT",
    contribution: 120,
    friendOf: 180,
    lastOnline: "1 day ago",
    registered: "7 years ago",
  },
  {
    rank: 5,
    handle: "Benq",
    name: "Benjamin Qi",
    rating: 3600,
    maxRating: 3625,
    country: "United States",
    organization: "Harvard University",
    contribution: 115,
    friendOf: 175,
    lastOnline: "5 hours ago",
    registered: "6 years ago",
  },
  {
    rank: 6,
    handle: "ksun48",
    name: "Kevin Sun",
    rating: 3550,
    maxRating: 3575,
    country: "United States",
    organization: "MIT",
    contribution: 110,
    friendOf: 165,
    lastOnline: "12 hours ago",
    registered: "7 years ago",
  },
  {
    rank: 7,
    handle: "Radewoosh",
    name: "Radosław Mysliwiec",
    rating: 3500,
    maxRating: 3550,
    country: "Poland",
    organization: "University of Warsaw",
    contribution: 105,
    friendOf: 160,
    lastOnline: "2 days ago",
    registered: "8 years ago",
  },
  {
    rank: 8,
    handle: "maroonrk",
    name: "Makoto Soejima",
    rating: 3450,
    maxRating: 3532,
    country: "Japan",
    organization: "Recruit",
    contribution: 100,
    friendOf: 155,
    lastOnline: "1 day ago",
    registered: "9 years ago",
  },
  {
    rank: 9,
    handle: "scott_wu",
    name: "Scott Wu",
    rating: 3400,
    maxRating: 3500,
    country: "United States",
    organization: "UC Berkeley",
    contribution: 95,
    friendOf: 150,
    lastOnline: "3 days ago",
    registered: "8 years ago",
  },
  {
    rank: 10,
    handle: "Egor",
    name: "Egor Kulikov",
    rating: 3350,
    maxRating: 3475,
    country: "Russia",
    organization: "Yandex",
    contribution: 90,
    friendOf: 145,
    lastOnline: "6 hours ago",
    registered: "10 years ago",
  },
  {
    rank: 11,
    handle: "ko_osaga",
    name: "Jaehyun Koo",
    rating: 3300,
    maxRating: 3450,
    country: "South Korea",
    organization: "Google",
    contribution: 85,
    friendOf: 140,
    lastOnline: "4 hours ago",
    registered: "7 years ago",
  },
  {
    rank: 12,
    handle: "Endagorion",
    name: "Mikhail Dvorkin",
    rating: 3250,
    maxRating: 3400,
    country: "Russia",
    organization: "Yandex",
    contribution: 80,
    friendOf: 135,
    lastOnline: "1 day ago",
    registered: "9 years ago",
  },
  {
    rank: 13,
    handle: "LHiC",
    name: "Li Xuanyi",
    rating: 3200,
    maxRating: 3350,
    country: "China",
    organization: "Tsinghua University",
    contribution: 75,
    friendOf: 130,
    lastOnline: "2 days ago",
    registered: "6 years ago",
  },
  {
    rank: 14,
    handle: "mnbvmar",
    name: "Mariia Belova",
    rating: 3150,
    maxRating: 3300,
    country: "Russia",
    organization: "ITMO University",
    contribution: 70,
    friendOf: 125,
    lastOnline: "5 hours ago",
    registered: "7 years ago",
  },
  {
    rank: 15,
    handle: "jiangly",
    name: "Jiang Zhenjian",
    rating: 3100,
    maxRating: 3250,
    country: "China",
    organization: "Tsinghua University",
    contribution: 65,
    friendOf: 120,
    lastOnline: "3 hours ago",
    registered: "5 years ago",
  },
]

// Function to get color based on rating
const getRatingColor = (rating: number) => {
  if (rating >= 3000) return "text-red-700"
  if (rating >= 2600) return "text-red-600"
  if (rating >= 2400) return "text-red-500"
  if (rating >= 2100) return "text-orange-500"
  if (rating >= 1900) return "text-violet-500"
  if (rating >= 1600) return "text-blue-500"
  if (rating >= 1400) return "text-cyan-500"
  if (rating >= 1200) return "text-green-500"
  return "text-gray-500"
}

// Function to get rank title based on rating
const getRankTitle = (rating: number) => {
  if (rating >= 3000) return "Legendary Grandmaster"
  if (rating >= 2600) return "International Grandmaster"
  if (rating >= 2400) return "Grandmaster"
  if (rating >= 2100) return "Master"
  if (rating >= 1900) return "Candidate Master"
  if (rating >= 1600) return "Expert"
  if (rating >= 1400) return "Specialist"
  if (rating >= 1200) return "Pupil"
  return "Newbie"
}

export default function TopRatedPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState<"rank" | "rating" | "contribution">("rank")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")

  // Filter users based on search
  const filteredUsers = topRatedUsersData.filter((user) => {
    return (
      user.handle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.organization.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })

  // Sort users
  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (sortBy === "rank") {
      return sortOrder === "asc" ? a.rank - b.rank : b.rank - a.rank
    } else if (sortBy === "rating") {
      return sortOrder === "asc" ? a.rating - b.rating : b.rating - a.rating
    } else {
      return sortOrder === "asc" ? a.contribution - b.contribution : b.contribution - a.contribution
    }
  })

  // Handle sort click
  const handleSort = (column: "rank" | "rating" | "contribution") => {
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
            Top Rated Coders
          </motion.h1>
          <p className="text-gray-400">The best competitive programmers from around the world</p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="backdrop-blur-md bg-[rgba(18,18,18,0.8)] border border-white/10 rounded-lg p-6"
        >
          <div className="flex items-center space-x-2">
            <Search className="w-5 h-5 text-[hsl(142,72%,29%)]" />
            <Input
              placeholder="Search by handle, name, country, or organization..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-[hsl(240,4%,16%)]/50 border-[hsl(142,72%,29%)]/20"
            />
          </div>
        </motion.div>

        {/* Users Table */}
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
                  <th className="p-4 cursor-pointer hover:bg-white/5" onClick={() => handleSort("rank")}>
                    <div className="flex items-center space-x-1">
                      <span>Rank</span>
                      {sortBy === "rank" && (
                        <ArrowUpDown className={`w-4 h-4 ${sortOrder === "asc" ? "rotate-0" : "rotate-180"}`} />
                      )}
                    </div>
                  </th>
                  <th className="p-4">User</th>
                  <th className="p-4 cursor-pointer hover:bg-white/5" onClick={() => handleSort("rating")}>
                    <div className="flex items-center space-x-1">
                      <span>Rating</span>
                      {sortBy === "rating" && (
                        <ArrowUpDown className={`w-4 h-4 ${sortOrder === "asc" ? "rotate-0" : "rotate-180"}`} />
                      )}
                    </div>
                  </th>
                  <th className="p-4">Max Rating</th>
                  <th className="p-4">Country</th>
                  <th className="p-4 cursor-pointer hover:bg-white/5" onClick={() => handleSort("contribution")}>
                    <div className="flex items-center space-x-1">
                      <span>Contribution</span>
                      {sortBy === "contribution" && (
                        <ArrowUpDown className={`w-4 h-4 ${sortOrder === "asc" ? "rotate-0" : "rotate-180"}`} />
                      )}
                    </div>
                  </th>
                  <th className="p-4">Last Online</th>
                </tr>
              </thead>
              <tbody>
                {sortedUsers.map((user, index) => (
                  <motion.tr
                    key={user.handle}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                    whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                    className="border-b border-white/10 cursor-pointer"
                  >
                    <td className="p-4 font-mono">{user.rank}</td>
                    <td className="p-4">
                      <div className="flex flex-col">
                        <span className={`font-semibold ${getRatingColor(user.rating)}`}>{user.handle}</span>
                        <div className="flex items-center space-x-2 text-xs text-gray-400 mt-1">
                          <span>{user.name}</span>
                          <div className="flex items-center">
                            <Users className="w-3 h-3 mr-1" />
                            <span>{user.friendOf}</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex flex-col">
                        <span className={`font-semibold ${getRatingColor(user.rating)}`}>{user.rating}</span>
                        <span className="text-xs text-gray-400">{getRankTitle(user.rating)}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-2 text-yellow-500" />
                        <span className={getRatingColor(user.maxRating)}>{user.maxRating}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        <Globe className="w-4 h-4 text-gray-400" />
                        <span>{user.country}</span>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">{user.organization}</div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center">
                        <Award className="w-4 h-4 mr-2 text-[#4ff0b7]" />
                        <span>{user.contribution}</span>
                      </div>
                    </td>
                    <td className="p-4 text-gray-400">
                      <div>{user.lastOnline}</div>
                      <div className="text-xs">Registered {user.registered}</div>
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

