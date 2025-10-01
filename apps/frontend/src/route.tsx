import Dashboard from "@/pages/User/Dashboard";
import AdminDashboard from "@/pages/Admin/Dashboard";
import { ROUTE_PATH } from "@/lib/route-path";
import Categories from "@/pages/Admin/Category";
import CreateCategoryPage from "./pages/Admin/Category/Create";
import EditCategoryPage from "./pages/Admin/Category/Edit";
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
  {
    path: "/categories",
    ele: <Categories />,
    role: "admin",
  },
  {
    path: "/categories/add",
    ele: <CreateCategoryPage />,
    role: "admin",
  },
  {
    path: "/categories/:id/edit",
    ele: <CreateCategoryPage />,
    role: "admin",
  },
  // {
  //   path: "/templates",
  //   ele: <Templates />,
  //   role: "admin",
  // },
  // {
  //   path: "/users",
  //   ele: <Users />,
  //   role: "admin",
  // },
  // {
  //   path: "/subscriptions",
  //   ele: <Subscriptions />,
  //   role: "admin",
  // },
];
