import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./contexts/authContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
  // allConfigData: any;
  route: string;
}
export const ProtectedRoute = (props: ProtectedRouteProps) => {
  const { children, route } = props;
  const user = useAuth();
  if (!user.isAuthenticated) {
    return <Navigate to="/login" replace={true} />;
  } else {
    return children;
  }
};
