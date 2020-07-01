import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";
import EntryForm from "./pages/forms/entry-form.component";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/fill-form" component={EntryForm} />
      </Switch>
    </div>
  );
}

export default App;
