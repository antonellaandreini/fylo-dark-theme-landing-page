import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import './styles.css';

const Footer = () => (
  <div className="footer">
    <div className="left">
      <img id="logo" src="../../images/logo.svg" alt="logo" />
      <div className="left2">
        <img id="pin" src="../images/icon-location.svg" alt="location pin" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua
        </p>
      </div>
    </div>
    <div className="contact">
      <div>
        <img src="../images/icon-phone.svg" alt="phone" />
        <p>+1-543-123-4567</p>
      </div>
      <div>
        <img src="../images/icon-email.svg" alt="email" />
        <p>example@fylo.com</p>
      </div>
    </div>
    <ul className="info">
      <li>About Us</li>
      <li>Contact Us</li>
      <li>Jobs</li>
      <li>Terms</li>
      <li>Press</li>
      <li>Privacy</li>
      <li>Blog</li>
    </ul>
    <ul className="social">
      <li>
        <FontAwesomeIcon icon={faFacebook} />
      </li>
      <li>
        <FontAwesomeIcon icon={faTwitter} />
      </li>
      <li>
        <FontAwesomeIcon icon={faInstagram} />
      </li>
    </ul>
  </div>
);
export default React.memo(Footer);
