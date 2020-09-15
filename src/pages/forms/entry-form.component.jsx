import React from "react";
import "./entry-form.styles.scss";

const EntryForm = (props) => {
  return (
    <div className="form-container">
      <h1 className="title">Please fill in the form and continue</h1>

      <form className="form">
        <input className="input" type="text" placeholder="Name" />
        <input className="input" type="text" placeholder="Phone Number" />
        <input className="input" type="email" placeholder="Email Id" />
        <input
          className="input"
          type="text"
          placeholder="Alternate Phone Number"
        />
        <input className="input" type="text" placeholder="Address" />
        <input className="input" type="text" placeholder="Landmark" />
        <input className="input" type="text" placeholder="City" />
        <input className="input" type="text" placeholder="State" />
        <input className="input" type="number" placeholder="Pincode" />
      </form>
    </div>
  );
};

export default EntryForm;
