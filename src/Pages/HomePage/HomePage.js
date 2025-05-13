// src/components/HomePage/HomePage.js
import React from 'react'
import NavBar from '../../NavBar/NavBar'
import HeroPage from '../../HeroPage/HeroPage'
import WhyUs from '../../WhyUs/WhyUs'
import Experiences from '../../Experiences/Experiences'
import TestimonialsNewsletterRow from '../../TestimonialsNewsletterRow/TestimonialsNewsletterRow'
import Footer from '../../Footer/Footer'
import MasonryGallery from '../../Destinations/Destination' // Make sure this import is correct

const HomePage = () => {
  return (
    <div className='homepage'>
      {/*
        Components for HomePage:
        NavBar: Menu, Logo, Login/Signup, Contact
        HeroPage: Background, Tagline, Search
        MasonryGallery: Explore Our Destinations
        WhyUs: Why Choose Us?
        Experiences: Experience Categories
        TestimonialsNewsletterRow: Testimonials & Newsletter Side by Side
        Footer: Footer Information
      */}
      <NavBar />
      <HeroPage />
      <MasonryGallery />
      <WhyUs />
      <Experiences />
      <TestimonialsNewsletterRow />
      <Footer />
    </div>
  )
}

export default HomePage
