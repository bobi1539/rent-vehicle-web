import React from "react";

interface ButtonPrimaryProps {
  label: string;
  type: "submit" | "reset" | "button";
  width?: string;
  icon?: string;
  padding?: string;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  label,
  type,
  width,
  icon,
  padding,
}) => {
  return (
    <button
      className={`flex items-center justify-center gap-1 bg-primary text-white ${width} rounded-md ${padding} hover:bg-primary_hover simple-transition`}
      type={type}
    >
      <i className={`bx bx-${icon} bx-sm`}></i>
      {label}
    </button>
  );
};

ButtonPrimary.defaultProps = {
  padding: "py-2 px-4",
};

export default ButtonPrimary;
