import React from 'react';
import './styles.css';

const MainPage = () => (
  <>
    <img src="/images/illustration-intro.png" />
    <div className="section1">
      <div className="content-started">
        <h1>All your files in one secure location, accessible anywhere.</h1>
        <p>Fylo stores all your most important files in one secure location.</p>
        <p>Access them whenever you need, share and collaborate with</p>
        <p>friends, family, and co-workers.</p>
        <button className="button-get-started">Get Started</button>
      </div>
    </div>
    <div className="features">
      <div className="tile access">
        <img src="/images/icon-access-anywhere.svg" alt="access icon" />
        <h3>Access your files, anywhere</h3>
        <p>
          The ability to use a smartphone, tablet, or computer to access your account means your files follow you
          everywhere.
        </p>
      </div>
      <div>
        <img src="/images/icon-security.svg" />
        <h3>Security you can trust</h3>
        <p>
          2-factor authentication and user-controlled encryption are just a couple of the security features we allow to
          help secure your files.
        </p>
      </div>
      <div>
        <img src="/images/icon-collaboration.svg" />
        <h3>Real-time collaboration</h3>
        <p>
          Securely share files and folders with friends, family, and colleagues for live collaboration. No email
          attachments required.
        </p>
      </div>
      <div>
        <img src="/images/icon-any-file.svg" />
        <h3>Store any type of file</h3>
        <p>
          Whether you are sharing holidays, photos, or work documents, Fylo as you covered, allowing for all file types
          to be securely stored and shared.
        </p>
      </div>
    </div>
    <div className="section3">
      <img src="/images/illustration-stay-productive.png" alt="people working" />
      <div className="sec3text">
        <h1>Stay productive, wherever you are</h1>
        <p>
          Never let location be an issue when accessing your files. Fylo has you covered for all your file storage
          needs.
          <br />
          <br />
          Securely share files and folders with friends, family, and colleagues for live collaboration. No email
          attachments required.
        </p>
        <a href="#">
          See how Fylo works <img src="/images/icon-arrow.svg" alt="tiny arrow" />
        </a>
      </div>
    </div>
    <div className="section4">
      <div className="quotes">
        <img id="quotation" src="/images/bg-quotes.png" alt="quotation mark" />
      </div>
      <div className="quote-cards">
        <div className="card">
          <p>
            Fylo has improved our team productivity by an order of magnitude. Since making the switch, our team has
            become a well-oiled collaboration machine.
          </p>
          <img className="profile-pic" src="/images/profile-1.jpg" alt="profile pic" />
          <h5>Satish Patel</h5>
          <h6>Founder & CEO, Huddle</h6>
        </div>
        <div className="card">
          <p>
            Fylo has improved our team productivity by an order of magnitude. Since making the switch, our team has
            become a well-oiled collaboration machine.
          </p>
          <img className="profile-pic" src="/images/profile-2.jpg" alt="profile pic" />
          <h5>Bruce McKenzie</h5>
          <h6>Founder & CEO, Huddle</h6>
        </div>
        <div className="card">
          <p>
            Fylo has improved our team productivity by an order of magnitude. Since making the switch, our team has
            become a well-oiled collaboration machine.
          </p>

          <img className="profile-pic" src="/images/profile-3.jpg" alt="profile pic" />
          <h5>Iva Boyd</h5>
          <h6>Founder & CEO, Huddle</h6>
        </div>
      </div>
    </div>
    <div className="section5">
      <div className="contact-box">
        <h1>Get early access today</h1>
        <p>
          It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions,
          our support team would be happy to help you.
        </p>
        <form>
          <input type="email" id="email" name="email" placeholder="email@example.com" />
          <input id="submit" type="submit" value="Get Started For Free" />
        </form>
      </div>
    </div>
  </>
);

export default MainPage;
