import React from "react";

interface ButtonPrimaryProps {
  label: string;
  type: "submit" | "reset" | "button";
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ label, type }) => {
  return (
    <button
      className="bg-primary rounded-md px-4 text-white py-2 w-full hover:bg-primary_hover transition-all duration-300 ease-in"
      type={type}
    >
      {label}
    </button>
  );
};

export default ButtonPrimary;
