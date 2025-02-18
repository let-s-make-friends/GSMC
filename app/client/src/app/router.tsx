import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/client/" Component={Login} />
      </Routes>
    </BrowserRouter>
  );
};
