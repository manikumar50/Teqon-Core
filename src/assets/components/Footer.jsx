import React from 'react';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <p>&copy; {new Date().getFullYear()} Teqon Core. All Rights Reserved.</p>
        <div className='footer-links'>
          <a href='/privacy-policy'>Privacy Policy</a>
          <a href='/terms-of-service'>Terms of Service</a>
          <a href='/contact'>Contact Us</a>
        </div>
        <div className='footer-social'>
          <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-facebook'></i>
          </a>
          <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-twitter'></i>
          </a>
          <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-linkedin'></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;