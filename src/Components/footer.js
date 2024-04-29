import React from 'react';
import './Styles/footer.css';
import Logo from './Images/travel india.png';
import Googlelogo from './Images/gplus-connect.png';
import Twitterlogo from './Images/twitter-connect.png';
import Facebooklogo from './Images/fb-connect.png';
import Pinterestlogo from './Images/pinterest-connect.png';
import Instagramlogo from './Images/instagram-connect.png';

const Footer = () => (
  <div className="footer-wrap">
    <div className="footer-wrapper">
      <div className="column-one">
        <img id="footer" src={Logo} alt="Headout" />
        <p>Travel India is building the future of how we experience our cities.</p>
        <p
          style={{
            color: '#2980b9',
            fontSize: '14px'
          }}
        >
        </p>
      </div>
      <div className="column-three">
        <h3>About us</h3>
        <ul>
          <li>About Travel India</li>
          <li>Careers</li>
          <li>Blog</li>
          <li>Privacy Policy</li>
          <li>Terms of Usage</li>
        </ul>
      </div>
      <div className="column-four">
        <h3>Contact</h3>
        <p>Feel free to get in touch via email:</p>
        <p style={{ color: '#4fc3f7', cursor: 'pointer' }}>
          travel.india@gmail.com
        </p>
        <div className="social-media-contact">
          <img
            src={Googlelogo}
            className="social-connect"
            alt="Connect with us"
          />
          <img
            src={Twitterlogo}
            className="social-connect"
            alt="Connect with us"
          />
          <img
            src={Facebooklogo}
            className="social-connect"
            alt="Connect with us"
          />
          <img
            src={Pinterestlogo}
            className="social-connect"
            alt="Connect with us"
          />
          <img
            src={Instagramlogo}
            className="social-connect"
            alt="Connect with us"
            style={{ width: '25px', paddingBottom: '2px' }}
          />
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
