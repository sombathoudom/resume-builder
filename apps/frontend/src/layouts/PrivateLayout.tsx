import { Navigate, Outlet } from "react-router-dom";
import UserNav from "@/components/ui/user-nav";
import AdminNav from "@/components/ui/admin-nav";

interface PrivateLayoutProps {
  isAuthenticated: boolean;
  requiredRole: string;
  userRole: string;
}

export default function PrivateLayout({
  isAuthenticated,
  requiredRole,
  userRole,
}: PrivateLayoutProps) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (requiredRole && userRole !== requiredRole) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-white dark:bg-background-dark/50 flex-shrink-0 border-r border-border-light dark:border-border-dark">
        <div className="p-6">
          <div className="flex items-center gap-3">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{
                backgroundImage: 'url("https://example.com/avatar.png")',
              }}
            ></div>
            <h1 className="text-base font-medium">Sophia Carter</h1>
          </div>
        </div>
        <nav className="mt-8 px-4">
          {userRole === "admin" ? <AdminNav /> : <UserNav />}
        </nav>
      </aside>
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
}
