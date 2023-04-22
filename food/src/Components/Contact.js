import React from 'react'
import '../styles/Contact.css'

const Contact = () => {
  return (
    <section className='contact'>
               <div className='contact-container'>
                <div className='contact-parent'>
                                <div className='moto'>
                                             <h2>Jevelin</h2>
                                             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, explicabo.</p>
                                             <div className='social'>
                                                            <span>1</span>
                                                            <span>2</span>
                                                            <span>3</span>
                                             </div>
                                             
                              </div>
                              <div className='details'>
                                             <h2>Contact us</h2>
                                             <p>Street name 1, City</p>
                                             <p>+234 07056882004</p>
                                             <p>CodeWarriors07@gmail.com</p>
                                             
                              </div>

                              <div className='subscribe'>
                                             <h2 style={{textAlign: 'center'}}>Subscribe</h2>
                                             <input type='text' placeholder='Enter your email here'/>
                                             <button>Subscribe</button>
                                             <p>Get the latest special offers</p>
                              </div>
                </div>
               </div>
    </section>
  )
}

export default Contact