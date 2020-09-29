import React from "react";
import "./trusted-by.styles.scss";
import { TRUST_LIST } from "./trust-list";
import animejs from "animejs";

const List = (icon, name, key, url) => (
  <div className="trusted-by-arch">
    <img
      className="trusted-by-img"
      src={icon}
      alt={name}
      key={key}
      onClick={() => {
        window.open(url, "_blank");
      }}
    />
  </div>
);

const TrustedBy = (props) => {
  return (
    <div className="trusted-by-container">
      <h1 className="section-title">Trusted By</h1>
      <div className="trust-list">
        {TRUST_LIST.map((item) =>
          List(item.icon, item.name, item.key, item.url)
        )}
      </div>
    </div>
  );
};

export default TrustedBy;
