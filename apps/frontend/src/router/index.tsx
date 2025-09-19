import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Landing from "@/pages/Landing";
import Login from "@/pages/Auth/Login";
import PublicLayout from "@/layouts/PublicLayout";
// import Home from "../pages/Home";
// import About from "../pages/About";
// import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        // Public routes
        {
          element: <PublicLayout/>,
          children: [
            { path: "/", element: <Landing /> },
            { path: "/login", element: <Login /> },
          ],
        },
  
        // Private routes
        // {
        //   element: <PrivateRoute isAuthenticated={isAuthenticated} userRole={userRole} />,
        //   children: [
        //     { path: "/dashboard", element: <Dashboard /> },
        //     {
        //       path: "/admin",
        //       element: <PrivateRoute isAuthenticated={isAuthenticated} requiredRole="admin" userRole={userRole} />,
        //       children: [{ path: "", element: <AdminPanel /> }],
        //     },
        //   ],
        // },
  
        // { path: "*", element: <NotFound /> }, // 404 page
      ],
    },
  ]);

export default router;
