import React from "react";
import "./services.styles.scss";

import background from "../../assets/g10.jpg";
import Parallax from "react-rellax";

import packing from "../../assets/parcel.svg";
import business from "../../assets/3683242 2 (1).svg";
import OurServices from "../our-services/our-services.components";

const Services = (props) => {
  const services = [
    {
      type: "For Packing",
      image: packing,
      key: 0,
      message:
        "We provide door step packaging service solution to both individual and company with industry at par material at a genuine and affordable rate. All over Banglore Live video call available, while maintaining all WHO precautions and safety measures. Please contact for more details and service.",
    },
    {
      type: "For Business",
      image: business,
      key: 1,
      message:
        "Logistics requires planning, carrying out, and management of goods, services, and information from the point of origin to the point of consumption. We take care of the fuzz so that you get a swift delivery every time.",
    },
  ];

  const handleClick = (event) => {
    this.props.contactUs.current.scrollIntoView();
  };

  return (
    <div className="services-container" ref={props.reference}>
      <Parallax className="background-parallax" speed={-4} percentage={0.5}>
        <img className="background-grid" src={background} alt="background" />
      </Parallax>

      <h1 className="section-title">Our Services</h1>
      <div className="services-list">
        {services.map((type) => (
          <OurServices
            img={type.image}
            type={type.type}
            key={type.key}
            handleClick={handleClick}
            message={type.message}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
