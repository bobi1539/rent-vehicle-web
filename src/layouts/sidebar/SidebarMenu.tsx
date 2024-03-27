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
  const iconClass = `bx ${icon} bx-sm`;

  return (
    <li className={liClass}>
      <NavLink
        to={link}
        className="flex justify-start gap-2 text-gray-600 hover:text-primary"
      >
        <i className={iconClass}></i>
        {label}
      </NavLink>
    </li>
  );
};

export default SidebarMenu;
