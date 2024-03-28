import React from "react";
import Profile from "./../../assets/img/profile.png";
import { useNavigate } from "react-router-dom";
import { FE_AUTH_LOGIN } from "../../constants/feEndpoint";

interface PopupProfileProps {
  showProfileOption: string;
  handleShowProfileOption: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const PopupProfile: React.FC<PopupProfileProps> = ({
  showProfileOption,
  handleShowProfileOption,
}) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate(FE_AUTH_LOGIN);
  };

  return (
    <div className="relative">
      <a
        href="#"
        className="flex items-center gap-2"
        onClick={handleShowProfileOption}
      >
        <span className="hidden md:block ">
          <h1 className="text-sm font-bold text-right">John Cena</h1>
          <h1 className="text-xs text-right">Admin</h1>
        </span>
        <img className="w-10" src={Profile} alt="Profile" />
      </a>
      <div className={`${showProfileOption} popup-profile`}>
        <ul>
          <li className="profile-li">
            <i className="bx bx-user bx-sm"></i>
            <h1>Profil Saya</h1>
          </li>
          <li className="profile-li" onClick={() => handleLogout()}>
            <i className="bx bx-log-out bx-sm"></i>
            <h1>Keluar</h1>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PopupProfile;
