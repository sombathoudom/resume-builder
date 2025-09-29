import React, { Suspense } from "react";
import { UserRoutes } from "./route";
import { Navigate, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./protectedRoute";
import { useAuth } from "./contexts/authContext";
import { DashboardLoading, TableLoading } from "./components/loading";

export default function UserApp() {
  const user = useAuth();
  return (
    <Routes>
      {UserRoutes.map((route, index) => {
        return route.ele ? (
          <Route
            key={index}
            path={route.path}
            element={
              user.isAuthenticated ? (
                <ProtectedRoute
                  children={
                    <Suspense fallback={<DashboardLoading />}>
                      {route.ele}
                    </Suspense>
                  }
                  route={route.path}
                />
              ) : (
                <Navigate replace to={"/"} />
              )
            }
          />
        ) : null;
      })}
      <Route path="*" element={<Navigate replace to={"/"} />} />
    </Routes>
  );
}
