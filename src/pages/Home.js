import React, { useState } from 'react'
import { motion } from 'framer-motion'
import me from '../assets/img/me.png'
import web from '../assets/img/computer-mouse.svg'
import ui from '../assets/img/web-layout.svg'

export default function Home() {
   const [info] = useState("I'm a full stack developer based in Tacloban City, Philippines who loves to build websites and mobile applications.")

   return (
      <motion.div className="home">
         <div className="me">
            <img src={me} alt="dre nadara"/>
         </div>
         <div className="msg">
            <span className="s1">Hi. I'm</span>
            <span className="s2">Christian R. Paranas</span>
            <span className="s3">{info}</span>
         </div>
         <div className="options">
            <div className="see">Projects</div>
            <div className="cv">Curriculum Vitae <i className='fas fa-file-download'></i></div>
         </div>
         <div className="can">
            <div className="web">
               <img src={web} alt=""/>
               <div className="title">Web Development</div>
               <div className="dis">
                  I can build your website from simple features to advance, front-end and back-end development.
               </div>
            </div>
            <div className="ui">
               <img className="ux" src={ui} alt=""/>
               <div className="title">UX/UI Design</div>
               <div className="dis">
                  I can make you simple landing page and complex design for your web app
               </div>
            </div>
         </div>
      </motion.div>
   )
}

// <Link to="/projects" className="link">See my works</Link>