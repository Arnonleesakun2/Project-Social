import usePostStore from "@/stores/post-store";
import { useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";
import MycardPost from "../cards/cardpost/MycardPost";
import { Skeleton } from "@/components/ui/skeleton"; // Import Skeleton

const MyPostSection = () => {
  const actionMyPost = usePostStore((state) => state.actionMyPost);
  const { getToken } = useAuth();
  const mypost = usePostStore((state) => state.mypost);

  useEffect(() => {
    const fetchMypost = async () => {
      const token = await getToken();
      actionMyPost(token);
    };
    fetchMypost();
  }, [actionMyPost, getToken]);
  console.log(mypost);
  return (
    <section className="col-span-6">
      <div className="text-2xl font-bold">MyPost</div>
      <div className="mt-4 flex flex-col gap-6">
        {mypost.length === 0 ? (
          <Skeleton className="h-[200px] w-full rounded-lg" />
        ) : (
          mypost.map((item, index) => <MycardPost key={index} item={item} />)
        )}
      </div>
    </section>
  );
};

export default MyPostSection;
