import React from 'react';
import HeroPage from '../../HeroPage/HeroPage';
import WhyUs from '../../WhyUs/WhyUs';
import Experiences from '../../Experiences/Experiences';
import TestimonialsNewsletterRow from '../../TestimonialsNewsletterRow/TestimonialsNewsletterRow';
import Footer from '../../Footer/Footer';
import MasonryGallery from '../../Destinations/Destination'; // Make sure this import is correct

const HomePage = () => {
  return (
    <div className='homepage'>
      <HeroPage />

      <div id="destinations">
        <MasonryGallery />
      </div>

      <div id="about">
        <WhyUs />
      </div>

      <div id="experiences">
        <Experiences />
      </div>

      <TestimonialsNewsletterRow />
      <Footer />
    </div>
  );
};

export default HomePage;
