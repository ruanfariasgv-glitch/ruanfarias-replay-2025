'use client'

import { motion } from 'framer-motion'

export default function Intro() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-full flex items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className="glass rounded-3xl px-20 py-16"
      >
        <h1 className="text-9xl font-bold text-white tracking-tight">
          2025
        </h1>
      </motion.div>
    </motion.div>
  )
}
