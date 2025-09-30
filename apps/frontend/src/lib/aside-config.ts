import {
  IconDashboard,
  IconFileDescription,
  IconFolder,
  IconUsers,
} from "@tabler/icons-react";
import { ROUTE_PATH } from "./route-path";
export const userAsideConfig = [
  {
    title: "Dashboard",
    url: ROUTE_PATH.dashboard.root,
    icon: IconDashboard,
  },
  {
    title: "My CVs",
    url: ROUTE_PATH.dashboard.myCvs,
    icon: IconFileDescription,
  },
  {
    title: "Templates",
    url: ROUTE_PATH.dashboard.templates,
    icon: IconFolder,
  },
];

export const adminAsideConfig = [
  {
    title: "Dashboard",
    url: ROUTE_PATH.adminDashboard.root,
    icon: IconDashboard,
  },
  {
    title: "Categories",
    url: ROUTE_PATH.adminDashboard.categories,
    icon: IconFolder,
  },
  {
    title: "Templates",
    url: ROUTE_PATH.adminDashboard.templates,
    icon: IconFolder,
  },
  {
    title: "Users",
    url: ROUTE_PATH.adminDashboard.users,
    icon: IconUsers,
  },
  {
    title: "Subscriptions",
    url: ROUTE_PATH.adminDashboard.subscriptions,
    icon: IconUsers,
  },
];
