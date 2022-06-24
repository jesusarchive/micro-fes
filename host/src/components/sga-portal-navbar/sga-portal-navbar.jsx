import React from "react";
import { classNames } from "../../utils";
import SgaPortalButton from "../sga-portal-button";

const appsMock = [
  { id: "ira", name: "ira", views: ["home", "products"] },
  { id: "gnd", name: "gnd", views: ["home", "blog"] },
  { id: "imms", name: "imms" },
];

const SgaPortalNavbar = ({ selected = "ira-home", onChange }) => {
  return (
    <nav className="flex flex-col w-1/6 p-2 text-pink-200 border-2">
      <h1 className="text-white text-bold text-xl p-5">APPS</h1>
      {appsMock.map(({ name, views }, i) => (
        <div
          className="flex flex-col items-start p-2"
          key={`app-group--${name}`}
        >
          <span className="text-yellow-100 p-2 capitalize text-xl">{name}</span>
          {!views && (
            <SgaPortalButton
              className={classNames(selected === name && "text-indigo-400")}
              onClick={() => onChange(name)}
            >
              {name}
            </SgaPortalButton>
          )}
          {views && (
            <>
              {views.map((view) => {
                const nv = `${name}-${view}`;
                return (
                  <SgaPortalButton
                    key={`sga-portal-navbar-button--${nv}--${i}`}
                    className={classNames(selected === nv && "text-indigo-400")}
                    onClick={() => onChange(nv)}
                  >
                    {view}
                  </SgaPortalButton>
                );
              })}
            </>
          )}
        </div>
      ))}
    </nav>
  );
};

export default SgaPortalNavbar;
