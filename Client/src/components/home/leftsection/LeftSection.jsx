import { useAuth } from "@clerk/clerk-react";
import MyUser from "./MyUser";

const LeftSection = () => {
  const { isSignedIn } = useAuth();

  return (
    <section className="col-span-3 ">
      {!isSignedIn ? null : (
        <>
          <MyUser />
        </>
      )}
    </section>
  );
};

export default LeftSection;
