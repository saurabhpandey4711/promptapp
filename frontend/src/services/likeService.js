import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const toggleLike = async (promptId) => {
  const res = await API.post(`/likes/${promptId}`);
  return res.data;
};

export const getLikes = async (promptId) => {
  const res = await API.get(`/likes/${promptId}`);
  return res.data.likes;
};