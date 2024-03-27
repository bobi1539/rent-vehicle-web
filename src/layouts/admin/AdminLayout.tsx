import React, { ReactNode, useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import Topbar from "../topbar/Topbar";

const AdminLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const handleOpenCloseSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-gray-100">
      <div className="flex h-screen overflow-hidden">
        <Sidebar isSidebarOpen={isSidebarOpen} />
        <div className={isSidebarOpen ? "w-open-sidebar" : "w-close-sidebar"}>
          <Topbar handleOpenCloseSidebar={() => handleOpenCloseSidebar()} />
          <main>
            <div className="left-56 top-0">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
