import React from "react";
import GoogleLogo from "./../../assets/img/google_logo.png";

interface ButtonIconGoogleProps {
  label: string;
  type: "submit" | "reset" | "button";
}

const ButtonIconGoogle: React.FC<ButtonIconGoogleProps> = ({ label, type }) => {
  return (
    <button
      type={type}
      className="w-full border border-gray-400 rounded-md py-2 text-gray-600 
    relative hover:border-primary transition-all duration-300 ease-in"
    >
      <img
        src={GoogleLogo}
        alt="google logo"
        className="w-5 h-5 absolute top-[10px] left-10"
      />
      {label}
    </button>
  );
};

export default ButtonIconGoogle;
