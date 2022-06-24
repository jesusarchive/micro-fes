import React, { useState } from "react";
import ReactDOM from "react-dom";
import GndHeader from "./components/gnd-header";
import "./index.scss";
import GndBlog from "./views/gnd-blog";
import GndHome from "./views/gnd-home";

const App = () => {
  const [view, setView] = useState("blog");

  return (
    <div className="h-screen w-full flex flex-col items-center justify-between">
      <GndHeader selectedView={view} onViewChange={setView} />
      {view === "home" ? <GndHome /> : <GndBlog />}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
