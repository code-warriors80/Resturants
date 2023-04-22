import React from 'react'
import landingimage from '../img/sushi-plate-dark.png'
import '../styles/Landing.css'
import leaf from '../img/leaf-1.png'
import point from '../img/points.png'
import green from '../img/leaf_6 - Copy.png'
import { motion } from 'framer-motion'


const Landing = () => {
  return (
    <motion.div className='landing' >
               <motion.div  initial={{opacity: 0}} animate={{opacity: 1}} transition={{ delay: 1.5}} className='landing-page'>
                              <div className='landing-text'>
                                             <motion.h3 ><span>Ree's</span> Kitchen</motion.h3>
                                             <h1>1</h1>
                              </div>
                              <img src={leaf} alt='leaf' className='leaf'/>
                              <img src={leaf} alt='leaf1' className=' leaf1'/>
                              <img src={point} alt='point' className='point'/>
                              <img src={green} alt='leaf' className='green'/>
                              <img src={green} alt='leaf' className='green1'/>
                              <div className='landing-image' >
                                             <img src={landingimage} alt='landingiimage'/>
                              </div>
               </motion.div>
    </motion.div>
  )
}

export default Landing