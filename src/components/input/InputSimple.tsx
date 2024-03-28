import React from "react";

interface InputSimpleProps {
  name: string;
  type: string;
  placeHolder: string;
  required?: boolean;
}

const InputSimple: React.FC<InputSimpleProps> = ({
  name,
  type,
  placeHolder,
  required,
}) => {
  return (
    <input
      className="input-primary"
      name={name}
      type={type}
      placeholder={placeHolder}
      required={required}
    />
  );
};

export default InputSimple;
