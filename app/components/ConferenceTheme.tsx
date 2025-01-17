'use client'

import { motion } from 'framer-motion'

export default function ConferenceTheme() {
  const themes = [
    "CFD", "Compressible Flows", "Multiphase Flows", "Energy Harvesting",
    "Combustion", "Experiment Fluid Dynamics", "Aerodynamics", "Medical Device Design",
    "Micro Fluids", "Drug Delivery System", "Nano Fluids", "Laparoscopes and Endoscopes",
    "Turbulence", "Blood Flow", "Boundary Layer", "Energy Systems",
    "Transportation Systems", "Building Systems"
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-indigo-900 to-blue-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/hexagon-bg.svg')] opacity-5"></div>
      <motion.div
        className="container mx-auto px-4 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-yellow-400">
          CONFERENCE THEME
        </h2>
        <p className="text-lg md:text-xl text-center mb-12">
          We invite full paper submissions related to, but not limited to, the topics below. 
          Papers will undergo rigorous peer review by domain experts and be published as Conference Proceedings.
        </p>
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {themes.map((theme, index) => (
            <motion.div
              key={index}
              className="bg-blue-800 rounded-lg p-4 text-center hover:bg-blue-700 transition-colors transform hover:scale-105"
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
            >
              {theme}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

