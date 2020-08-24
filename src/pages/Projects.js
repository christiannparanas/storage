import React from 'react'
import folder from '../assets/img/folder.svg'
import git from '../assets/img/git.svg'
import external from '../assets/img/external-link.svg'

export default function Projects() {

   return (
      <div className="projects">
         <div className="project-container">
            <div className="icons">
               <img src={folder} className="file" alt=""/>
               <img src={git} className="git" alt=""/>
               <img src={external} alt=""/>
            </div>
            <div className="title">Thea's Food Deliveries</div>
            <div className="discription">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus quasi consequuntur soluta similique modi excepturi?</div>
            <div className="tools"></div>
         </div>
      </div>
   )
}
