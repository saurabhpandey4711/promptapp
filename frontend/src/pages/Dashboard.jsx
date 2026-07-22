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

function Dashboard() {
  const [prompts, setPrompts] = useState([]);

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

    loadPrompts();
  }, []);

  // const loadPrompts = async () => {
  //   try {
  //     // अभी testing के लिए user_id = 1
  //     const data = await getUserPrompts(1);
  //     setPrompts(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

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