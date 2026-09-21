// import api from "../api/api";

// export const getPrompts = () => {
//   return api.get("/prompts");
// };

// export const getPrompt = (id) => {
//   return api.get(`/prompts/${id}`);
// };

import axios from "axios";

const API = axios.create({
  // baseURL: "http://localhost:5000/api",
   baseURL: `${import.meta.env.VITE_API_URL}/api`,
});

export const getPrompts = async () => {
  const res = await API.get("/prompts");
  return res.data.prompts;
};

export const getPromptById = async (id) => {
  const res = await API.get(`/prompts/${id}`);
  return res.data.prompt;
};

export const addPrompt = async (promptData) => {
  const res = await API.post("/prompts", promptData);
  return res.data;
};
export const getUserPrompts = async (userId) => {
  const res = await API.get(`/prompts/user/${userId}`);
  return res.data.prompts;
};

export const updatePrompt = async (id, promptData) => {
  const res = await API.put(`/prompts/${id}`, promptData);
  return res.data;
};

export const deletePrompt = async (id) => {
  const res = await API.delete(`/prompts/${id}`);
  return res.data;
};

export const getDashboardStats = async (userId) => {

  const res = await API.get(`/prompts/stats/${userId}`);

  return res.data;

};