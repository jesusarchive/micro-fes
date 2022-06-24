import React from "react";
import { classNames } from "../../utils";

const SgaPortalButton = ({ children, className, onClick }) => {
  return (
    <button
      className={classNames(
        className,
        "uppercase",
        "text-left",
        "text-xl",
        "p-2",
        "hover:text-red-600"
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default SgaPortalButton;
