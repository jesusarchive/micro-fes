import GndBlog from "gnd/GndBlog";
import GndHome from "gnd/GndHome";
import Imms from "imms/Imms";
import IraHome from "ira/IraHome";
import IraProducts from "ira/IraProducts";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import SgaPortalFooter from "./components/sga-portal-footer";
import SgaPortalHeader from "./components/sga-portal-header";
import SgaPortalNavbar from "./components/sga-portal-navbar";
import "./index.scss";
import SgaPortalAuth from "./views/sga-portal-auth/sga-portal-auth";

const App = () => {
  const [auth, setAuth] = useState(true);
  const [selectedApp, setSelectedApp] = useState("ira-home");

  return (
    <div className="h-screen w-full flex flex-col bg-black text-white">
      <SgaPortalHeader auth={auth} onExit={() => setAuth(false)} />

      {!auth ? (
        <SgaPortalAuth onAuth={() => setAuth(!auth)} />
      ) : (
        <article className="h-full w-full flex overflow-hidden">
          <SgaPortalNavbar onChange={setSelectedApp} selected={selectedApp} />

          <div className="w-10/12 h-50 border-2">
            {/* IRA */}
            {selectedApp === "ira-home" && <IraHome />}
            {selectedApp === "ira-products" && <IraProducts />}
            {/* GND */}
            {selectedApp === "gnd-home" && <GndHome />}
            {selectedApp === "gnd-blog" && <GndBlog />}
            {/* IMMS */}
            {selectedApp === "imms" && <Imms />}
          </div>
        </article>
      )}

      <SgaPortalFooter />
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
