import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUsers,
  FaFileAlt,
  FaChartBar,
} from "react-icons/fa";

function AdminSidebar() {
  return (
    <div className="w-64 min-h-screen bg-[#181825] text-white p-6">

      <h1 className="text-2xl font-bold mb-10">
        PromptVerse
      </h1>

      <nav className="space-y-3">

        <NavLink
          to="/admin"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#2A2A40]"
        >
          <FaHome />
          Dashboard
        </NavLink>

        <NavLink
          to="/admin/users"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#2A2A40]"
        >
          <FaUsers />
          Users
        </NavLink>

        <NavLink
          to="/admin/prompts"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#2A2A40]"
        >
          <FaFileAlt />
          Prompts
        </NavLink>

        <NavLink
          to="/admin/analytics"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#2A2A40]"
        >
          <FaChartBar />
          Analytics
        </NavLink>

      </nav>

    </div>
  );
}

export default AdminSidebar;