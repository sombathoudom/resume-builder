// authContext.tsx
import { createContext, useContext, useState, useEffect } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  userRole: "user" | "admin";
  login: (role: "user" | "admin") => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  userRole: "user",
  login: () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<"user" | "admin">("user");

  // Check for existing auth state on mount
  useEffect(() => {
    const savedAuth = localStorage.getItem("auth");
    if (savedAuth) {
      const { isAuthenticated: savedIsAuth, userRole: savedRole } =
        JSON.parse(savedAuth);
      setIsAuthenticated(savedIsAuth);
      setUserRole(savedRole);
    }
  }, []);

  const login = (role: "user" | "admin") => {
    console.log("AuthContext - Login called with role:", role);
    setIsAuthenticated(true);
    setUserRole(role);
    localStorage.setItem(
      "auth",
      JSON.stringify({ isAuthenticated: true, userRole: role })
    );
    console.log(
      "AuthContext - Login completed, isAuthenticated:",
      true,
      "userRole:",
      role
    );
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserRole("user");
    localStorage.removeItem("auth");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
