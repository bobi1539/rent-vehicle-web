import React from "react";
import { NavLink } from "react-router-dom";

interface SidebarMenuProps {
  label: string;
  icon: string;
  link: string;
  liClass: string;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({
  label,
  icon,
  link,
  liClass,
}) => {
  return (
    <li className={liClass}>
      <NavLink
        to={link}
        className="flex justify-start gap-2 text-gray-600 hover:text-primary"
      >
        <i className={`bx ${icon} bx-sm`}></i>
        {label}
      </NavLink>
    </li>
  );
};

export default SidebarMenu;
