import React, { ReactNode } from "react";
import Sidebar from "../sidebar/Sidebar";

const AdminLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="bg-gray-200 w-screen h-screen">
      <Sidebar />
      <main>
        <div className="fixed left-56 top-0">{children}</div>
      </main>
    </div>
  );
};

export default AdminLayout;
