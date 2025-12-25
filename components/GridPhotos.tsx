'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function GridPhotos() {
  // Substitua pelos caminhos das suas 9 fotos
  const photos = [
    '/photos/1.jpg',
    '/photos/2.jpg',
    '/photos/3.jpg',
    '/photos/4.jpg',
    '/photos/5.jpg',
    '/photos/6.jpg',
    '/photos/7.jpg',
    '/photos/8.jpg',
    '/photos/9.jpg',
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-full flex items-center justify-center p-8"
    >
      <div className="grid grid-cols-3 gap-3 w-full max-w-4xl">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: index * 0.15,
              duration: 0.5,
              ease: [0.4, 0, 0.2, 1]
            }}
            className="aspect-square relative glass rounded-2xl overflow-hidden"
          >
            <Image
              src={photo}
              alt={`Foto ${index + 1}`}
              fill
              className="object-cover"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
