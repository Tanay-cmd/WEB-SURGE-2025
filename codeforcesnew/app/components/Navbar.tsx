"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, HelpCircle, Award, FileText, User, Menu, X, Calendar } from "lucide-react"

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Check if current path matches the link
  const isActive = (path: string) => pathname === path

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Navigation items
  const navItems = [
    { name: "Home", path: "/home", icon: <Home className="w-5 h-5" /> },
    { name: "Contests", path: "/contests", icon: <Calendar className="w-5 h-5" /> },
    { name: "Top Rated", path: "/top-rated", icon: <Award className="w-5 h-5" /> },
    { name: "Blogs", path: "/blogs", icon: <FileText className="w-5 h-5" /> },
    { name: "Help", path: "/help", icon: <HelpCircle className="w-5 h-5" /> },
    { name: "Profile", path: "/profile", icon: <User className="w-5 h-5" /> },
  ]

  return (
    <>
      {/* Mobile Navbar (Bottom) */}
      <motion.nav
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-[rgba(18,18,18,0.9)] backdrop-blur-md border-t border-white/10 md:hidden"
      >
        <div className="flex justify-around items-center h-16">
          {navItems.map((item) => (
            <Link href={item.path} key={item.path}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`flex flex-col items-center justify-center p-2 rounded-md ${
                  isActive(item.path) ? "text-[#4ff0b7]" : "text-gray-400 hover:text-white"
                }`}
              >
                {item.icon}
                <span className="text-xs mt-1">{item.name}</span>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.nav>

      {/* Desktop Navbar (Bottom) */}
      <motion.nav
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed bottom-0 left-0 right-0 z-50 bg-[rgba(18,18,18,0.9)] backdrop-blur-md border-t border-white/10 hidden md:block ${
          isScrolled ? "translate-y-full opacity-0" : "translate-y-0 opacity-100"
        } transition-all duration-300`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center items-center h-16">
            {navItems.map((item) => (
              <Link href={item.path} key={item.path}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center mx-4 px-4 py-2 rounded-md ${
                    isActive(item.path)
                      ? "text-[#4ff0b7] bg-white/5"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.icon}
                  <span className="ml-2">{item.name}</span>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-2 rounded-full bg-[rgba(18,18,18,0.8)] backdrop-blur-md border border-white/10 md:hidden"
      >
        {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
      </motion.button>

      {/* Mobile Menu */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? "0%" : "100%" }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-md md:hidden"
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item) => (
            <Link href={item.path} key={item.path} onClick={() => setIsOpen(false)}>
              <motion.div
                whileHover={{ scale: 1.1, x: 10 }}
                whileTap={{ scale: 0.9 }}
                className={`flex items-center text-xl ${
                  isActive(item.path) ? "text-[#4ff0b7]" : "text-gray-300 hover:text-white"
                }`}
              >
                {item.icon}
                <span className="ml-3">{item.name}</span>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>
    </>
  )
}

