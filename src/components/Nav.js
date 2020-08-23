import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Nav() {
   const [menu, setMenu] = useState("menu-btn")
   const [menuItems, setMenuItems] =  useState('-100vh')
   const [navColor, setNavColor] = useState('#fffaf5')

   function openMenu() {
      if(menu === "menu-btn") {
         setMenu('menu-btn open')
         setMenuItems(0)
         setNavColor('transparent')
      }
      else {
         closeNav();
      }
   }

   function closeNav() {
      setMenu('menu-btn')
      setMenuItems('-100vh')
      setTimeout(() => {
         setNavColor('#fffaf5')
      }, 300)
   }

   return (
      <>
         <nav style={{ backgroundColor: navColor }} id="nav">
            <Logo />
            <div onClick={openMenu} className={menu} >
               <div className="menu-btn__burger"></div>
            </div>
         </nav>

         <div style={{ top: menuItems }} className="nav-menu">
            <ul>
               <li onClick={closeNav}><Link to="/">Home</Link></li>
               <li onClick={closeNav}><Link to="/about">About</Link></li>
               <li onClick={closeNav}><Link to="/projects">Projects</Link></li>
               <li onClick={closeNav}><Link to="/contact">Contact</Link></li>
            </ul>
         </div>
      </>
   )
}