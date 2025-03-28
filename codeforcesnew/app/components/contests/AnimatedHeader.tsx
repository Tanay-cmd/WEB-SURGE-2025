"use client";

import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

const headerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

export function AnimatedHeader() {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8,
      }}
      className="text-center space-y-2 mb-8 px-2"
    >
      <motion.div
        animate={{
          scale: [1, 1.02, 1],
          rotate: [0, 1, -1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="inline-block"
      >
        <Cpu className="w-10 h-10 sm:w-12 sm:h-12 mx-auto text-[hsl(142,72%,29%)] mb-2" />
      </motion.div>
      <div className="flex justify-center items-center space-x-2 flex-wrap">
        <motion.span
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl sm:text-2xl md:text-3xl font-bold text-[#FFD700] [text-shadow:0_0_8px_rgba(255,215,0,0.7)]"
        >
          Competitive
        </motion.span>
        <motion.span
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl sm:text-2xl md:text-3xl font-bold text-[#00BFFF] [text-shadow:0_0_8px_rgba(0,191,255,0.7)]"
        >
          Coding
        </motion.span>
        <motion.span
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-xl sm:text-2xl md:text-3xl font-bold text-[#FF4444] [text-shadow:0_0_8px_rgba(255,68,68,0.7)]"
        >
          Contests
        </motion.span>
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-[hsl(240,5%,64.9%)] text-xs sm:text-sm md:text-base px-2"
      >
        Challenge yourself against the best coders
      </motion.p>
    </motion.div>
  );
}
