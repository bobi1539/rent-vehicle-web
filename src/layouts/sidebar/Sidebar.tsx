import React from "react";
import TitleLogo from "../../components/title/TitleLogo";
import SidebarMenu from "./SidebarMenu";
import {
  FE_CATEGORY,
  FE_DASHBOARD,
  FE_ORDER,
  FE_PRODUCT,
  FE_REPORT,
  FE_USER,
} from "../../constants/feEndpoint";

interface SidebarMenus {
  key: number;
  label: string;
  icon: string;
  link: string;
}

const Sidebar: React.FC = () => {
  const { pathname } = location;
  console.log(pathname);
  const sidebarMenus: SidebarMenus[] = [
    { key: 1, label: "Dashboard", icon: "bx-tachometer", link: FE_DASHBOARD },
    { key: 2, label: "Produk", icon: "bx-box", link: FE_PRODUCT },
    { key: 3, label: "Kategori", icon: "bx-list-ul", link: FE_CATEGORY },
    { key: 4, label: "User", icon: "bx-user", link: FE_USER },
    { key: 5, label: "Order", icon: "bx-cart", link: FE_ORDER },
    { key: 6, label: "Laporan", icon: "bx-file", link: FE_REPORT },
  ];

  return (
    <div
      className="fixed bg-white h-screen w-56 top-0 left-0 overflow-x-hidden 
           transition-all duration-300 ease-in"
    >
      <div className="my-5">
        <TitleLogo
          title="My Company"
          imgClass="w-10 -mt-1"
          titleSize="text-xl"
        />
      </div>
      <ul className="mt-16">
        {sidebarMenus.map((menu) => (
          <SidebarMenu
            key={menu.key}
            label={menu.label}
            icon={menu.icon}
            link={menu.link}
            liClass={
              pathname === "/" && menu.label === "Dashboard"
                ? "my-3 ms-2 sidebar-active"
                : pathname.includes(menu.link)
                ? "my-3 ms-2 sidebar-active"
                : "my-3 ms-7"
            }
          />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
