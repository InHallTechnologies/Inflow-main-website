import React from "react";
import "./contact-us.styles.scss";

const ContactUs = (props) => {
  return (
    <div className="contact-us-container">
      <h1 className="title">Reach us</h1>
      <div className="address-container">
        <h2 className="section-title">Office Address</h2>
        <p>Suite #A6-02, First Floor, Site No-12 </p>
        <p>Outer Ring Road, Bellandur</p>
        <p>Bangalore - 560103</p>
      </div>

      <div className="leagal-section">
        <h2 className="section-title">Leagal</h2>
        <a href="#" className="leagal-links">
          Privacy Policy
        </a>
        <a href="#" className="leagal-links">
          Terms of Service
        </a>
      </div>

      <div className="social-links">
        <h3>Find us on</h3>

        <div className="links">
          <div className="social-link">
            <i class="fa fa-linkedin-square social-link" aria-hidden="true" />
            <p>Linkedin</p>
          </div>

          <div className="social-link">
            <i class="fa fa-twitter-square social-link" aria-hidden="true" />
            <p>Twitter</p>
          </div>

          <div className="social-link">
            <i class="fa fa-facebook-official social-link" aria-hidden="true" />
            <p>Facebook</p>
          </div>

          <div className="social-link">
            <i class="fa fa-instagram social-link" aria-hidden="true" />
            <p>Instagram</p>
          </div>

          <div
            className="social-link"
            onClick={() => {
              window.location.href = "mailto:support@inflowlogistiks.com";
            }}
          >
            <i class="fa fa-envelope social-link" aria-hidden="true" />
            <p>Mail</p>
          </div>
        </div>
      </div>

      <p className="copyright">
        © Copyright 2020 InHall Technolgies Private Limited. All rights
        reserved.
      </p>
    </div>
  );
};

export default ContactUs;
