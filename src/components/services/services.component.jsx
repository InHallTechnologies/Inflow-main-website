import React from "react";
import "./services.styles.scss";

import background from "../../assets/g10.jpg";
import Parallax from "react-rellax";

import individual from "../../assets/3683242 1 (1).svg";
import business from "../../assets/3683242 2 (1).svg";
import OurServices from "../our-services/our-services.components";

const Services = (props) => {
  const services = [
    // { type: "For Indivisual", image: individual, key: 0 },
    { type: "For Business", image: business, key: 1 },
  ];

  return (
    <div className="services-container">
      <Parallax className="background-parallax" speed={-4} percentage={0.5}>
        <img className="background-grid" src={background} alt="background" />
      </Parallax>

      <h1 className="section-title">Our Services</h1>
      <div className="services-list">
        {services.map((type) => (
          <OurServices img={type.image} type={type.type} key={type.key} />
        ))}
      </div>
    </div>
  );
};

export default Services;
