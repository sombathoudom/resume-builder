import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/authContext";
import { AppSidebar } from "@/components/custom-app-sidebar";
import { SiteHeader } from "@/components/site-header";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

interface MasterLayoutProps {
  children?: React.ReactNode;
}

export default function MasterLayout({ children }: MasterLayoutProps) {
  const { userRole } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col gap-4 py-4 md:gap-6 md:py-6 px-4 md:px-6">
          {children || <Outlet />}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
