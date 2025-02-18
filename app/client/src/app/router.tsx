import { Route, Routes } from "react-router-dom";
import Login from "../pages/login";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
};
