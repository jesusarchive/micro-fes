import Gnd from "gnd/Gnd";
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
        <article className="h-full w-full flex flex-row overflow-scroll">
          <SgaPortalNavbar onChange={setSelectedApp} selected={selectedApp} />

          <div className="w-full h-50 border-2">
            {selectedApp === "ira-home" && <IraHome />}
            {selectedApp === "ira-products" && <IraProducts />}
            {selectedApp === "gnd" && <Gnd />}
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
