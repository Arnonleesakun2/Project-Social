import { userDetails } from "@/api/user";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Skeleton } from "@/components/ui/skeleton"; 

const UserProfileSection = () => {
  const { id } = useParams();
  const { getToken } = useAuth();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userDetail = async () => {
      try {
        const token = await getToken();
        const res = await userDetails(token, id);
        setUser(res.data.result);
      } catch (err) {
        console.log(err);
      }
    };
    userDetail();
  }, [id, getToken]);

  return (
    <section className="col-span-3">
      <div className="sticky top-[60px]">
        <div className="flex justify-center">
          {user ? (
            <Avatar className="w-[200px] h-[200px]">
              <AvatarImage
                src={user?.image || "https://github.com/shadcn.png"}
                alt={user?.name || "test"}
              />
              <AvatarFallback>{user?.name?.charAt(0).toUpperCase() || "T"}</AvatarFallback>
            </Avatar>
          ) : (
            <Skeleton className="w-[200px] h-[200px] rounded-full" />
          )}
        </div>
        <div className="mt-4 flex items-center justify-center gap-2">
          <div className="">
            {user ? (
              <Badge variant="outline" className="text-lg">
                {user?.name || "Not"}
              </Badge>
            ) : (
              <Skeleton className="w-32 h-6" />
            )}
          </div>
          <div className="">
            {user ? (
              <Badge variant="outline" className="text-lg">
                {user?.lastname || "Found"}
              </Badge>
            ) : (
              <Skeleton className="w-32 h-6" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfileSection;
