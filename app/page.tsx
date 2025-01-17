'use client'

import { motion } from 'framer-motion'
import { Montserrat } from 'next/font/google'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import ConferenceTheme from './components/ConferenceTheme'
import AdvisoryCommittee from './components/AdvisoryCommittee'
import KeynoteSpeakers from './components/KeynoteSpeakers'
import ChiefPatrons from './components/ChiefPatrons'
import UniversityOfficials from './components/UniversityOfficials'
import ConferenceChairs from './components/ConferenceChairs'
import TechnicalCommittee from './components/TechnicalCommittee'
import OrganizingCommittee from './components/OrganizingCommittee'
import ImportantDates from './components/ImportantDates'
import FullPaperSubmission from './components/FullPaperSubmission'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'

const montserrat = Montserrat({ subsets: ['latin'] })

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20 }
}

export default function Home() {
  return (
    <motion.main
      className={`${montserrat.className} bg-gradient-to-b from-blue-900 via-indigo-900 to-purple-900 text-white min-h-screen`}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <Header />
      <Hero />
      <About />
      <ConferenceTheme />
      <AdvisoryCommittee />
      <KeynoteSpeakers />
      <ChiefPatrons />
      <UniversityOfficials />
      <ConferenceChairs />
      <TechnicalCommittee />
      <OrganizingCommittee />
      <ImportantDates />
      <FullPaperSubmission />
      <ContactUs />
      <Footer />
    </motion.main>
  )
}

