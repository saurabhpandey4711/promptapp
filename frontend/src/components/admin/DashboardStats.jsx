import {
  FaUsers,
  FaImage,
  FaHeart,
  FaEye,
} from "react-icons/fa";

import StatCard from "./StatCard";

function DashboardStats({ stats }) {

  return (

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

      <StatCard
        title="Total Users"
        value={stats.totalUsers}
        icon={<FaUsers />}
      />

      <StatCard
        title="Total Prompts"
        value={stats.totalPrompts}
        icon={<FaImage />}
      />

      <StatCard
        title="Total Likes"
        value={stats.totalLikes}
        icon={<FaHeart />}
      />

      <StatCard
        title="Total Views"
        value={stats.totalViews}
        icon={<FaEye />}
      />

    </div>

  );

}

export default DashboardStats;