import * as React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  IconChartBar,
  IconDashboard,
  IconFileDescription,
  IconFolder,
  IconHelp,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react";

import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/custom-nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useAuth } from "@/contexts/authContext";
import { adminAsideConfig, userAsideConfig } from "@/lib/aside-config";
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { userRole, logout } = useAuth();
  const navigate = useNavigate();

  const getNavMainItems = () => {
    if (userRole === "admin") {
      return adminAsideConfig;
    } else {
      return userAsideConfig;
    }
  };

  const getNavSecondaryItems = () => {
    if (userRole === "admin") {
      return [
        {
          title: "Settings",
          url: "/admin/settings",
          icon: IconSettings,
        },
        {
          title: "Get Help",
          url: "/admin/help",
          icon: IconHelp,
        },
      ];
    } else {
      return [
        {
          title: "Settings",
          url: "/user/settings",
          icon: IconSettings,
        },
        {
          title: "Get Help",
          url: "/user/help",
          icon: IconHelp,
        },
      ];
    }
  };

  const user = {
    name: userRole === "admin" ? "Admin User" : "Sophia Carter",
    email: userRole === "admin" ? "admin@example.com" : "sophia@example.com",
    avatar: "/avatars/user.jpg",
  };

  const navMainItems = getNavMainItems();
  const navSecondaryItems = getNavSecondaryItems();

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <button onClick={() => navigate("/")}>
                <div className="w-6 h-6 bg-gradient-to-br from-purple-400 to-purple-600 rounded flex items-center justify-center">
                  <span className="text-white text-sm font-bold">CV</span>
                </div>
                <span className="text-base font-semibold">CV Builder</span>
              </button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMainItems} />
        <NavSecondary items={navSecondaryItems} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} onLogout={logout} />
      </SidebarFooter>
    </Sidebar>
  );
}
