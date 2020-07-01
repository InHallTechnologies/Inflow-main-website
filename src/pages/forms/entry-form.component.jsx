import React from "react";
import "./entry-form.styles.scss";

const EntryForm = (props) => {
  return (
    <div className="form-container">
      <h1 className="title">Yout are just one step away</h1>
      <h2 className="subtitle">Please fill the form</h2>
      <form>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Name" />
      </form>
    </div>
  );
};

export default EntryForm;
