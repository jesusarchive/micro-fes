import React from "react";
import ReactDOM from "react-dom";
import Gnd from "./Gnd";
import "./index.scss";

const App = () => (
  <div>
    <Gnd />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
