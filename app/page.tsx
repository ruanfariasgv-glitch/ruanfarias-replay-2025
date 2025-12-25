'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Intro from '@/components/Intro'
import GridPhotos from '@/components/GridPhotos'
import Places from '@/components/Places'
import People from '@/components/People'
import Revelations from '@/components/Revelations'
import Outro from '@/components/Outro'

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0)

  const sections = [
    { component: Intro, duration: 4000 },
    { component: GridPhotos, duration: 18000 },
    { component: Places, duration: 12000 },
    { component: People, duration: 12000 },
    { component: Revelations, duration: 15000 },
    { component: Outro, duration: 5000 },
  ]

  useEffect(() => {
    if (currentSection < sections.length - 1) {
      const timer = setTimeout(() => {
        setCurrentSection(prev => prev + 1)
      }, sections[currentSection].duration)

      return () => clearTimeout(timer)
    }
  }, [currentSection, sections])

  const CurrentComponent = sections[currentSection].component

  return (
    <main className="min-h-screen w-full flex items-center justify-center p-4">
      <div className="w-full max-w-[1080px] aspect-[9/16] relative overflow-hidden rounded-3xl">
        <AnimatePresence mode="wait">
          <CurrentComponent key={currentSection} />
        </AnimatePresence>
      </div>

      {/* Debug controls - remover na versão final */}
      <div className="fixed bottom-4 left-4 glass rounded-lg p-4 text-white text-sm">
        <p>Seção: {currentSection + 1}/{sections.length}</p>
        <div className="flex gap-2 mt-2">
          <button 
            onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
            className="px-3 py-1 glass-strong rounded"
          >
            ←
          </button>
          <button 
            onClick={() => setCurrentSection(Math.min(sections.length - 1, currentSection + 1))}
            className="px-3 py-1 glass-strong rounded"
          >
            →
          </button>
          <button 
            onClick={() => setCurrentSection(0)}
            className="px-3 py-1 glass-strong rounded"
          >
            Reset
          </button>
        </div>
      </div>
    </main>
  )
}
