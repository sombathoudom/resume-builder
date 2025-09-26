import { Outlet } from "react-router-dom";
export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-background-dark dark:text-background-light">
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
