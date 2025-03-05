import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "../pages/signup/signup";
import Main from "../pages/main/main";
import Write from "../pages/write/write";
import Login from "../pages/login/login";
import WriteBook from "../pages/writeBook/writeBook";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/write" element={<Write />} />
        <Route path="/writeBook" element={<WriteBook />} />
      </Routes>
    </BrowserRouter>
  );
};
