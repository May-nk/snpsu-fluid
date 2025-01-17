'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/wave-bg.svg')] opacity-10"></div>
      <motion.div
        className="container mx-auto px-4 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-yellow-400">
          ABOUT THE UNIVERSITY
        </h2>
        <p className="text-lg md:text-xl text-center max-w-4xl mx-auto leading-relaxed">
          At Sapthagiri NPS University, we take pride in being a beacon of academic brilliance, 
          seamlessly blending innovation, creativity with enjoyment. Our primary objective is to 
          cultivate a dynamic learning environment that goes beyond traditional education, fostering 
          creativity, and preparing students for real-world success. We educate, empower and enrich 
          academic knowledge and inculcate value education to students. Join us on a transformative 
          journey where education meets excitement, knowledge transforms into innovation, creativity 
          and success becomes a way of life.
        </p>
      </motion.div>
    </section>
  )
}

