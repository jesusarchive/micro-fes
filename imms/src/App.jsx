import React, { useState } from "react";
import ReactDOM from "react-dom";
import ImmsHeader from "./components/imms-header";
import "./index.scss";
import ImmsHome from "./views/imms-home";

const App = () => {
  const [view, setView] = useState("home");

  return (
    <div className="h-screen w-full flex flex-col items-center justify-between">
      <ImmsHeader selectedView={view} onViewChange={setView} />
      {view === "home" ? <ImmsHome /> : null}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
