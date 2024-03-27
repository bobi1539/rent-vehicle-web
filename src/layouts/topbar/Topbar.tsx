import React, { useState } from "react";
import Profile from "./../../assets/img/profile.png";
import PopupNotif from "../../components/popup/PopupNotif";

interface TopbarProps {
  handleOpenCloseSidebar: () => void;
}

const Topbar: React.FC<TopbarProps> = ({ handleOpenCloseSidebar }) => {
  const [showNotif, setShowNotif] = useState<string>("hidden");

  const handleShowNotif = () => {
    showNotif === "hidden" ? setShowNotif("") : setShowNotif("hidden");
  };

  const handleShowProfile = () => {
    setShowNotif("hidden");
  };

  return (
    <div className="flex items-center p-4 bg-white">
      <button
        className="text-gray-600 mr-auto ms-3 hover:text-primary"
        onClick={() => handleOpenCloseSidebar()}
      >
        <i className="bx bx-menu bx-sm"></i>
      </button>
      <PopupNotif
        showNotif={showNotif}
        handleShowNotif={() => handleShowNotif()}
      />
      <a
        href="#"
        className="flex items-center gap-2"
        onClick={() => handleShowProfile()}
      >
        <span className="hidden md:block ">
          <h1 className="text-sm font-bold text-right">John Cena</h1>
          <h1 className="text-xs text-right">Admin</h1>
        </span>
        <img className="w-10" src={Profile} alt="Profile" />
      </a>
    </div>
  );
};

export default Topbar;
