'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Places() {
  const [currentPlace, setCurrentPlace] = useState(0)

  const places = [
    {
      image: '/places/sp.jpg',
      text: 'meu lar em sp',
    },
    {
      image: '/places/vitoria.jpg',
      text: '20°19\'18"S 40°20\'09"W',
    }
  ]

  useEffect(() => {
    if (currentPlace === 0) {
      const timer = setTimeout(() => setCurrentPlace(1), 6000)
      return () => clearTimeout(timer)
    }
  }, [currentPlace])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-full relative"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPlace}
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '-100%' }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="w-full h-full relative"
        >
          <Image
            src={places[currentPlace].image}
            alt={places[currentPlace].text}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="absolute bottom-12 left-12 glass rounded-2xl px-8 py-6"
          >
            <p className="text-white text-2xl font-light tracking-wide">
              {places[currentPlace].text}
            </p>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}
