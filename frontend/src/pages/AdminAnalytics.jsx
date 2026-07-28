import { useEffect, useState } from "react";
import AdminSidebar from "../components/admin/AdminSidebar";
import DashboardStats from "../components/admin/DashboardStats";
import { getDashboardStats } from "../services/adminService";

function AdminAnalytics() {

  const [stats, setStats] = useState({
    totalUsers: 0,
    totalPrompts: 0,
    totalLikes: 0,
    totalViews: 0,
  });

  const loadStats = async () => {
    try {

      const res = await getDashboardStats();

      setStats(res.stats);

    } catch (err) {

      console.log(err);

    }
  };

  useEffect(() => {
    loadStats();
  }, []);

  return (

    <div className="flex">

      <AdminSidebar />

      <div className="flex-1 bg-[#0B0B14] min-h-screen p-8">

        <h1 className="text-4xl text-white font-bold mb-8">
          📊 Analytics
        </h1>

        <DashboardStats stats={stats} />

      </div>

    </div>

  );

}

export default AdminAnalytics;