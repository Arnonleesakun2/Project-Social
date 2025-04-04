import CardPost from "@/components/cards/cardpost/CardPost";
import usePostStore from "@/stores/post-store";
import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton"; // Import Skeleton

const ListPost = () => {
  const actionListPost = usePostStore((state) => state.actionListPost);
  const { user } = useUser();
  const posts = usePostStore((state) => state.post);

  useEffect(() => {
    const id = user?.id ?? null;
    actionListPost(id);
  }, [user?.id, actionListPost]);

  return (
    <div className="mt-4 flex flex-col gap-6">
      {posts.length === 0 ? (
        <Skeleton className="h-[200px] w-full rounded-lg" />
      ) : (
        posts.map((item, index) => (
          <CardPost key={index} item={item} />
        ))
      )}
    </div>
  );
};

export default ListPost;
