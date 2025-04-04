import MyPostSection from "@/components/myuser/MyPostSection";
import MyProfileSection from "@/components/myuser/MyProfileSection";

const MyUser = () => {
  return (
    <main className="py-4">
      <section className="my-4 md:grid md:grid-cols-10">
        <MyProfileSection/>
        <MyPostSection/>
      </section>
    </main>
  );
};

export default MyUser;
