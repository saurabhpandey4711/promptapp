import axios from "axios";

const API = axios.create({
  // baseURL: "http://localhost:5000/api",
   baseURL: `${import.meta.env.VITE_API_URL}/api`,

});

export const toggleLike = async (promptId) => {
  const res = await API.post(`/likes/${promptId}`);
  return res.data;
};

export const getLikes = async (promptId) => {
  const res = await API.get(`/likes/${promptId}`);
  return res.data.likes;
};

import api from "../api/api";

export const getLikedPrompts = async (userId) => {
  const res = await api.get(`/likes/user/${userId}`);
  return res.data;
};