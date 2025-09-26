// authContext.tsx
import { createContext, useContext } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  userRole: "user" | "admin";
}

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  userRole: "admin",
});

export const useAuth = () => useContext(AuthContext);
