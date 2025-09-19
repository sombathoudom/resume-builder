import { Outlet, Link, useNavigate } from "react-router-dom";

export default function PrivateLayout({ user }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add your logout logic here (clear auth state / tokens)
    console.log("Logout");
    navigate("/login");
  };

  return (
    <div>
      {/* Example: Private Navbar */}
      <nav className="padding: 10px; border-bottom: 1px solid #ccc;">
        <Link to="/dashboard">Dashboard</Link> | 
        {user.role === "admin" && <Link to="/admin">Admin Panel</Link>} | 
        <button onClick={handleLogout}>Logout</button>
      </nav>

      {/* Page content */}
      <main style={{ padding: "20px" }}>
        <Outlet /> {/* Nested private route renders here */}
      </main>

      {/* Optional Footer */}
      <footer style={{ marginTop: "50px", textAlign: "center" }}>
        &copy; 2025 MyApp - Logged in as {user.name}
      </footer>
    </div>
  );
}
