import React, {useState} from 'react'
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
         <form action="">
            <label className="lbl1" htmlFor="name">Name</label>
            <input id="name" type="text" name="name" />

            <label className="lbl2" htmlFor="email">Email</label>
            <input type="email" name="email" />

            <label className="lbl3" htmlFor="msg">Message</label>
            <textarea name="msg" cols="20" rows="5"></textarea>

            <div className="send">Send</div>
         </form>
      </motion.div>
   )
}
