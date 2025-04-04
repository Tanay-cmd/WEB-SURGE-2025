"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { User, Lock, Mail, Key, Github, ChromeIcon as Google, Facebook, ArrowRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import ParticleBackground from "@/app/components/ParticleBackground"

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const toggleMode = () => {
    setIsLogin(!isLogin)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle authentication logic here
    console.log(isLogin ? "Login" : "Signup", { email, password, username })
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0 z-0">
        <ParticleBackground />
      </div>

      {/* Auth Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md p-8 backdrop-blur-md bg-[rgba(18,18,18,0.8)] border border-white/10 rounded-lg shadow-2xl"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center mb-8"
        >
          <motion.h1
            className="text-3xl font-bold text-[#4ff0b7] mb-2"
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
            {isLogin ? "Welcome Back" : "Join Codeforces"}
          </motion.h1>
          <p className="text-gray-400">
            {isLogin ? "Sign in to continue your coding journey" : "Create an account to start competing"}
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          {/* Username Field (only for signup) */}
          {!isLogin && (
            <div className="space-y-2">
              <label htmlFor="username" className="block text-sm font-medium text-gray-300">
                Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <User className="w-5 h-5 text-gray-500" />
                </div>
                <Input
                  id="username"
                  type="text"
                  placeholder="Choose a username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="pl-10 bg-[hsl(240,4%,16%)]/50 border-[hsl(142,72%,29%)]/20 text-white"
                  required
                />
              </div>
            </div>
          )}

          {/* Email Field */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Mail className="w-5 h-5 text-gray-500" />
              </div>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 bg-[hsl(240,4%,16%)]/50 border-[hsl(142,72%,29%)]/20 text-white"
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Lock className="w-5 h-5 text-gray-500" />
              </div>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 bg-[hsl(240,4%,16%)]/50 border-[hsl(142,72%,29%)]/20 text-white"
                required
              />
            </div>
          </div>

          {/* Confirm Password Field (only for signup) */}
          {!isLogin && (
            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300">
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Key className="w-5 h-5 text-gray-500" />
                </div>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="pl-10 bg-[hsl(240,4%,16%)]/50 border-[hsl(142,72%,29%)]/20 text-white"
                  required
                />
              </div>
            </div>
          )}

          {/* Forgot Password Link (only for login) */}
          {isLogin && (
            <div className="text-right">
              <motion.a
                href="#"
                whileHover={{ color: "#4ff0b7" }}
                className="text-sm text-gray-400 hover:text-[#4ff0b7] transition-colors"
              >
                Forgot password?
              </motion.a>
            </div>
          )}

          {/* Submit Button */}
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-gradient-to-r from-[#4ff0b7] to-[#2a9d8f] text-black font-semibold rounded-md shadow-lg flex items-center justify-center gap-2"
            >
              {isLogin ? "Sign In" : "Create Account"}
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </motion.form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-700"></div>
          <span className="px-4 text-sm text-gray-400">OR</span>
          <div className="flex-grow border-t border-gray-700"></div>
        </div>

        {/* Social Login Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-3 gap-3"
        >
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center p-2 border border-white/10 rounded-md"
          >
            <Github className="w-5 h-5 text-white" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center p-2 border border-white/10 rounded-md"
          >
            <Google className="w-5 h-5 text-white" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center p-2 border border-white/10 rounded-md"
          >
            <Facebook className="w-5 h-5 text-white" />
          </motion.button>
        </motion.div>

        {/* Toggle Mode */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-6 text-center"
        >
          <p className="text-gray-400">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <motion.button
              onClick={toggleMode}
              whileHover={{ color: "#4ff0b7" }}
              className="ml-2 font-semibold text-white hover:text-[#4ff0b7] transition-colors"
            >
              {isLogin ? "Sign Up" : "Sign In"}
            </motion.button>
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

