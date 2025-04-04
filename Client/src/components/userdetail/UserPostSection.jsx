import { postDetails } from "@/api/post";
import { useAuth } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Skeleton } from "@/components/ui/skeleton";
import CardPostDetail from "../cards/cardpost/CardPostDetail";

const UserPostSection = () => {
  const { getToken } = useAuth();
  const { id } = useParams();
  const [post, setPost] = useState([]);
  
  useEffect(() => {
    const postDetail = async () => {
      try {
        const token = await getToken();
        const res = await postDetails(token, id);
        setPost(res.data.result);
      } catch (err) {
        console.log(err);
      }
    };
    postDetail();
  }, [id, getToken]);
  
  return (
    <section className="col-span-6">
      <div className="text-2xl font-bold">Post</div>
      <div className="mt-4 flex flex-col gap-6">
        {post.length === 0 ? (
          <Skeleton className="h-[200px] w-full rounded-lg" />
        ) : (
          post.map((item, index) => {
            return <CardPostDetail key={index} item={item} />;
          })
        )}
      </div>
    </section>
  );
};

export default UserPostSection;
