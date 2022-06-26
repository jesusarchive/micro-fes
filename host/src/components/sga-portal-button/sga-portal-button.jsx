import React from "react";
import { classNames } from "../../utils";

const SgaPortalButton = ({ children, className, onClick }) => {
  return (
    <button
      className={classNames(
        className,
        "w-30 h-5 uppercase text-left text-sm p-4 hover:text-red-500 flex items-center justify-around rounded border-2 bg-white hover:bg-black shadow hover:invert-0"
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default SgaPortalButton;
