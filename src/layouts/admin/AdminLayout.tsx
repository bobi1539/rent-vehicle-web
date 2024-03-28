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
      <div className="overflow-hidden">
        <Sidebar isSidebarOpen={isSidebarOpen} />
        <Topbar
          isSidebarOpen={isSidebarOpen}
          handleOpenCloseSidebar={() => handleOpenCloseSidebar()}
        />
        <main
          className={isSidebarOpen ? "md:w-open-sidebar" : "md:w-close-sidebar"}
        >
          <div className="m-6 mt-24">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
