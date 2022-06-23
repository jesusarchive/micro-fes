import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Ira from "remote/Ira";
import Gnd from "remote2/Gnd";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import "./index.scss";

const App = () => {
  const [selectedApp, setSelectedApp] = useState("ira");
  return (
    <div className="h-screen w-full flex flex-col bg-black text-white">
      <Header />

      <article className="h-full w-full flex flex-row">
        <Navbar onChange={setSelectedApp} selected={selectedApp} />

        <div className="w-full h-50 border-2">
          {selectedApp === "ira" && <Ira />}
          {selectedApp === "gnd" && <Gnd />}
        </div>
      </article>

      <Footer />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("app")
);
