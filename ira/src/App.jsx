import React from "react";
import ReactDOM from "react-dom";
import Ira from "./Ira";
import "./index.scss";

const App = () => (
  <div>
    <Ira />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
