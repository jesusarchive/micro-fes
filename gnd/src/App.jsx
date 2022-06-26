import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GndHeader from "./components/gnd-header";
import GndHome from "./views/gnd-home";
import GndBlog from "./views/gnd-blog";
import "./index.scss";

const App = () => {
  return (
    <BrowserRouter>
      <div className="h-screen w-full flex flex-col justify-between">
        <GndHeader />
        <Routes>
          <Route path="/" element={<GndHome />} />
          <Route path="/blog" element={<GndBlog />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
