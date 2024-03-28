import React from "react";

interface ButtonMenuProps {
  handleOpenCloseSidebar: () => void;
}

const ButtonMenu: React.FC<ButtonMenuProps> = ({ handleOpenCloseSidebar }) => {
  return (
    <button
      className="mr-auto btn-rounded-icon"
      onClick={() => handleOpenCloseSidebar()}
    >
      <i className="bx bx-menu bx-sm"></i>
    </button>
  );
};

export default ButtonMenu;
