import React, { useState } from 'react'
import { motion } from 'framer-motion'
import me from '../assets/img/me.png'
import { Link } from 'react-router-dom'

export default function Home() {
   const [info] = useState("I'm a full stack developer based in Tacloban City, Philippines who loves to build websites and mobile applications.")
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
         <div className="me">
            <img src={me} alt="dre nadara"/>
         </div>
         <div className="msg">
            <span className="s1">Hi. I'm</span>
            <span className="s2">Christian R. Paranas</span>
            <span className="s3">{info}</span>
         </div>
         <div className="works">
            <Link to="/projects" className="link">See my works</Link>
         </div>
      </motion.div>
   )
}
