import React from "react";
import "./our-services.styles.scss";

const OurServices = (props) => {
  return (
    <div className="our-service-container">
      <img className="image" src={props.img} alt="individual-delivery" />
      <p className="type-text">
        Aliqua eiusmod ad et velit qui veniam. Deserunt id proident pariatur
        adipisicing exercitation voluptate eiusmod minim qui velit id.
        Reprehenderit ad eiusmod nisi laborum excepteur dolor minim.Cupidatat in
        fugiat dolor commodo quis id ad tempor culpa sunt sint. Deserunt ad non
        duis culpa. Elit nulla cillum laborum aliqua tempor Lorem fugiat id
        aliquip deserunt do aliquip. Laborum culpa anim ipsum nulla occaecat
        mollit commodo incididunt esse id.
      </p>
    </div>
  );
};

export default OurServices;
