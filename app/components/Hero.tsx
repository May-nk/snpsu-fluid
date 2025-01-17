'use client'

import { motion } from 'framer-motion'

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function Hero() {
  return (
    <section className="py-20 text-center bg-gradient-to-r from-blue-800 to-indigo-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/particle-bg.png')] opacity-20 animate-pulse"></div>
      <motion.div
        className="container mx-auto px-4 relative z-10"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        <motion.h1 className="text-5xl md:text-7xl font-bold mb-4" variants={textVariants}>
          <span className="text-yellow-400">1st</span> INTERNATIONAL CONFERENCE
        </motion.h1>
        <motion.h2 className="text-3xl md:text-5xl font-semibold mb-4" variants={textVariants}>
          ON
        </motion.h2>
        <motion.h1 className="text-4xl md:text-6xl font-bold mb-8 text-yellow-400" variants={textVariants}>
          'ADVANCES IN FLUID DYNAMICS': (IAFD-2025)
        </motion.h1>
        <motion.p className="text-2xl md:text-3xl mb-4" variants={textVariants}>
          21st & 22nd March 2025
        </motion.p>
        <motion.p className="text-lg md:text-xl" variants={textVariants}>
          #14/5, Chikkasandra, Hesarghatta Main Road, Bengaluru – 560057
        </motion.p>
      </motion.div>
    </section>
  )
}

