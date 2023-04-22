import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <section className='footer'>
               <div className='footer-container'>
                              <div className='footer-parent'>
                                             <div className='footer-address'>
                                                            <h2>Dont Be Shy, Say HI!</h2>
                                                            <p><span></span>27 Division St, NY 10002, USA</p>
                                                            <p><span></span>+234 08116934763</p>
                                                            <p><span></span>Codewarriors@gmail.com</p>
                                             </div>
                                             <ul>
                                                            <h2>Opening Hours</h2>
                                                            <li>Monday ...................................<span>  8.00 - 20.00</span></li>
                                                            <li>Tuesday ..................................<span>  8.00 - 20.00</span></li>
                                                            <li>Wednesday .............................<span>  8.00 - 20.00</span></li>
                                                            <li>Thursday .................................<span>  8.00 - 20.00</span></li>
                                                            <li>Friday ......................................<span>  8.00 - 20.00</span></li>
                                                            <li>Saturday ..................................<span>  8.00 - 20.00</span></li>
                                                            <li>Sunday ..........................................<span>  CLOSED</span></li>
                                             </ul>

                                             <div className='subscribe'>
                                                    <h2 style={{textAlign: 'center'}}>Subscribe</h2>
                                                    <input type='text' placeholder='Enter your email here'/>
                                                    <button>Subscribe</button>
                                                    <p>Get the latest special offers</p>
                                              </div>
                              </div>
               </div>
                              <div className='allrights'>
                                             <div className='rights'>
                                                            <div className='copyrights'>
                                                                           <h4>Copyrights @ FoodMood By <span>Code-Warriors.</span> All Rights Reserved</h4>
                                                            </div>
                                                            <div className='socials'>
                                                                           <span>1</span>
                                                                           <span>2</span>
                                                                           <span>3</span>
                                                                           <span>4</span>
                                                            </div>
                                             </div>
                              </div>
    </section>
  )
}

export default Footer