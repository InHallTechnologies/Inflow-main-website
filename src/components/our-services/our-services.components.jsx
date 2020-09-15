import React from "react";
import "./our-services.styles.scss";

const OurServices = (props) => {
  return (
    <div className="our-service-container" onClick={props.handleClick}>
      <img className="image" src={props.img} alt="individual-delivery" />
      <h2 className="type-text">{props.type}</h2>
      <p className="type-text">{props.message}</p>
    </div>
  );
};

export default OurServices;
