export const ROUTE_PATH = {
  // Public routes
  root: "/",
  login: "/login",
  register: "/register",

  // Private routes
  dashboard: {
    root: "/user/dashboard",
    myCvs: "/user/dashboard/my-cvs",
    templates: "/user/dashboard/templates",
    newCv: "/user/dashboard/new-cv",
  },

  // Admin routes
  adminDashboard: {
    root: "/admin/dashboard",
    categories: "/admin/categories",
    categoryAdd: "/admin/categories/add",
    categoryEdit: "/admin/categories/:id/edit",
    templates: "/admin/templates",
    users: "/admin/users",
    subscriptions: "/admin/subscriptions",
    settings: "/admin/settings",
    logs: "/admin/logs",
    reports: "/admin/reports",
    analytics: "/admin/analytics",
  },

  notFound: "*",
};
