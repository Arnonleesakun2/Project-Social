import { Button } from "@/components/ui/button";
import AddPost from "./AddPost";
import ListPost from "./ListPost";
import { SignInButton, useAuth } from "@clerk/clerk-react";

const PostSection = () => {
  const { isSignedIn } = useAuth();
  return (
    <section className=" col-span-6 mt-4 md:mt-0">
      {!isSignedIn ? (
        <div className="">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-cente">Posts</div>
            <SignInButton mode="modal">
              <Button variant="outline">add Post</Button>
            </SignInButton>
          </div>
          <ListPost />
        </div>
      ) : (
        <>
          <AddPost />
          <ListPost />
        </>
      )}
    </section>
  );
};

export default PostSection;
