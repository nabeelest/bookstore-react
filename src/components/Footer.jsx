import React from 'react';
import './Footer.css'; // Ensure you have a Footer.css file in the same directory

function Footer() {
  return (
    <footer className="footer-container">
      <div className="social-media-links">
        {/* Replace # with your actual links */}
        <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
      </div>
      <nav className="footer-nav">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Books</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <p className="copyright">Readify © 2024</p>
    </footer>
  );
}

export default Footer;
