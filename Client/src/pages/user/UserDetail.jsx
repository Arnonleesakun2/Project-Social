import UserPostSection from "@/components/userdetail/UserPostSection";
import UserProfileSection from "@/components/userdetail/UserProfileSection";


const UserDetail = () => {
  return <main className="py-4">
     <section className="my-4 md:grid md:grid-cols-10">
        <UserProfileSection/>
        <UserPostSection/>
     </section>
  </main>;
};

export default UserDetail;
