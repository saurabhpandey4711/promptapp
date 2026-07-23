import { useState } from "react";
import { toast } from "react-toastify";
import { addPrompt } from "../services/promptService";
import { useNavigate } from "react-router-dom";
import { uploadImage } from "../services/uploadService";

function AddPrompt() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    prompt_text: "",
    image: "",
    category_id: "",
  });
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleImageUpload = async (e) => {

  const file = e.target.files[0];

  if (!file) return;

  try {

    const imageUrl = await uploadImage(file);

    // setFormData({
    //   ...formData,
    //   image: imageUrl,
    // });


    setFormData((prev) => ({
      ...prev,
      image: imageUrl,
    }));

    toast.success("Image Uploaded Successfully");

  } catch (err) {

    console.log(err);

    toast.error("Image Upload Failed");

  }

};

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const promptData = {
      ...formData,
      //user_id: 1, // अभी testing के लिए
    };
    // const res = await addPrompt(formData);
    const res = await addPrompt(promptData);

    toast.success(res.message);

    navigate("/");
   } catch (error) {
    console.log(error);

    toast.error(
      error.response?.data?.message || "Failed to add prompt"
    );
   }
  };

  return (
    <div className="min-h-screen bg-[#0B0B14] flex justify-center py-10">
      <form
        onSubmit={handleSubmit}
        className="bg-[#151521] p-8 rounded-2xl w-[700px]"
      >
        <h2 className="text-3xl text-white font-bold mb-6">
          Add Prompt
        </h2>

        <input
          type="text"
          name="title"
          placeholder="Prompt Title"
          onChange={handleChange}
          className="w-full mb-4 p-3 rounded bg-[#222233] text-white"
        />

        <textarea
          name="description"
          placeholder="Description"
          rows="3"
          onChange={handleChange}
          className="w-full mb-4 p-3 rounded bg-[#222233] text-white"
        />

        <textarea
          name="prompt_text"
          placeholder="Prompt Text"
          rows="6"
          onChange={handleChange}
          className="w-full mb-4 p-3 rounded bg-[#222233] text-white"
        />

          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full mb-4 p-3 rounded bg-[#222233] text-white"
          />

                {formData.image && (
                   <img
                      src={formData.image}
                      alt="Preview"
                      className="w-full h-60 object-cover rounded-lg mb-4"
                    />
                )}




        <select
          name="category_id"
          onChange={handleChange}
          className="w-full mb-6 p-3 rounded bg-[#222233] text-white"
        >
          <option value="">Select Category</option>
          <option value="1">Boy</option>
          <option value="2">Girl</option>
          <option value="3">Couple</option>
          <option value="4">Nature</option>
          <option value="5">Anime</option>
          <option value="6">Wedding</option>
        </select>

        <button
          className="w-full bg-purple-600 py-3 rounded-lg text-white hover:bg-purple-700"
        >
          Add Prompt
        </button>
      </form>
    </div>
  );
}

export default AddPrompt;