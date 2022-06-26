import GndBlog from "gnd/GndBlog";
import GndHome from "gnd/GndHome";
import ImmsHome from "imms/ImmsHome";
import ImmsUsers from "imms/ImmsUsers";
import IraHome from "ira/IraHome";
import IraProducts from "ira/IraProducts";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import SgaPortalFooter from "./components/sga-portal-footer";
import SgaPortalHeader from "./components/sga-portal-header";
import SgaPortalAuth from "./views/sga-portal-auth/sga-portal-auth";
import "./index.scss";

const App = () => {
  const [auth, setAuth] = useState(false);

  return (
    <BrowserRouter>
      <div className="h-screen w-full flex flex-col justify-between">
        <SgaPortalHeader auth={auth} onExit={() => setAuth(false)} />

        <article className="h-full w-full inline-flex overflow-hidden">
          <div className="h-full w-full">
            <Routes>
              <Route
                path="/login"
                element={<SgaPortalAuth onAuth={() => setAuth(true)} />}
              />
              <Route path="/home" element={<IraHome />} />
              <Route path="/ira-home" element={<IraHome />} />
              <Route path="/ira-home" element={<IraHome />} />
              <Route path="/ira-products" element={<IraProducts />} />
              <Route path="/gnd-home" element={<GndHome />} />
              <Route path="/gnd-blog" element={<GndBlog />} />
              <Route path="/imms-home" element={<ImmsHome />} />
              <Route path="/imms-users" element={<ImmsUsers />} />
            </Routes>
          </div>
        </article>

        <SgaPortalFooter />
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("app")
);
