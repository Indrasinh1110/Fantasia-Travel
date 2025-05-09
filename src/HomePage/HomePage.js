// src/components/HomePage/HomePage.js
import React from 'react'
import NavBar from '../NavBar/NavBar'
import HeroPage from '../HeroPage/HeroPage'
import Destination from '../Destinations/Destination'
import WhyUs from '../WhyUs/WhyUs'
import Experiences from '../Experiences/Experiences'
import TestimonialsNewsletterRow from '../TestimonialsNewsletterRow/TestimonialsNewsletterRow'
import Footer from '../Footer/Footer'

const HomePage = () => {
  return (
    <div className='homepage'>
      {/* 
        NavBar: menu, logo, login/signup, contact
        HeroPage: background, tagline, search
        Destination: explore our destinations
        WhyUs: why choose us?
        Experiences: experience categories
        Newsletter & Client Testimonial: side by side
        Footer
      */}
      <NavBar />
      <HeroPage />
      <Destination />
      <WhyUs />
      <Experiences />
      <TestimonialsNewsletterRow />
      <Footer />
    </div>
  )
}

export default HomePage
