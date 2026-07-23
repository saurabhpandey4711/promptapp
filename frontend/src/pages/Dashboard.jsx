// function Dashboard() {
//   return (
//     <div className="min-h-screen bg-[#0B0B14] text-white flex justify-center items-center">
//       <h1 className="text-4xl font-bold">
//         Welcome to Dashboard 🚀
//       </h1>
//     </div>
//   );
// }

// export default Dashboard;


import { useEffect, useState } from "react";
import { getUserPrompts } from "../services/promptService";
import DashboardPromptCard from "../components/DashboardPromptCard";
import { deletePrompt } from "../services/promptService";
import { toast } from "react-toastify";
import { getDashboardStats } from "../services/promptService";

function Dashboard() {
  const [prompts, setPrompts] = useState([]);



  const [stats, setStats] = useState({
  totalPrompts: 0,
  totalViews: 0,
  totalCopies: 0,
  });



  useEffect(() => {

      const loadPrompts = async () => {
    try {
      // अभी testing के लिए user_id = 1
      const data = await getUserPrompts(1);
      setPrompts(data);
    } catch (err) {
      console.log(err);
    }
  };

  const loadStats = async () => {

  try {

    const res = await getDashboardStats(1);

    setStats(res.stats);

  } catch (err) {

    console.log(err);

  }

};

    loadPrompts();
    loadStats();
  }, []);

 

const handleDelete = async (id) => {

  const confirmDelete = window.confirm(
    "Are you sure you want to delete this prompt?"
  );

  if (!confirmDelete) return;

  try {
    await deletePrompt(id);

    setPrompts((prev) =>
      prev.filter((prompt) => prompt.id !== id)
    );

    toast.success("Prompt Deleted Successfully");
  } catch (err) {
    console.log(err);
    toast.error("Delete Failed");
  }
};



  return (
    <div className="min-h-screen bg-[#0B0B14] p-10">

<div className="grid grid-cols-3 gap-6 mb-8">

  <div className="bg-[#181825] p-6 rounded-xl text-center">
    <h2 className="text-4xl font-bold text-purple-400">
      {stats.totalPrompts}
    </h2>
    <p className="text-gray-400 mt-2">
      Total Prompts
    </p>
  </div>

  <div className="bg-[#181825] p-6 rounded-xl text-center">
    <h2 className="text-4xl font-bold text-blue-400">
      {stats.totalViews}
    </h2>
    <p className="text-gray-400 mt-2">
      Total Views
    </p>
  </div>

  <div className="bg-[#181825] p-6 rounded-xl text-center">
    <h2 className="text-4xl font-bold text-pink-400">
      {stats.totalCopies}
    </h2>
    <p className="text-gray-400 mt-2">
      Total Copies
    </p>
  </div>

</div>

















      <h1 className="text-4xl text-white font-bold mb-10">
        My Prompts
      </h1>

      {prompts.length === 0 ? (
        <p className="text-gray-400">
          No prompts added yet.
        </p>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {prompts.map((prompt) => (
            <DashboardPromptCard
               key={prompt.id}
               prompt={prompt}
               onDelete={handleDelete}
            />
          ))}
        </div>
      )}

    </div>
  );
}

export default Dashboard;