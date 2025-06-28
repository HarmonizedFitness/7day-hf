
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProgressProvider } from "@/contexts/ProgressContext";
import { AuthProvider } from "@/contexts/AuthContext";
import { WorkoutAccessProvider } from "@/contexts/WorkoutAccessContext";
import ThemeProvider from "@/components/ThemeProvider";
import ProtectedRoute from "@/components/ProtectedRoute";
import SplashScreen from "@/pages/SplashScreen";
import HomePage from "@/pages/HomePage";
import WorkoutDayPage from "@/pages/WorkoutDayPage";
import AuthPage from "@/pages/AuthPage";
import UserProfilePage from "@/pages/UserProfilePage";
import PreviewPage from "@/pages/PreviewPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <WorkoutAccessProvider>
          <ThemeProvider>
            <ProgressProvider>
              <TooltipProvider>
                <Toaster />
                <Sonner />
                <BrowserRouter>
                  <Routes>
                    <Route path="/" element={<SplashScreen />} />
                    <Route path="/auth" element={<AuthPage />} />
                    <Route path="/preview" element={<PreviewPage />} />
                    <Route path="/home" element={
                      <ProtectedRoute>
                        <HomePage />
                      </ProtectedRoute>
                    } />
                    <Route path="/profile" element={
                      <ProtectedRoute>
                        <UserProfilePage />
                      </ProtectedRoute>
                    } />
                    <Route path="/day/:dayId" element={
                      <ProtectedRoute>
                        <WorkoutDayPage />
                      </ProtectedRoute>
                    } />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </BrowserRouter>
              </TooltipProvider>
            </ProgressProvider>
          </ThemeProvider>
        </WorkoutAccessProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
