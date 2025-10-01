import Dashboard from "@/pages/User/Dashboard";
import AdminDashboard from "@/pages/Admin/Dashboard";
import { ROUTE_PATH } from "@/lib/route-path";
import Categories from "@/pages/Admin/Category";
import CreateCategoryPage from "./pages/Admin/Category/Create";
import CVTempV1 from "./templates/cv-temp-v1";
import TemplateManagement from "@/pages/Admin/Template";
import CreateTemplatePage from "@/pages/Admin/Template/Create";
import EditTemplatePage from "@/pages/Admin/Template/Edit";
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
  {
    path: "/cv",
    ele: <CVTempV1 />,
    role: "admin",
  },
  {
    path: "/templates",
    ele: <TemplateManagement />,
    role: "admin",
  },
  {
    path: "/templates/add",
    ele: <CreateTemplatePage />,
    role: "admin",
  },
  {
    path: "/templates/:id/edit",
    ele: <EditTemplatePage />,
    role: "admin",
  },
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
