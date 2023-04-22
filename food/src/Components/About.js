import React from 'react'
import aboutimage from '../img/bowl-top.png'
import '../styles/About.css'

const About = () => {
  return (
    <section className='about'>
               <div className='about-image'>
                              <img src={aboutimage} alt=''/>
               </div>
               <div className='about-text'>
                              <h4>About us</h4>
                              <h2>Delivering  Best Ingredients for our trusty food lovers </h2>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, placeat labore? Maxime minima ducimus omnis iste laboriosam deleniti quisquam quos, labore esse aspernatur?</p>
                              <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, placeat labore?</h5>
               </div>
    </section>
  )
}

export default About