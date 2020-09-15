import React from "react";

import truck from "../../assets/truck.svg";
import loading from "../../assets/loading.svg";
import background from "../../assets/Component 1.png";
import handshake from "../../assets/handshake.svg";
import truckIcon from "../../assets/truck-fast .svg";

import "./header.styles.scss";
import anime from "animejs";
import { withRouter } from "react-router-dom";

class Header extends React.Component {
  componentDidMount() {
    anime({
      targets: "#truck ",
      translateX: [60, 0],
      translateY: [-60, 0],

      easing: "linear",
      delay: "1500s",
      duration: "1100s",
    });

    anime({
      targets: ".simple",
      translateY: [-60, 0],
      duration: "1100s",

      easing: "spring(1, 80, 10, 0)",
    });

    anime({
      targets: ".swift",
      opacity: [0, 1],

      duration: "1000s",
      delay: "500s",
      easing: "easeInOutExpo",
    });

    anime({
      targets: ".secured",
      // translateY: [-60, 0],
      duration: "1000s",
      delay: "1000s",
      opacity: [0, 1],
      easing: "easeInOutExpo",
    });
    anime({
      targets: ".guranteed",
      translateX: [60, 0],
      opacity: [0, 1],
      duration: "1100s",
      delay: "1500s",
      easing: "easeInOutExpo",
    });

    // nav-item:hover
  }

  handleClick = (event) => {
    this.props.contactUs.current.scrollIntoView();
  };

  render() {
    return (
      <div className="header-container" ref={this.props.reference}>
        <div className="header-content">
          <div className="header-title">
            <p className="simple title">Simple </p>
            <p className="swift title"> Swift </p>
            <p className="secured title">Secured </p>
            <br />
            <p className="guranteed title">Guarenteed! </p>
          </div>
          <p className="header-content-text">
            Inflow provides smart and efficient logistics solutions for all your
            need.
          </p>
          <div className="header-button-container">
            <button
              className="header-button work-with-us"
              onClick={this.handleClick}
            >
              Work with us
              <img
                class="button-icon handhake"
                src={handshake}
                alt="handshake"
              />
            </button>

            <button className="header-button" onClick={this.handleClick}>
              Get our services
              <img class="button-icon" src={truckIcon} alt="handshake" />
            </button>
          </div>
        </div>
        <div className="illustration">
          <img id="truck" src={truck} alt="truck" />
          <img id="truck-loaders" src={loading} alt="loading" />
          <img id="background" src={background} alt="bg" />
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
