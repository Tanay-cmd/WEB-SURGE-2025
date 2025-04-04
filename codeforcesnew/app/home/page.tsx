"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import ParticleBackground from "../components/ParticleBackground"
import CardList from "../components/CardList"
import GlitchText from "../components/GlitchText"
import Link from "next/link"
import { User, Calendar, Trophy } from "lucide-react"
import Navbar from "../components/Navbar"

// Top rated coders data
const topCoders = [
  {
    id: 1,
    handle: "tourist",
    name: "Gennady Korotkevich",
    rating: 3850,
    country: "Belarus",
    countryCode: "BY",
    avatar: "/placeholder.svg?height=100&width=100&text=GK",
    background: "/placeholder.svg?height=300&width=500&text=Belarus",
  },
  {
    id: 2,
    handle: "Um_nik",
    name: "Mikhail Tikhomirov",
    rating: 3750,
    country: "Russia",
    countryCode: "RU",
    avatar: "/placeholder.svg?height=100&width=100&text=MT",
    background: "/placeholder.svg?height=300&width=500&text=Russia",
  },
  {
    id: 3,
    handle: "Petr",
    name: "Petr Mitrichev",
    rating: 3700,
    country: "Russia",
    countryCode: "RU",
    avatar: "/placeholder.svg?height=100&width=100&text=PM",
    background: "/placeholder.svg?height=300&width=500&text=Russia",
  },
  {
    id: 4,
    handle: "ecnerwala",
    name: "Andrew He",
    rating: 3650,
    country: "United States",
    countryCode: "US",
    avatar: "/placeholder.svg?height=100&width=100&text=AH",
    background: "/placeholder.svg?height=300&width=500&text=USA",
  },
  {
    id: 5,
    handle: "Benq",
    name: "Benjamin Qi",
    rating: 3600,
    country: "United States",
    countryCode: "US",
    avatar: "/placeholder.svg?height=100&width=100&text=BQ",
    background: "/placeholder.svg?height=300&width=500&text=USA",
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

export default function HomePage() {
  const { scrollYProgress } = useScroll()
  const headerOpacity = useTransform(scrollYProgress, [0, 0.8, 0.85], [1, 1, 0])

  return (
    <div className="relative min-h-screen bg-black">
      {/* Header with Login Button */}
      <motion.div className="fixed top-0 left-0 w-full z-50 px-6 py-4" style={{ opacity: headerOpacity }}>
        <div className="flex justify-between items-center">
          <motion.h1
            layoutId="codeforces-title"
            className="text-4xl font-bold text-white italic cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.5, 1, 0.5],
              transition: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            }}
            whileHover={{
              opacity: [0.5, 1, 0.5],
              transition: { duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            }}
          >
            <div className="flex items-center gap-2">
              <img src="/codeforces.png" width={40} alt="" />
              <GlitchText text="Codeforces" />
            </div>
          </motion.h1>

          <Link href="/auth">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#4ff0b7] to-[#2a9d8f] text-black px-4 py-2 rounded-md font-semibold flex items-center gap-2"
            >
              <User className="w-4 h-4" />
              Login / Register
            </motion.button>
          </Link>
        </div>
      </motion.div>

      {/* Hero Section */}
      <div className="min-h-screen flex flex-col justify-center items-center relative">
        <ParticleBackground />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 text-center px-6 max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="text-[#4ff0b7]">Competitive</span> Programming{" "}
            <span className="text-[#4ff0b7]">Platform</span>
          </h1>
          <p className="text-xl text-gray-300 mb-10">
            Join the world's largest competitive programming community. Solve algorithmic challenges, compete in
            contests, and improve your coding skills.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contests">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#4ff0b7] text-black px-6 py-3 rounded-lg font-semibold flex items-center gap-2 text-lg"
              >
                <Calendar className="w-5 h-5" />
                Upcoming Contests
              </motion.button>
            </Link>
            <Link href="/top-rated">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border border-[#4ff0b7] text-[#4ff0b7] px-6 py-3 rounded-lg font-semibold flex items-center gap-2 text-lg"
              >
                <Trophy className="w-5 h-5" />
                Top Rated Coders
              </motion.button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white"
        >
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      <div className="relative">
        <CardList />

        {/* Top Coders Section */}
        <div className="min-h-screen w-full bg-black bg-[linear-gradient(rgba(0,255,0,0.03)_2px,transparent_2px),linear-gradient(90deg,rgba(0,255,0,0.03)_2px,transparent_2px)] bg-[size:50px_50px] py-20 px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-center text-[#4ff0b7] mb-12">Top Rated Coders</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {topCoders.map((coder, index) => (
                <motion.div
                  key={coder.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="relative overflow-hidden rounded-xl h-[300px] group"
                >
                  {/* Country Background */}
                  <motion.div
                    className="absolute inset-0 z-0"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      src={coder.background || "/placeholder.svg"}
                      alt={coder.country}
                      className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
                  </motion.div>

                  {/* Content */}
                  <div className="absolute inset-0 z-10 flex flex-col justify-end p-6">
                    <div className="flex items-center mb-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#4ff0b7] mr-4"
                      >
                        <img
                          src={coder.avatar || "/placeholder.svg"}
                          alt={coder.handle}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                      <div>
                        <h3 className={`text-xl font-bold ${getRatingColor(coder.rating)}`}>{coder.handle}</h3>
                        <p className="text-gray-300">{coder.name}</p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-gray-400">Rating</p>
                        <p className={`text-xl font-bold ${getRatingColor(coder.rating)}`}>{coder.rating}</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Country</p>
                        <p className="text-white">{coder.country}</p>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-[#4ff0b7]/20 text-[#4ff0b7] px-3 py-1 rounded-full text-sm font-medium border border-[#4ff0b7]/30"
                      >
                        View Profile
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex justify-center mt-12">
              <Link href="/top-rated">
                <button className="bg-[#4ff0b7]/20 text-[#4ff0b7] px-6 py-3 rounded-lg text-lg font-semibold border border-[#4ff0b7]/30">
                  View All Top Coders
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Navbar */}
      <Navbar />
    </div>
  )
}

