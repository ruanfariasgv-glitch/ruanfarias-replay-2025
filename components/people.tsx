'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function People() {
  const [currentPerson, setCurrentPerson] = useState(0)

  // Substitua pelos caminhos das 25 fotos
  const people = Array.from({ length: 25 }, (_, i) => `/people/${i + 1}.jpg`)

  useEffect(() => {
    if (currentPerson < people.length - 1) {
      const timer = setTimeout(() => {
        setCurrentPerson(prev => prev + 1)
      }, 450) // 0.45s por pessoa

      return () => clearTimeout(timer)
    }
  }, [currentPerson, people.length])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-full flex items-center justify-center p-8"
    >
      <div className="grid grid-cols-5 gap-3 w-full max-w-4xl">
        {people.map((person, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: index <= currentPerson ? 1 : 0 
            }}
            transition={{ duration: 0.3 }}
            className="aspect-square relative rounded-full overflow-hidden"
          >
            <Image
              src={person}
              alt={`Pessoa ${index + 1}`}
              fill
              className="object-cover"
            />
            {index < currentPerson && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 glass-strong"
              />
            )}
            <div className="absolute inset-0 ring-1 ring-white/25" />
          </motion.div>
        ))}
      </div>

      {currentPerson === people.length - 1 && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-12 glass rounded-2xl px-12 py-8"
        >
          <p className="text-white text-7xl font-bold">25</p>
        </motion.div>
      )}
    </motion.div>
  )
}
