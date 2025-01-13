import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div className="h-screen bg-gray-800 text-white w-64 flex flex-col">
      <div className="text-2xl font-bold p-4 border-b border-gray-700">Admin Dashboard</div>
      <nav className="flex-grow">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `block px-4 py-2 hover:bg-gray-700 ${isActive ? "bg-gray-700" : ""}`
          }
          end
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/dashboard/user"
          className={({ isActive }) =>
            `block px-4 py-2 hover:bg-gray-700 ${isActive ? "bg-gray-700" : ""}`
          }
        >
          Users
        </NavLink>
        <NavLink
          to="/dashboard/settings"
          className={({ isActive }) =>
            `block px-4 py-2 hover:bg-gray-700 ${isActive ? "bg-gray-700" : ""}`
          }
        >
          Settings
        </NavLink>
      </nav>
      <div className="p-4 border-t border-gray-700">&copy; 2025 Dashboard</div>
    </div>
  );
};

export default AdminSidebar;
