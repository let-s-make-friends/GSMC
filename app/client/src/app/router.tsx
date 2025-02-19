import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login/login";
import Main from "../pages/main/main";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};
