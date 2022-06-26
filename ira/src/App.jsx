import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IraHeader from "./components/ira-header";
import IraHome from "./views/ira-home";
import IraProducts from "./views/ira-products";
import "./index.scss";

const App = () => {
  return (
    <BrowserRouter>
      <div className="h-screen w-full flex flex-col justify-between">
        <IraHeader />
        <Routes>
          <Route path="/" element={<IraHome />} />
          <Route path="/products" element={<IraProducts />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
