import { Outlet } from "react-router-dom";
import AdminHeader from "../../../Common/AdminHeader";
import AdminSidebar from "../../../Common/AdminSidebar";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main content area */}
      <div className="flex-grow flex flex-col">
        {/* Header */}
        <AdminHeader />

        {/* Dynamic child route content */}
        <div className="flex-grow p-4 bg-gray-100">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
