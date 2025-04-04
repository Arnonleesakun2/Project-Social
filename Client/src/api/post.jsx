import axios from "axios";

export const listPost = async (id) => {
  return await axios.get(`https://social-server-liard.vercel.app/api/listpost`, {
    params: { id }
  });
};
export const myPost = async (token) => {
  return await axios.get("https://social-server-liard.vercel.app/api/mypost", {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const postDetails = async (token, id) => {
  return await axios.get(`https://social-server-liard.vercel.app/api/postdetail/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const createPost = async (token, data) => {
  return await axios.post("https://social-server-liard.vercel.app/api/createpost", data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const deletePost = async (token, id) => {
  return await axios.delete(`https://social-server-liard.vercel.app/api/deletepost/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const addOrRemoveFavorite = async (token, data) => {
  return await axios.post("https://social-server-liard.vercel.app/api/addfavorite", data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};