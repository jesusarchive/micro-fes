import React from "react";

const Navbar = ({ onClick }) => {
  return (
    <nav className="flex flex-col w-1/6 p-2 text-pink-200 capitalize border-2">
      <button className="hover:text-red-600" onClick={(e) => onClick("ira", e)}>
        IRA
      </button>
      <button className="hover:text-red-600" onClick={(e) => onClick("gnd", e)}>
        GND
      </button>
      <button className="hover:text-red-600" onClick={(e) => onClick("mms", e)}>
        MMS
      </button>
    </nav>
  );
};

export default Navbar;
