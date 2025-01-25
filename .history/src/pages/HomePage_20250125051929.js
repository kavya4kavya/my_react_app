// src/pages/HomePage.js
import React from 'react';
import './HomePage.css'; // Import the CSS file for the homepage

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="logo">
        Karigar
      </div>
      <h1>Welcome Aboard!</h1>
      <div className="buttons">
        <a href="#" className="button">Buy</a>
        <a href="#" className="button">Sell</a>
        <a href="#" className="button">Hire</a>
        <a href="#" className="button">Get Hired</a>
      </div>
      <div className="auth-links">
        <a href="#">Sign Up</a> | <a href="#">Sign In</a>
      </div>
    </div>
  );
};

export default HomePage;