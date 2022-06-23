import React from "react";
import ReactDOM from "react-dom";
import Imms from "./Imms";
import "./index.scss";

const App = () => (
  <div>
    <Imms />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
