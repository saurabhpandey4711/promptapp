import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import {
  getPromptById,
  updatePrompt,
} from "../services/promptService";

function EditPrompt() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    prompt_text: "",
    image: "",
    category_id: "",
  });

  useEffect(() => {

    const loadPrompt = async () => {
    try {
      const data = await getPromptById(id);

      setFormData({
        title: data.title,
        description: data.description,
        prompt_text: data.prompt_text,
        image: data.image,
        category_id: data.category_id,
      });
    } catch (err) {
      console.log(err);
    }
  };

    loadPrompt();
  }, [id]);

//   const loadPrompt = async () => {
//     try {
//       const data = await getPromptById(id);

//       setFormData({
//         title: data.title,
//         description: data.description,
//         prompt_text: data.prompt_text,
//         image: data.image,
//         category_id: data.category_id,
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updatePrompt(id, formData);

      toast.success("Prompt Updated Successfully");

      navigate("/dashboard");
    } catch (err) {
      console.log(err);
      toast.error("Update Failed");
    }
  };

    return (
    <div className="min-h-screen bg-[#0B0B14] flex justify-center py-10">
      <form
        onSubmit={handleSubmit}
        className="bg-[#151521] p-8 rounded-2xl w-[700px]"
      >
        <h2 className="text-3xl text-white font-bold mb-6">
          Edit Prompt
        </h2>

        <input
          type="text"
          name="title"
          placeholder="Prompt Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full mb-4 p-3 rounded bg-[#222233] text-white"
        />

        <textarea
          name="description"
          placeholder="Description"
          rows="3"
          value={formData.description}
          onChange={handleChange}
          className="w-full mb-4 p-3 rounded bg-[#222233] text-white"
        />

        <textarea
          name="prompt_text"
          placeholder="Prompt Text"
          rows="6"
          value={formData.prompt_text}
          onChange={handleChange}
          className="w-full mb-4 p-3 rounded bg-[#222233] text-white"
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          className="w-full mb-4 p-3 rounded bg-[#222233] text-white"
        />

        <select
          name="category_id"
          value={formData.category_id}
          onChange={handleChange}
          className="w-full mb-6 p-3 rounded bg-[#222233] text-white"
        >
          <option value="1">Boy</option>
          <option value="2">Girl</option>
          <option value="3">Couple</option>
          <option value="4">Nature</option>
          <option value="5">Anime</option>
          <option value="6">Wedding</option>
        </select>

        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-lg text-white"
        >
          Update Prompt
        </button>
      </form>
    </div>
  );
}

export default EditPrompt;


  