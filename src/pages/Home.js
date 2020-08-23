import React from 'react'
import { motion } from 'framer-motion'

export default function Home() {
   const containerVariants = {
      hidden: {
         opacity: 0,
      },
      visible: {
         opacity: 1,
         transition: { delay: 1.5, duration: 1.5}
      },
      exit: {
         x: '-100vw',
         transition: { ease: 'easeInOut' }
      }
   }

   return (
      <motion.div className="home" variants={{containerVariants}} initial="hidden" animate="visible" exit="exit">
         Home
      </motion.div>
   )
}
