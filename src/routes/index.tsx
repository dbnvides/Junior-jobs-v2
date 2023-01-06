import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../pages/login";
import { Company } from "../pages/company";
import { Register } from "../pages/register";
import { ProtectRoutes } from "../components/ProtectRoutes";
import { UserProfile } from "../pages/user";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectRoutes />}>
        <Route path="/company" element={<Company />} />
        <Route path="/user" element={<UserProfile />} />
      </Route>
    </Routes>
  );
};
