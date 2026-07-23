import api from "../api/api";

export const registerUser = (data) => {
  return api.post("/auth/register", data);
};

export const loginUser = (data) => {
  return api.post("/auth/login", data);
};

export const updateProfile = async (id, data) => {

  const res = await api.put(
    `/auth/profile/${id}`,
    data
  );

  return res.data;

};