import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const uploadImage = async (imageFile) => {
  const formData = new FormData();

  formData.append("image", imageFile);

  const res = await API.post("/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data.imageUrl;
};