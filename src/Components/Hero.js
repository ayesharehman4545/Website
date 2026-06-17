import React from 'react';
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section 
      className="d-flex align-items-center justify-content-center text-center text-white" 
      style={{ 
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url(${process.env.PUBLIC_URL + "/images/background.jfif"})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '90vh', 
        width: '100%',
        paddingTop: '80px' 
      }}
    >
      <div className="container py-5">
        <h1 className="display-3 fw-bold mb-3" style={{ textShadow: '2px 4px 12px rgba(0,0,0,0.5)' }}>
          Delicious Food Delivered Fresh
        </h1>
        <p className="lead text-light mb-4" style={{ maxWidth: '600px', margin: '0 auto', opacity: 0.9 }}>
          Enjoy the best meals made by our expert chefs.
        </p>
        <Link to="/menu" className="btn btn-danger btn-lg rounded-pill px-4 fw-bold">
         Explore Menu 
        </Link>
      </div>
    </section>
  );
};

export default Hero;