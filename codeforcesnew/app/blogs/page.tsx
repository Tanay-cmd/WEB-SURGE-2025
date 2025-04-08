"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Search, Calendar, Clock, ThumbsUp, MessageSquare, Tag, User } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/app/components/badge"

// Sample blogs data
const blogsData = [
  {
    id: 1,
    title: "Dynamic Programming Techniques for Competitive Programming",
    author: "tourist",
    authorRating: 3850,
    date: "March 15, 2024",
    readTime: "12 min read",
    likes: 1245,
    comments: 89,
    tags: ["dynamic programming", "algorithms", "tutorial"],
    preview:
      "In this blog post, I'll share some advanced dynamic programming techniques that I've used in recent contests. We'll cover state compression, digit DP, and more...",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 2,
    title: "Graph Algorithms: From Basics to Advanced",
    author: "Um_nik",
    authorRating: 3750,
    date: "March 10, 2024",
    readTime: "15 min read",
    likes: 987,
    comments: 76,
    tags: ["graphs", "algorithms", "tutorial"],
    preview:
      "Graphs are fundamental data structures in competitive programming. In this comprehensive guide, I'll walk you through everything from DFS/BFS to advanced flow algorithms...",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 3,
    title: "My Journey to Becoming a Grandmaster",
    author: "Petr",
    authorRating: 3700,
    date: "March 5, 2024",
    readTime: "8 min read",
    likes: 1532,
    comments: 124,
    tags: ["personal", "experience", "tips"],
    preview:
      "In this post, I share my personal journey from being a beginner to reaching the Grandmaster level. I'll discuss the challenges I faced and the strategies that helped me improve...",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 4,
    title: "Efficient Data Structures for Competitive Programming",
    author: "ecnerwala",
    authorRating: 3650,
    date: "February 28, 2024",
    readTime: "10 min read",
    likes: 876,
    comments: 65,
    tags: ["data structures", "algorithms", "tutorial"],
    preview:
      "This blog post covers advanced data structures like Segment Trees, Fenwick Trees, and Sparse Tables. I'll explain when and how to use them effectively in contests...",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 5,
    title: "Problem Setting: Creating Challenging and Fair Problems",
    author: "Benq",
    authorRating: 3600,
    date: "February 20, 2024",
    readTime: "14 min read",
    likes: 754,
    comments: 58,
    tags: ["problem setting", "contest preparation", "tips"],
    preview:
      "As someone who has set problems for multiple contests, I'll share insights into creating problems that are both challenging and fair. This guide covers everything from idea generation to testing...",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 6,
    title: "String Algorithms: A Comprehensive Guide",
    author: "ksun48",
    authorRating: 3550,
    date: "February 15, 2024",
    readTime: "13 min read",
    likes: 687,
    comments: 52,
    tags: ["strings", "algorithms", "tutorial"],
    preview:
      "String algorithms are essential for many competitive programming problems. In this guide, I'll cover KMP, Z-algorithm, suffix arrays, and other important string processing techniques...",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 7,
    title: "Competitive Programming Contest Strategy",
    author: "Radewoosh",
    authorRating: 3500,
    date: "February 10, 2024",
    readTime: "9 min read",
    likes: 621,
    comments: 47,
    tags: ["strategy", "contest", "tips"],
    preview:
      "How you approach a contest can be just as important as your technical skills. In this post, I'll share strategies for time management, problem selection, and handling pressure during contests...",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 8,
    title: "Mathematics in Competitive Programming",
    author: "maroonrk",
    authorRating: 3450,
    date: "February 5, 2024",
    readTime: "11 min read",
    likes: 589,
    comments: 43,
    tags: ["math", "number theory", "tutorial"],
    preview:
      "Mathematical knowledge can give you a significant edge in competitive programming. This post covers essential topics like modular arithmetic, combinatorics, and number theory with practical examples...",
    image: "/placeholder.svg?height=200&width=400",
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

export default function BlogsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTag, setSelectedTag] = useState("")

  // Get all unique tags
  const allTags = Array.from(new Set(blogsData.flatMap((blog) => blog.tags))).sort()

  // Filter blogs based on search and tag
  const filteredBlogs = blogsData.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.preview.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesTag = selectedTag === "" || blog.tags.includes(selectedTag)

    return matchesSearch && matchesTag
  })

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
            Codeforces Blogs
          </motion.h1>
          <p className="text-gray-400">Insights and tutorials from top competitive programmers</p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="backdrop-blur-md bg-[rgba(18,18,18,0.8)] border border-white/10 rounded-lg p-6 space-y-4"
        >
          <div className="flex items-center space-x-2">
            <Search className="w-5 h-5 text-[hsl(142,72%,29%)]" />
            <Input
              placeholder="Search blogs by title, author, or content..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-[hsl(240,4%,16%)]/50 border-[hsl(142,72%,29%)]/20"
            />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setSelectedTag("")}>
              <Badge
                rating={0}
                className={`cursor-pointer ${
                  selectedTag === "" ? "bg-[#4ff0b7] text-black" : "bg-gray-800 text-gray-300"
                }`}
              >
                All Tags
              </Badge>
            </motion.div>
            {allTags.map((tag) => (
              <motion.div
                key={tag}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedTag(tag)}
              >
                <Badge
                  rating={0}
                  className={`cursor-pointer flex items-center gap-1 ${
                    selectedTag === tag ? "bg-[#4ff0b7] text-black" : "bg-gray-800 text-gray-300"
                  }`}
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredBlogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
              whileHover={{ y: -5 }}
              className="backdrop-blur-md bg-[rgba(18,18,18,0.8)] border border-white/10 rounded-lg overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 w-full">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-[#4ff0b7]" />
                    <span className={`font-semibold ${getRatingColor(blog.authorRating)}`}>{blog.author}</span>
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h2 className="text-xl font-bold text-white hover:text-[#4ff0b7] transition-colors">{blog.title}</h2>
                <div className="flex flex-wrap items-center text-sm text-gray-400 gap-x-4 gap-y-2">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {blog.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {blog.readTime}
                  </div>
                </div>
                <p className="text-gray-400">{blog.preview}</p>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag) => (
                    <Badge key={tag} rating={0} className="bg-gray-800 text-xs flex items-center gap-1">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-white/10">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <ThumbsUp className="w-4 h-4 mr-1 text-[#4ff0b7]" />
                      <span>{blog.likes}</span>
                    </div>
                    <div className="flex items-center">
                      <MessageSquare className="w-4 h-4 mr-1 text-[#4ff0b7]" />
                      <span>{blog.comments}</span>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-[#4ff0b7] font-medium"
                  >
                    Read More
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

