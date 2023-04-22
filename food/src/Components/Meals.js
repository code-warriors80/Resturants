import React from 'react'
import '../styles/Meals.css'
import img1 from '../img/Hue_Saturation-679-copy.jpg'
import img2 from '../img/Hue_Saturation-679-copy-2.jpg'
import img3 from '../img/Hue_Saturation-679-copy-3.jpg'
import img4 from '../img/Hue_Saturation-679-copy-4.jpg'

const Meals = () => {
  return (
    <section className='meals'>
               <h1>Trending Meals</h1>
               <div className='meals-container'>
                              <div className='meals-parent'>
                                             <div className='meals-box'>
                                                            <img src={img1} alt='' />
                                                            <h3>Bacon Cheeseburger</h3>
                                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, reprehenderit!</p>
                                                            <h4><span>N</span>30.00</h4>
                                             </div>

                                             <div className='meals-box'>
                                                             <img src={img2} alt='' />
                                                            <h3>Chicken Hamburger</h3>
                                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, reprehenderit!</p>
                                                            <h4><span>N</span>15.00</h4>
                                             </div>

                                             <div className='meals-box'>
                                             <img src={img3} alt='' />
                                                            <h3>Double Cheeseburger</h3>
                                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, reprehenderit!</p>
                                                            <h4><span>N</span>25.00</h4>
                                             </div>

                                             <div className='meals-box'>
                                             <img src={img4} alt='' />
                                                            <h3>Double Barbecue</h3>
                                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, reprehenderit!</p>
                                                            <h4><span>N</span>35.00</h4>
                                             </div>
                              </div>
               </div>
    </section>
  )
}

export default Meals