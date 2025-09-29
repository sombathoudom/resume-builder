import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { Suspense, lazy } from "react";
import { useAuth } from "./contexts/authContext";
import { ROUTE_PATH } from "@/lib/route-path";
import LandingPage from "./pages/Landing";
import PublicLayout from "./layouts/PublicLayout";
import MasterLayout from "./layouts/ShadcnMasterLayout";
import {
  PageLoading,
  DashboardLoading,
  AuthLoading,
} from "./components/loading";

// Lazy load components
const Login = lazy(() => import("./pages/Auth/Login"));
const Register = lazy(() => import("./pages/Auth/Register"));
const UserApp = lazy(() => import("./UserApp"));
const AdminApp = lazy(() => import("./AdminApp"));
// import ResetPassword from "./pages/Auth/ResetPassword";
// import ForgotPassword from "./pages/Auth/ForgotPassword";
// import AdminApp from "./pages/Admin/AdminApp";
// import SuperAdminApp from "./pages/Admin/SuperAdminApp";

export default function App() {
  const user = useAuth();
  const location = useLocation();
  // Redirect authenticated users to their appropriate dashboard
  if (user.isAuthenticated) {
    // If user is on login/register page, redirect to dashboard
    if (
      location.pathname === "/login" ||
      location.pathname === "/register" ||
      location.pathname === "/"
    ) {
      const redirectPath =
        user.userRole === "admin"
          ? ROUTE_PATH.adminDashboard.root
          : ROUTE_PATH.dashboard.root;

      console.log("App - Redirecting to:", redirectPath);
      return <Navigate to={redirectPath} replace />;
    }
  }

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<LandingPage />} />
        <Route
          path="login"
          element={
            <Suspense fallback={<AuthLoading />}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="register"
          element={
            <Suspense fallback={<AuthLoading />}>
              <Register />
            </Suspense>
          }
        />
      </Route>

      {/* Protected Routes with Master Layout */}
      <Route
        path="user/*"
        element={
          <MasterLayout>
            <Suspense fallback={<DashboardLoading />}>
              <UserApp />
            </Suspense>
          </MasterLayout>
        }
      />
      <Route
        path="admin/*"
        element={
          <MasterLayout>
            <Suspense fallback={<DashboardLoading />}>
              <AdminApp />
            </Suspense>
          </MasterLayout>
        }
      />

      {/* Catch all route */}
      <Route path="*" element={<Navigate replace to={"/"} />} />
    </Routes>
  );
}
