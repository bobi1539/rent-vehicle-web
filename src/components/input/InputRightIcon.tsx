import React from "react";

interface InputRightIconProps {
  label: string;
  name: string;
  type: string;
  placeHolder: string;
  required: boolean;
  icon: string;
}

const InputRightIcon: React.FC<InputRightIconProps> = ({
  label,
  name,
  type,
  placeHolder,
  required,
  icon,
}) => {
  const classNameIcon = `bx bx-${icon} me-2 bx-sm opacity-30 absolute right-1 top-3`;
  return (
    <div className="my-4">
      <label className="block mb-2 text-gray-600" htmlFor={name}>
        {label}
      </label>
      <div className="relative">
        <input
          className="border border-gray-400 rounded-md h-12 w-full px-4 focus:border-primary focus:outline-none text-gray-600"
          type={type}
          name={name}
          id={name}
          placeholder={placeHolder}
          required={required}
          autoComplete="off"
        />
        <i className={classNameIcon}></i>
      </div>
    </div>
  );
};

export default InputRightIcon;