import React from "react";
import logo from "../../assets/logowhite.png";
import "./navigation.styles.scss";

const Navigation = (props) => {
  return (
    <div className="navigation-container">
      <img className="logo-image" src={logo} alt="inflow-logistiks" />
      <nav className="nav-container">
        <a className="nav-item" href="#">
          Home
        </a>
        <a className="nav-item" href="#">
          Services
        </a>
        <a className="nav-item" href="#">
          Customers
        </a>
        <a className="nav-item" href="#">
          Reach Us
        </a>
      </nav>
    </div>
  );
};

export default Navigation;
