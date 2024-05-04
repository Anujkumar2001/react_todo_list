import React from "react";
import "../../style/button.css";
const Button = ({ children,className,onClick} ) => {
  return (
    <button
      onClick={onClick}
      className={`custom-button ${className }`}
    >
      {children}
    </button>
  );
};

export default Button;
