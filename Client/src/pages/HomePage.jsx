import LeftSection from "@/components/home/leftsection/LeftSection";
import PostSection from "@/components/home/postsection/PostSection";
import React from "react";

const HomePage = () => {
  return (
    <main className="md:grid md:grid-cols-12 gap-3 py-4 ">
      <LeftSection/>
      <PostSection/>
    </main>
  );
};

export default HomePage;
