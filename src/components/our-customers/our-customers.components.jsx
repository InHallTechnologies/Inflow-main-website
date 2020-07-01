import React from "react";
import company from "../../assets/current.png";

import background from "../../assets/g10.jpeg";
import Parallax from "react-rellax";

import "./our-customers.styles.scss";

const OurCustomers = (props) => {
  return (
    <div className="our-customers-container">
      <h1 className="title">Hear from our customers</h1>
      <img className="company-logo" src={company} alt="company-logo" />
      <div className="details">
        <h2 className="company-name">InHall Technologies Private Limited</h2>
        <p className="review">
          Mollit minim cupidatat pariatur culpa ipsum sit. Pariatur aliquip
          consequat aliqua consequat. Consectetur reprehenderit adipisicing
          occaecat quis commodo dolor dolor proident ut nisi do. Lorem do
          laboris in esse commodo elit cupidatat esse velit. Velit ad ipsum
          irure ad pariatur do ea sint Lorem commodo eu deserunt consequat.
          Ipsum Lorem aute veniam nostrud ullamco irure labore do Lorem mollit
          commodo magna dolore.
        </p>
      </div>
    </div>
  );
};

export default OurCustomers;
