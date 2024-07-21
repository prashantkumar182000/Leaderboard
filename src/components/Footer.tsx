// src/components/Footer.tsx
import React from 'react';
import './Footer.css';
import footerimage from '../assets/BANER-SHANNH 1.png';
import footerimage2 from '../assets/Footer2.jpg';
import footerimage3 from '../assets/Footer3.jpg';
import footerimage4 from '../assets/Footer4.jpg';


const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="slider-wrapper">
        <img src={footerimage} alt="Footer Image 1" />
        <img src={footerimage2} alt="Footer Image 2" />
        <img src={footerimage3} alt="Footer Image 3" />
        <img src={footerimage4} alt="Footer Image 4" />


      </div>
    </div>
  );
};

export default Footer;
