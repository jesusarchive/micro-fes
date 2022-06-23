import React from "react";

const classNames = (...classNames) => {
  return classNames.filter(Boolean).join(" ");
};

const Navbar = ({ selected = "ira", onChange }) => {
  const apps = ["ira", "gnd", "imms"];

  return (
    <nav className="flex flex-col w-1/6 p-2 text-pink-200 border-2">
      {apps.map((app) => (
        <button
          className={classNames(
            "uppercase",
            "text-left",
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

export default Navbar;
