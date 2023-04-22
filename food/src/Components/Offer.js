import React from 'react'
import '../styles/Offer.css'
import hamburger from '../img/Hue_Saturation-679.jpg'
import img1 from '../img/Hue_Saturation-679-copy.jpg'
import img2 from '../img/Hue_Saturation-679-copy-2.jpg'
import img3 from '../img/Hue_Saturation-679-copy-3.jpg'
import img4 from '../img/Hue_Saturation-679-copy-4.jpg'

const Offer = () => {
  return (
    <section className='offer'>
               <h1>Special Offer</h1>
               <div className='offer-container'>
                              <div className='offer-parent'>
                                             <div className='offer-main'>
                                                            <img src={hamburger} alt=''/>
                                                            <h2>Ham Burger</h2>
                                                            <div></div>
                                                            <p>
                                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam amet modi accusamus quos velit, quidem voluptatibus assumenda sit earum iusto! Ipsa eaque maxime unde.
                                                            </p>
                                                            <div className='price'>
                                                                           <h3><span>N</span>14.00</h3>
                                                                           <a href='/'>LEARN MORE</a>
                                                            </div>
                                             </div>
                                             <div className='offer-grid'>
                                                            <div className='offer-box'>
                                                                           <img src={img1} alt=''/>
                                                                           <h2>Juicy Beef <br/> Burger Meal</h2>
                                                                           <h4><span>N</span>16.00</h4>
                                                                           <a href='/'>+ Add to cart</a>
                                                            </div>
                                                            <div className='offer-box'>
                                                                          <img src={img2} alt=''/>
                                                                           <h2>Choko Milkshake <br/> From Heaven</h2>
                                                                           <h4><span>N</span>8.00</h4>
                                                                           <a href='/'>+ Add to cart</a>
                                                            </div>
                                                            <div className='offer-box'>
                                                                            <img src={img3} alt=''/>
                                                                           <h2>Blueberry <br/> Waffles</h2>
                                                                           <h4><span>N</span>4.00</h4>
                                                                           <a href='/'>+ Add to cart</a>
                                                            </div>
                                                            <div className='offer-box'>
                                                                            <img src={img4}alt=''/>
                                                                           <h2>Medium Portion <br/> of Fries</h2>
                                                                           <h4><span>N</span>3.00</h4>
                                                                           <a href='/'>+ Add to cart</a>
                                                            </div>
                                             </div>
                              </div>
               </div>
    </section>
  )
}

export default Offer