'use client'

import { motion } from 'framer-motion'

export default function Outro() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-full flex flex-col items-center justify-center gap-8"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="glass rounded-3xl px-16 py-12"
      >
        <h1 className="text-6xl font-bold text-white tracking-tight">
          ruanfarias
        </h1>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="glass rounded-2xl px-8 py-4"
      >
        <p className="text-2xl text-white/90">
          @ruanfarias
        </p>
      </motion.div>
    </motion.div>
  )
}
