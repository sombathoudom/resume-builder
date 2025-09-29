import React, { Suspense } from "react";
import { ProtectedRoute } from "./protectedRoute";
import { Routes, Route, Navigate } from "react-router-dom";
import { SuperAdminRoutes } from "./route";
import { useAuth } from "./contexts/authContext";
import { DashboardLoading, TableLoading } from "./components/loading";
export default function AdminApp() {
  const user = useAuth();
  return (
    <Routes>
      {SuperAdminRoutes.map((route, index) => {
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
