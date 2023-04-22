import React from 'react'
import aboutimage from '../img/burger-1.png'
import '../styles/Testimony.css'

const Testimony = () => {
  return (
    <section className='testimony'>
                     <div className='testimony-image'>
                              <img src={aboutimage} alt=''/>
               </div>
               <div className='testimony-text'>
                              <h4>Testimony</h4>
                              <h2>What our clients have to say </h2>
                              <h1>99</h1>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, placeat labore? Maxime minima ducimus omnis iste laboriosam deleniti quisquam quos, labore esse aspernatur?</p>
                              <h5>-John doe</h5>
               </div>
    </section>
  )
}

export default Testimony