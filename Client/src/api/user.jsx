import axios from "axios";

export const createUser = async (token, data) => {
  return await axios.post("https://social-server-liard.vercel.app/api/createuser", data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const myUser = async (token) => {
  return await axios.get("https://social-server-liard.vercel.app/api/myuser", {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const userDetails = async (token, id) => {
  return await axios.get(`https://social-server-liard.vercel.app/api/userdetail/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
