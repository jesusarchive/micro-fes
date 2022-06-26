import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ImmsHeader from "./components/imms-header";
import ImmsHome from "./views/imms-home";
import ImmsUsers from "./views/imms-users";
import "./index.scss";

const App = () => {
  return (
    <BrowserRouter>
      <div className="h-screen w-full flex flex-col justify-between">
        <ImmsHeader />
        <Routes>
          <Route path="/" element={<ImmsHome />} />
          <Route path="/users" element={<ImmsUsers />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
