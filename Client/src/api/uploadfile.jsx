import axios from "axios";

export const uploadImage = async (token, data) => {
  return await axios.post(
    "https://social-server-liard.vercel.app/api/uploadimage",
    { image: data },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};