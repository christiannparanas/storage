import React from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
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
      <motion.div className="contact" variants={{containerVariants}} initial="hidden" animate="visible" exit="exit">
         <div className="contact-dis">Have a project in mind or just want to say hi? Feel free to send me a message!</div>
         <div className="email"><a href="mailto:christiannparanas@gmail.com">Send a mail</a></div>
         <div className="socialmedia">
            <div className="dis">other socia media accounts:</div>
            <div className="social">
               <i className="fab fa-facebook-f"></i>
               <i className="fab fa-twitter"></i>
               <i className="fab fa-github"></i>
               <i className="fab fa-linkedin-in"></i>
               <i className="fab fa-stack-overflow"></i>
            </div>
         </div>
      </motion.div>
   )
}
