import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import Main from "../pages/main/main";
import Write from "../pages/write/write";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </BrowserRouter>
  );
};
