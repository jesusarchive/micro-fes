import React, { useState } from "react";
import ReactDOM from "react-dom";
import IraHeader from "./components/ira-header";
import "./index.scss";
import IraHome from "./views/ira-home";
import IraProducts from "./views/ira-products";

const App = () => {
  const [view, setView] = useState("home");
  return (
    <div className="h-screen w-full flex flex-col items-center justify-between">
      <IraHeader selectedView={view} onViewChange={setView} />
      {view === "home" ? <IraHome /> : <IraProducts />}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
