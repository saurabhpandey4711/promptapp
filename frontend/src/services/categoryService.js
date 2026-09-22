import api from "../api/api.js";

export const getCategories = async () => {
  const res = await api.get("/categories");
  return res.data.categories;
};

export const addCategory = async (name) => {
  const res = await api.post("/categories", {
    name,
  });

  return res.data;
};