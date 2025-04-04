import {
  addOrRemoveFavorite,
  createPost,
  deletePost,
  listPost,
  myPost,
} from "@/api/post";
import { create } from "zustand";
import { toast } from "sonner";

const postStore = (set, get) => ({
  post: [],
  actionListPost: async (id) => {
    try {
      const res = await listPost(id);
      set({
        post: res.data.result,
      });
    } catch (err) {
      console.log(err);
    }
  },
  actionAddorRemoveFavorite: async (token, data) => {
    try {
      const res = await addOrRemoveFavorite(token, data);
      const post = get().post;
      const { postId, isFavorite } = data;
      const updatePost = post.map((item) => {
        return item._id === postId
          ? { ...item, isFavorite: !isFavorite }
          : item;
      });
      set({ post: updatePost });
      toast.success(res.data.message, {
        position: "bottom-left",
      });
    } catch (err) {
      toast.error(err, {
        position: "bottom-left",
      });
    }
  },
  mypost: [],
  actionMyPost: async (token) => {
    try {
      const res = await myPost(token);
      set({
        mypost: res.data.result,
      });
    } catch (err) {
      console.log(err);
    }
  },
  actionCreatePost: async (token, data) => {
    try {
      const res = await createPost(token, data);
      toast.success(res.data.message, {
        position: "bottom-left",
      });
      set((state) => ({
        post: [res.data.result, ...state.post],
      }));
    } catch (err) {
      toast.error(err.response.data.msg, {
        position: "bottom-left",
      });
    }
  },
  actionDeletePost: async (token, id) => {
    try {
      const res = await deletePost(token, id);
      await get().actionMyPost(token);
      toast.success(res.data.message, {
        position: "bottom-left",
      });
    } catch (err) {
      toast.error(err, {
        position: "bottom-left",
      });
    }
  },
});

const usePostStore = create(postStore);
export default usePostStore;
