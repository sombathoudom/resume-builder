import Dashboard from "@/pages/User/Dashboard";
import AdminDashboard from "@/pages/Admin/Dashboard";
import { ROUTE_PATH } from "@/lib/route-path";
export const UserRoutes = [
  {
    path: "/dashboard",
    ele: <Dashboard />,
    role: "user",
  },
];

export const SuperAdminRoutes = [
  {
    path: "/dashboard",
    ele: <AdminDashboard />,
    role: "admin",
  },
];
