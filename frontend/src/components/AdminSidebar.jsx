import { Link, useLocation } from "react-router-dom";
import {
  FaUsers,
  FaImages,
  FaChartBar,
  FaHome,
  FaSignOutAlt,
  FaTags,
} from "react-icons/fa";

function AdminSidebar() {
  const location = useLocation();

  const menus = [
    {
      name: "Dashboard",
      icon: <FaHome />,
      path: "/admin",
    },
    {
      name: "Users",
      icon: <FaUsers />,
      path: "/admin/users",
    },
    {
      name: "Prompts",
      icon: <FaImages />,
      path: "/admin/prompts",
    },
    {
      name: "Categories",
      icon: <FaTags />,
      path: "/admin/categories",
    },
    {
      name: "Analytics",
      icon: <FaChartBar />,
      path: "/admin/analytics",
    },
  ];

  return (
    <div className="w-64 min-h-screen bg-[#151521] text-white p-6">

      <h1 className="text-2xl font-bold mb-10">
        PromptVerse
      </h1>

      <div className="space-y-3">

        {menus.map((menu) => (

          <Link
            key={menu.path}
            to={menu.path}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
              location.pathname === menu.path
                ? "bg-purple-600"
                : "hover:bg-[#222233]"
            }`}
          >
            {menu.icon}

            {menu.name}

          </Link>

        ))}

      </div>

      <button className="flex items-center gap-3 mt-10 px-4 py-3 rounded-lg hover:bg-red-600 w-full">

        <FaSignOutAlt />

        Logout

      </button>

    </div>
  );
}

export default AdminSidebar;