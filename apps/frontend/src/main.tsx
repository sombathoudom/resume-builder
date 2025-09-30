import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./contexts/authContext";
import { PageLoading } from "./components/loading";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <Suspense fallback={<PageLoading />}>
            <App />
          </Suspense>
        </QueryClientProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
