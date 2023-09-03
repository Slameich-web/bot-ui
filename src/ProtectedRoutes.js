import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = ({ loggedIn }) => {
  return loggedIn ? <Outlet /> : <Navigate to="/" />;
};

export const ProtectedManagerRoutes = ({ role }) => {
  return role !== "user" ? <Outlet /> : <Navigate to="/" />;
};
