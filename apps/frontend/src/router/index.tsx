import App from "@/App";
import { useAuth } from "@/contexts/authContext";
import { ROUTE_PATH } from "@/lib/route-path";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PublicLayout from "@/layouts/PublicLayout";
import LandingPage from "@/pages/Landing";
import Login from "@/pages/Auth/Login";
import Register from "@/pages/Auth/Register";
import PrivateLayout from "@/layouts/PrivateLayout";
import Dashboard from "@/pages/Dashboard";
import AdminDashboard from "@/pages/Admin/Dashboard";
import NotFound from "@/pages/NotFound";

export default function AppRouter() {
  const { isAuthenticated, userRole } = useAuth();

  const router = createBrowserRouter([
    {
      path: ROUTE_PATH.root,
      element: <App />,
      children: [
        // Public
        {
          element: <PublicLayout />,
          children: [
            { path: ROUTE_PATH.root, element: <LandingPage /> },
            { path: ROUTE_PATH.login, element: <Login /> },
            { path: ROUTE_PATH.register, element: <Register /> },
          ],
        },

        // Private User
        {
          element: (
            <PrivateLayout
              isAuthenticated={isAuthenticated}
              requiredRole="user"
              userRole={userRole}
            />
          ),
          children: [
            { path: ROUTE_PATH.dashboard.root, element: <Dashboard /> },
          ],
        },

        // Private Admin
        {
          element: (
            <PrivateLayout
              isAuthenticated={isAuthenticated}
              requiredRole="admin"
              userRole={userRole}
            />
          ),
          children: [
            {
              path: ROUTE_PATH.adminDashboard.root,
              element: <AdminDashboard />,
            },
          ],
        },

        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
