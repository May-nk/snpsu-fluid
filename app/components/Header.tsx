'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Header() {
  return (
    <motion.header
      className="bg-blue-900 text-white py-4 sticky top-0 z-50"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="https://assets.onecompiler.app/4349mfz4s/435mrhs9g/Untitled-2-1-1024x351%20(1).png"
            alt="Conference Banner"
            width={1024}
            height={351}
            className="w-full max-w-3xl mx-auto"
          />
        </motion.div>
      </div>
    </motion.header>
  )
}

