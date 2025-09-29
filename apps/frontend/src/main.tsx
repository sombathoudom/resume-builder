import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./contexts/authContext";
import { PageLoading } from "./components/loading";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Suspense fallback={<PageLoading />}>
          <App />
        </Suspense>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
