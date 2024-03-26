import React from "react";
import Logo from "./../../assets/img/logo.png";

interface TitleLogoProps {
  title: string;
}

const TitleLogo: React.FC<TitleLogoProps> = ({ title }) => {
  return (
    <div className="flex justify-center">
      <img className="w-12 me-2 -mt-2" src={Logo} alt="company logo" />
      <h1 className="font-bold text-center text-2xl text-primary">{title}</h1>
    </div>
  );
};

export default TitleLogo;
