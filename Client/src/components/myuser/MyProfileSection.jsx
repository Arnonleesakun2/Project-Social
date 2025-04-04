import { myUser } from "@/api/user";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton"; // 👈 เพิ่ม Skeleton
import { useAuth } from "@clerk/clerk-react";
import { useEffect, useState } from "react";

const MyProfileSection = () => {
  const { getToken } = useAuth();
  const [myuser, setMyUser] = useState();

  useEffect(() => {
    const fetchMyUser = async () => {
      const token = await getToken();
      try {
        const res = await myUser(token);
        setMyUser(res.data.result?.[0]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchMyUser();
  }, []);

  return (
    <section className="col-span-3">
      <div className="sticky top-[60px]">
        <div className="flex justify-center">
          {myuser ? (
            <Avatar className="w-[200px] h-[200px]">
              <AvatarImage
                src={myuser?.image || "https://github.com/shadcn.png"}
                alt={myuser?.name || "test"}
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          ) : (
            <Skeleton className="w-[200px] h-[200px] rounded-full" />
          )}
        </div>

        <div className="mt-4 flex items-center justify-center gap-2">
          {myuser ? (
            <>
              <Badge variant="outline" className="text-lg">
                {myuser?.name || "Not"}
              </Badge>
              <Badge variant="outline" className="text-lg">
                {myuser?.lastname || "Found"}
              </Badge>
            </>
          ) : (
            <>
              <Skeleton className="h-6 w-20 rounded-md" />
              <Skeleton className="h-6 w-20 rounded-md" />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default MyProfileSection;
