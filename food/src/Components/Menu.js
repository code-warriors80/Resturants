import React from 'react'
import '../styles/Menu.css'
import leaf from '../img/leaf-1.png'
import menu from '../img/dark-menu-logo.png'

const Menu = () => {
  return (
    <section className='menu'>
               <div className='img-header'>
                              <img src={menu} alt='' />
               </div>

               <div className='menu-parent'>
                              <div className='menu-list'>
                              <img src={leaf} alt='leaf' className='leaf'/>
                                             <ul className='first-menu'>
                                                            <li>
                                                                           Bacon Cheeseburger .................. N55.00 <br/> 
                                                                           <span>Chicken breast, chaddar wrapped in a crispy</span>
                                                            </li>

                                                            <li>
                                                                           Chicken Hamburger ................... N66.00 <br/> 
                                                                           <span>Bihari chicken chuks, sweet corn</span>
                                                            </li>
                                                            <li>
                                                                           Double Cheeseburger ................ N30.00 <br/> 
                                                                           <span>Vegetables wrapped in a crispy ttortilla</span>
                                                            </li>
                                                            <li>
                                                                           Black Hamburger ....................... N30.00 <br/> 
                                                                           <span>Now Available on FoodMood</span>
                                                            </li>
                                                            <li>
                                                                           Double Hamburger .................... N45.00 <br/> 
                                                                           <span>Crispy potato wedges covered with spicy</span>
                                                            </li>
                                                            
                                             </ul>

                                             <ul className='second-menu'>
                                                            <li>
                                                                           Chicken Spin Roll ................. N55.00 <br/> 
                                                                           <span>Chicken breast, chaddar wrapped in a crispy</span>
                                                            </li>

                                                            <li>
                                                                           BBQ Spin Roll ....................... N65.00 <br/> 
                                                                           <span>Chicken breast, chaddar wrapped in a crispy</span>
                                                            </li>
                                                            <li>
                                                                           Spring Spin Roll ................... N30.00 <br/> 
                                                                           <span>Chicken breast, chaddar wrapped in a crispy</span>
                                                            </li>
                                                            <li>
                                                                           Vegan Spin Roll ................... N30.00 <br/> 
                                                                           <span>Chicken breast, chaddar wrapped in a crispy</span>
                                                            </li>
                                                            <li>
                                                                           Classic Spin Roll ................. $40.00 <br/> 
                                                                           <span>Chicken breast, chaddar wrapped in a crispy</span>
                                                            </li>

                                                            
                                             </ul>
                                             <img src={leaf} alt='leaf' className='lef'/>
                              </div>
               </div>
    </section>
  )
}

export default Menu