import api from "../api/api";

export const getAllUsers = async () => {
  const res = await api.get("/admin/users");
  return res.data;
};

export const deleteUser = async (id) => {
  const res = await api.delete(`/admin/users/${id}`);
  return res.data;
};

export const getAllPrompts = async () => {
  const res = await api.get("/admin/prompts");
  return res.data;
};

export const deletePrompt = async (id) => {
  const res = await api.delete(`/admin/prompts/${id}`);
  return res.data;
};

export const getDashboardStats = async () => {
  const res = await api.get("/admin/stats");
  return res.data;
};
export const updateUserRole = async (id, role) => {
  const res = await api.put(`/admin/users/${id}/role`, {role,});
  return res.data;
};