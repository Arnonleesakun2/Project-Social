import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@clerk/clerk-react";
import { deletePost } from "@/api/post";
import usePostStore from "@/stores/post-store";
import { useEffect } from "react";

const BtnDeleteMycardPost = ({ item }) => {
  const { getToken } = useAuth();
  const actionDeletePost = usePostStore((state) => state.actionDeletePost);
  const id = item._id;
  const clickDeletePost = async () => {
    const token = await getToken();
    actionDeletePost(token, id);
  };
  return (
    <Button variant="outline" className="cursor-pointer" onClick={clickDeletePost}>
      <Trash2 />
    </Button>
  );
};

export default BtnDeleteMycardPost;
