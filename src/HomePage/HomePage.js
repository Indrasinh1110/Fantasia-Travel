import React from 'react'
import NavBar from '../NavBar/NavBar'
import HeroPage from '../HeroPage/HeroPage'
import Destination from '../Destinations/Destination'
import WhyUs from '../WhyUs/WhyUs'
import Newsletter from '../Newsletter/Newsletter'
import Footer from '../Footer/Footer'
const HomePage = () => {
  return (
    <div className='homepage'>
    <NavBar/>
  <HeroPage/>
  <Destination/>
  <WhyUs/>
  <Newsletter/>
  <Footer/>
    </div>
  )
}

export default HomePage


// {/* navbar->menu,logo,login signup,contact
//         heropage->bg,line,search
//         destination-> explore our destimations..
//         why us?=>add one
//         experience category
//         newsteller and client testimonial
//         footer */}