import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <video autoPlay loop muted className="footer-video">
        <source
          src="https://media-hosting.imagekit.io//2902e7980e3446ef/F3.mp4?Expires=1832969382&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=W9LBlbrZEySYS33rUv8DvkejGegkuUJoAPseUGrUxCdNG6F3bTzUiv~wHSBzo9T2OuWl3liJo-WA90gvyc49AlJ-ZN9UQ9YXKv8reIi8fap3cFLUS5Z~ZrDHDYE6CF~xjQqub0tWLIv60ZhCT14Pn~hDeQrR3wrY58UpzgkYLyGX1D8wAGWIVW4HrxC9bDwzokQoUkYhq9VjLWGA86X7NEmlq8fnHptt4hp8prRsSOKnSWxjS8T3GgFQ2YlvMrwbUzVgjckf-3nnozyi9m932xImQLu0ZbKgybjyKT~eqAsXhvSglnfq7OnNdCaFpXTAkrti5Nd0l4iiDm3E0F6e6A__"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Footer;