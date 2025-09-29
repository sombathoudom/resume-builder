export const ROUTE_PATH = {
  // Public routes
  root: "/",
  login: "/login",
  register: "/register",

  // Private routes
  dashboard: {
    root: "/user/dashboard",
    myCvs: "/user/dashboard/my-cvs",
    newCv: "/user/dashboard/new-cv",
  },

  // Admin routes
  adminDashboard: {
    root: "/admin/dashboard",
    categories: "/admin/categories",
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
