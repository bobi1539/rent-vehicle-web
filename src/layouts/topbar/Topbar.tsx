import React, { useEffect, useState } from "react";
import PopupNotif from "../../components/popup/PopupNotif";
import ButtonMenu from "../../components/button/ButtonMenu";
import PopupProfile from "../../components/popup/PopupProfile";

interface TopbarProps {
  isSidebarOpen: boolean;
  handleOpenCloseSidebar: () => void;
}

const Topbar: React.FC<TopbarProps> = ({
  isSidebarOpen,
  handleOpenCloseSidebar,
}) => {
  const [showNotif, setShowNotif] = useState<string>("hidden");
  const [showProfileOption, setShowProfileOption] = useState<string>("hidden");

  const handleShowNotif = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setShowProfileOption("hidden");
    showNotif === "hidden" ? setShowNotif("") : setShowNotif("hidden");
  };

  const handleShowProfileOption = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation();
    setShowNotif("hidden");
    showProfileOption === "hidden"
      ? setShowProfileOption("")
      : setShowProfileOption("hidden");
  };

  useEffect(() => {
    const handleClickAnywhere = () => {
      setShowNotif("hidden");
      setShowProfileOption("hidden");
    };

    document.body.addEventListener("click", handleClickAnywhere);
    return () => {
      document.body.removeEventListener("click", handleClickAnywhere);
    };
  }, []);

  return (
    <div
      className={
        isSidebarOpen
          ? "w-open-sidebar fixed z-[2000]"
          : "w-close-sidebar fixed z-[2000]"
      }
    >
      <div className="flex items-center p-4 bg-white">
        <ButtonMenu handleOpenCloseSidebar={() => handleOpenCloseSidebar()} />
        <PopupNotif showNotif={showNotif} handleShowNotif={handleShowNotif} />
        <PopupProfile
          showProfileOption={showProfileOption}
          handleShowProfileOption={handleShowProfileOption}
        />
      </div>
    </div>
  );
};

export default Topbar;
