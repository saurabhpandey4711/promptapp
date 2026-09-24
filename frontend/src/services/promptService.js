import api from "../api/api.js";

export const getPrompts = async () => {
  const res = await api.get("/prompts");
  return res.data.prompts;
};

export const getPromptById = async (id) => {
  const res = await api.get(`/prompts/${id}`);
  return res.data.prompt;
};

export const addPrompt = async (promptData) => {
  const res = await api.post("/prompts", promptData);
  return res.data;
};

export const getUserPrompts = async (userId) => {
  const res = await api.get(`/prompts/user/${userId}`);
  return res.data.prompts;
};

export const updatePrompt = async (id, promptData) => {
  const res = await api.put(`/prompts/${id}`, promptData);
  return res.data;
};

export const deletePrompt = async (id) => {
  const res = await api.delete(`/prompts/${id}`);
  return res.data;
};

export const getDashboardStats = async (userId) => {
  const res = await api.get(`/prompts/stats/${userId}`);
  return res.data;
};