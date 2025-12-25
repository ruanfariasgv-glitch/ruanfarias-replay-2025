'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Revelations() {
  const [stage, setStage] = useState(0)
  // 0: floating pieces, 1: text1, 2: text2, 3: assembling, 4: reveal

  const appleElements = [
    { icon: '📱', label: 'iPhone' },
    { icon: '💻', label: 'MacBook' },
    { icon: '👔', label: 'Steve Jobs' },
    { icon: '👓', label: 'Jony Ive' },
    { icon: 'Aa', label: 'SF Pro' },
    { icon: '⌘', label: 'Command' },
    { icon: '⌚', label: 'Apple Watch' },
    { icon: '🎧', label: 'AirPods' },
    { icon: '🔲', label: 'iOS Grid' },
    { icon: '◻︎', label: 'Rounded' },
    { icon: '⚙︎', label: 'Settings' },
    { icon: '✨', label: 'Dynamic Island' },
  ]

  useEffect(() => {
    const timings = [3000, 2000, 2000, 4000]
    if (stage < 4) {
      const timer = setTimeout(() => setStage(stage + 1), timings[stage])
      return () => clearTimeout(timer)
    }
  }, [stage])

  const getRandomPosition = (index: number) => {
    const angle = (index / appleElements.length) * Math.PI * 2
    const radius = 200 + Math.random() * 100
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
      rotate: Math.random() * 30 - 15,
    }
  }

  const getGridPosition = (index: number) => {
    const cols = 4
    const row = Math.floor(index / cols)
    const col = index % cols
    const spacing = 100
    return {
      x: (col - 1.5) * spacing,
      y: (row - 1.5) * spacing,
      rotate: 0,
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-full relative flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient animado */}
      <motion.div
        animate={{
          background: stage >= 3 
            ? 'linear-gradient(135deg, #FFB6D9 0%, #5AB9EA 50%, #B0E57C 100%)'
            : 'linear-gradient(135deg, #4A90E2 0%, #9B6DD6 50%, #FFB6D9 100%)',
        }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
      />

      {/* Título Revelações */}
      {stage === 0 && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="absolute top-16 glass rounded-2xl px-12 py-6"
        >
          <h2 className="text-4xl font-bold text-white">Revelações</h2>
        </motion.div>
      )}

      {/* Texto 1 */}
      {stage === 1 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          className="absolute glass rounded-3xl px-12 py-8 max-w-2xl text-center"
        >
          <p className="text-2xl text-white font-light leading-relaxed">
            Quando achei que tinha entendido meus hiperfocos...
          </p>
        </motion.div>
      )}

      {/* Texto 2 */}
      {stage === 2 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="absolute glass rounded-3xl px-12 py-8"
        >
          <p className="text-3xl text-white font-medium">
            ...não era só isso
          </p>
        </motion.div>
      )}

      {/* Peças flutuando / montando */}
      <div className="relative w-full h-full flex items-center justify-center">
        <AnimatePresence>
          {(stage === 0 || stage === 3) && appleElements.map((element, index) => {
            const floatingPos = getRandomPosition(index)
            const gridPos = getGridPosition(index)

            return (
              <motion.div
                key={index}
                initial={floatingPos}
                animate={stage === 3 ? gridPos : floatingPos}
                transition={{
                  duration: stage === 3 ? 1.5 : 3,
                  delay: stage === 3 ? index * 0.08 : 0,
                  ease: [0.4, 0, 0.2, 1],
                  repeat: stage === 0 ? Infinity : 0,
                  repeatType: 'reverse',
                }}
                className="absolute"
              >
                <motion.div
                  animate={{
                    opacity: stage === 3 ? [1, 0] : 1,
                  }}
                  transition={{
                    delay: stage === 3 ? 1 + index * 0.08 : 0,
                    duration: 0.5,
                  }}
                  className="glass rounded-xl px-6 py-4 shadow-xl"
                >
                  <span className="text-4xl">{element.icon}</span>
                </motion.div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>

      {/* Flower Boy Reveal */}
      {stage === 4 && (
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          className="relative"
        >
          <div className="w-[600px] h-[600px] relative glass rounded-3xl overflow-hidden">
            {/* Placeholder para capa Flower Boy - substitua por imagem real */}
            <div className="w-full h-full bg-gradient-to-br from-pink-300 via-blue-300 to-green-300 flex items-center justify-center">
              <p className="text-white text-2xl font-light text-center px-8">
                [ Capa do Flower Boy ]<br/>
                <span className="text-lg opacity-75 mt-2 block">
                  Adicione a imagem em /public/flower-boy.jpg
                </span>
              </p>
            </div>
            <motion.div
              animate={{ opacity: [0.3, 0.1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 glass"
            />
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}
