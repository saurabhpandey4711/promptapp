import { useEffect, useState } from "react";
import AdminSidebar from "../components/admin/AdminSidebar";
import PromptsTable from "../components/admin/PromptsTable";

import {
  getAllPrompts,
  deletePrompt,
} from "../services/adminService";

function AdminPrompts() {

  const [prompts, setPrompts] = useState([]);
  const [searchPrompt, setSearchPrompt] = useState("");

  const loadPrompts = async () => {
    try {
      const res = await getAllPrompts();
      setPrompts(res.prompts);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadPrompts();
  }, []);

  const handlePromptDelete = async (id) => {

    if (!window.confirm("Delete this prompt?")) return;

    try {

      const res = await deletePrompt(id);

      alert(res.message);

      loadPrompts();

    } catch (err) {

      alert(
        err.response?.data?.message ||
        "Delete Failed"
      );

    }

  };

  return (

    <div className="flex">

      <AdminSidebar />

      <div className="flex-1 bg-[#0B0B14] min-h-screen p-8">

        <h1 className="text-4xl text-white font-bold mb-8">
          📝 Prompt Management
        </h1>

        <PromptsTable
          prompts={prompts}
          searchPrompt={searchPrompt}
          setSearchPrompt={setSearchPrompt}
          handlePromptDelete={handlePromptDelete}
        />

      </div>

    </div>

  );

}

export default AdminPrompts;