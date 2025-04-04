import Layout from "@/layouts/Layout";
import HomePage from "@/pages/HomePage";
import NotFound from "@/pages/NotFound";
import MyUser from "@/pages/user/MyUser";
import User from "@/pages/user/User";
import UserDetail from "@/pages/user/UserDetail";
import { BrowserRouter, Routes, Route } from "react-router";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route path="user" element={<Layout />}>
          <Route path="createuser" element={<User/>} />
          <Route path="myuser" element={<MyUser/>} />
          <Route path="userdetail/:id" element={<UserDetail/>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
