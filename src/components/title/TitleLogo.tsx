import React from "react";
import Logo from "./../../assets/img/logo.png";

interface TitleLogoProps {
  title: string;
  imgClass?: string;
  titleSize?: string;
}

const TitleLogo: React.FC<TitleLogoProps> = ({
  title,
  imgClass,
  titleSize,
}) => {
  const titleClassName = `font-bold ${titleSize} text-primary`;
  return (
    <div className="flex justify-center gap-4">
      <img className={imgClass} src={Logo} alt="company logo" />
      <h1 className={titleClassName}>{title}</h1>
    </div>
  );
};

TitleLogo.defaultProps = {
  imgClass: "w-12 -mt-2",
  titleSize: "text-2xl",
};

export default TitleLogo;
