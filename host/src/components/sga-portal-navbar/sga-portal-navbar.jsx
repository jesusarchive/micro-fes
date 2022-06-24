import React from "react";
import { classNames } from "../../utils";

const SgaPortalNavbar = ({ selected = "ira", onChange }) => {
  const apps = ["ira", "gnd", "imms"];

  return (
    <nav className="flex flex-col w-1/6 p-2 text-pink-200 border-2">
      {apps.map((app, i) => (
        <button
          key={`sga-portal-navbar-button--${i}`}
          className={classNames(
            "uppercase",
            "text-left",
            "text-xl",
            "p-2",
            "hover:text-red-600",
            selected === app && "text-indigo-400"
          )}
          onClick={() => onChange(app)}
        >
          {app}
        </button>
      ))}
    </nav>
  );
};

export default SgaPortalNavbar;
