import React from 'react'
import '../styles/Nav.css'
import { motion } from 'framer-motion'

const Nav = () => {
  return (
               <nav>
                    <div className='logo'>
                      <motion.h1 initial={{ y: -70 }} animate={{ y: -10 }} transition={{delay: 1.8}}>JEVELIN</motion.h1>
                    </div>

                    <motion.ul initial={{ y: -110 }} animate={{ y: -10 }} transition={{delay: 1.8}}>
                      <li><a href='/'>Home</a></li>
                      <li><a href='/'>About</a></li>
                      <li><a href='/'>Offers</a></li>
                      <li><a href='/'>Menu</a></li>
                      <li><a href='/'>Contact</a></li>
                    </motion.ul>
               </nav>
  )
}

export default Nav