import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import FeaturedDishes from '../Components/FeaturedDishes';
import WhyChooseUs from "../Components/WhyChooseUs";
import Testimonials from '../Components/Testimonials';
import Footer from '../Components/Footer'; 

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturedDishes />
       <WhyChooseUs />
      <Testimonials />
      <Footer /> 
    </div>
  );
}

export default App;