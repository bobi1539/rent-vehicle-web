import React from "react";

interface ButtonOutlinePrimaryProps {
  label?: string;
  type: "submit" | "reset" | "button";
  icon?: string;
}

const ButtonOutlinePrimary: React.FC<ButtonOutlinePrimaryProps> = ({
  label,
  type,
  icon,
}) => {
  return (
    <button className="btn-outline-primary w-fit px-4" type={type}>
      <i className={`bx bx-${icon} bx-sm`}></i>
      {label}
    </button>
  );
};

export default ButtonOutlinePrimary;
