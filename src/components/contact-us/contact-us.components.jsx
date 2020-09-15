import React, { createRef } from "react";

import "./contact-us.styles.scss";
import { firebaseDatabase } from "../../backend/firebaseHandlers";

class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.instagram = createRef(null);
    this.facebook = createRef(null);

    const date = new Date();
    this.state = {
      phoneNumber: "",
      message: "",
      date: date,
    };
  }

  handleClick = (event) => {
    if (event.target === this.instagram.current) {
      window.open("https://www.instagram.com/inflow.logistiks/", "_blank");
    }

    if (event.target === this.facebook.current) {
      window.open("https://www.facebook.com/inflow.logistiks.1", "_blank");
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = async (event) => {
    const databaseRef = firebaseDatabase.ref("ALL_LOGS");
    const key = databaseRef.push().key;

    if (this.state.phoneNumber === "") {
      alert("Enter a valid phone number");
      return;
    }

    if (this.state.message === "") {
      alert("Enter your message");
      return;
    }
    await databaseRef.child(key).set(this.state);
    this.setState({
      phoneNumber: "",
      message: "",
    });

    alert("We will contact you within 1-2 Hours");
  };
  render() {
    return (
      <div className="contact-us-container" ref={this.props.reference}>
        <h1 className="title">Reach us</h1>
        <div className="address-container">
          <h2 className="section-title">Office Address</h2>
          <p>Suite #A6-02, First Floor, Site No-12 </p>
          <p>Outer Ring Road, Bellandur</p>
          <p>Bangalore - 560103</p>
        </div>

        {/* <div className="leagal-section">
          <h2 className="section-title">Leagal</h2>
          <a href="#" className="leagal-links">
            Privacy Policy
          </a>
          <a href="#" className="leagal-links">
            Terms of Service
          </a>
        </div> */}

        <div className="contact-us-form">
          <h3 className="section-title">Contact Us</h3>
          <label className="label" for="phno">
            Phone Number
          </label>
          <input
            id="phno"
            className="input phone-number"
            type="tel"
            required
            name="phoneNumber"
            onChange={this.handleChange}
            value={this.state.phoneNumber}
          />

          <label className="label" for="msg">
            Message
          </label>
          <textarea
            id="msg"
            className="message input"
            required
            name="message"
            onChange={this.handleChange}
            value={this.state.message}
          />
          <button className="button" onClick={this.handleSubmit}>
            Submit
          </button>
        </div>

        <div className="social-links">
          <h3>Find us on</h3>

          <div className="links">
            {/* <div className="social-link">
              <i class="fa fa-twitter-square social-link" aria-hidden="true" />
              <p>Twitter</p>
            </div> */}

            <div
              className="social-link"
              ref={this.facebook}
              onClick={this.handleClick}
            >
              <i
                class="fa fa-facebook-official social-link"
                aria-hidden="true"
              />
              <p className="link-name">Facebook</p>
            </div>

            <div
              className="social-link"
              ref={this.instagram}
              onClick={this.handleClick}
            >
              <i class="fa fa-instagram social-link" aria-hidden="true" />
              <p className="link-name">Instagram</p>
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

            <div className="social-link">
              <i class="fa fa-whatsapp social-link" aria-hidden="true"></i>
              <p>9538887000</p>
            </div>
          </div>
        </div>

        <p className="copyright">
          © Copyright 2020 InHall Technolgies Private Limited. All rights
          reserved.
        </p>
      </div>
    );
  }
}

export default ContactUs;
