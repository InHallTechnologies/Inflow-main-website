import React, { useRef } from "react";
import logo from "../../assets/logowhite.png";
import menuIcon from "../../assets/menu.svg";
import close from "../../assets/close.svg";
import "./navigation.styles.scss";
import anime from "animejs";

const Navigation = (props) => {
  const menu = useRef(null);
  const handleHamClick = (event) => {
    console.log(" I was called");
    if (window.matchMedia("(max-width: 1200px)")) {
      if (menu.current.style.display === "none") {
        menu.current.style.display = "flex";
        anime({
          targets: ".nav-container",
          translateX: [60, 0],
          opacity: [0, 1],
          duration: "500s",

          easing: "easeInOutExpo",
        });
      } else {
        menu.current.style.display = "none";
      }
    }
  };

  return (
    <div className="navigation-container">
      <img className="logo-image" src={logo} alt="inflow-logistiks" />
      <img
        className="ham-menu"
        src={menuIcon}
        alt="ham-menu"
        onClick={handleHamClick}
      />
      <nav className="nav-container" ref={menu}>
        <img
          className="close-menu"
          src={close}
          alt="ham-menu"
          onClick={handleHamClick}
        />
        <p className="nav-item first-nav" href="#">
          Home
        </p>
        <p
          className="nav-item"
          onClick={() => {
            props.services.current.scrollIntoView();
            if (!window.matchMedia("(max-width: 1200px)")) {
              menu.current.style.display = "none";
            }
          }}
        >
          Services
        </p>
        {/* <p
          className="nav-item"
          onClick={() => {
            props.customers.current.scrollIntoView();
            menu.current.style.display = "none";
          }}
        >
          Customers
        </p> */}
        <p
          className="nav-item"
          onClick={() => {
            props.contactUs.current.scrollIntoView();
            if (!window.matchMedia("(max-width: 1200px)")) {
              menu.current.style.display = "none";
            }
          }}
        >
          Reach Us
        </p>
      </nav>
    </div>
  );
};

export default Navigation;
