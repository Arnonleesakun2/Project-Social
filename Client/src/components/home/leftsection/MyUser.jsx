import { myUser } from "@/api/user";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton"; // 👈 import Skeleton
import { useAuth } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const MyUser = () => {
  const { getToken } = useAuth();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchdata = async () => {
      const token = await getToken();
      myUser(token)
        .then((res) => {
          setUser(res.data.result?.[0]);
          setLoading(false); 
        })
        .catch((err) => {
          console.log(err);
          setLoading(false); 
        });
    };
    fetchdata();
  }, []);

  return (
    <section className="sticky top-[60px]">
      <div className="text-2xl font-bold mb-5">User</div>

      {loading ? (
        <div className="flex items-center gap-3 w-full rounded-xl py-2 border bg-background shadow-xs dark:bg-input/30 dark:border-input px-4">
          <Skeleton className="h-10 w-10 rounded-full" />
          <div className="flex flex-col gap-1 w-full">
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-1/3" />
          </div>
        </div>
      ) : user ? (
        <Link to="/user/myuser">
          <div className="flex items-center gap-3 w-full rounded-xl py-2 border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50">
            <Avatar className="ml-4">
              <AvatarImage
                src={user?.image || "https://github.com/shadcn.png"}
                alt={user?.name || "test"}
              />
              <AvatarFallback>
                {user?.name?.charAt(0).toUpperCase() || "T"}
              </AvatarFallback>
            </Avatar>
            <div>
              {user?.name ? `${user.name} ${user.lastname}` : "Login Please"}
            </div>
          </div>
        </Link>
      ) : (
        <Link to="/user/createuser">
          <Button className="w-full" variant="outline">
            Create User
          </Button>
        </Link>
      )}
    </section>
  );
};

export default MyUser;
