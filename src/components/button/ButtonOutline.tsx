import React from "react";

interface ButtonOutlineProps {
  label?: string;
  type: "submit" | "reset" | "button";
  icon?: string;
  padding?: string;
  width?: string;
  variant: string;
}

const ButtonOutline: React.FC<ButtonOutlineProps> = ({
  label,
  type,
  icon,
  padding,
  width,
  variant,
}) => {
  return (
    <button
      type={type}
      className={`btn-outline-${variant} ${padding} ${width}`}
    >
      <i className={`bx ${icon}`}></i>
      {label}
    </button>
  );
};

ButtonOutline.defaultProps = {
  padding: "p-1",
};

export default ButtonOutline;
