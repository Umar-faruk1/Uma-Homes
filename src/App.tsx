
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Index from "./pages/Index";
import Properties from "./pages/Properties";
import PropertyDetail from "./pages/PropertyDetail";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import AgentRegister from "./pages/auth/AgentRegister";
import UserDashboard from "./pages/user/UserDashboard";
import UserProfile from "./pages/user/UserProfile";
import SavedProperties from "./pages/user/SavedProperties";
import AgentDashboard from "./pages/agent/AgentDashboard";
import AgentListings from "./pages/agent/AgentListings";
import AgentProfile from "./pages/agent/AgentProfile";
import AgentAnalytics from "./pages/agent/AgentAnalytics";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminProperties from "./pages/admin/AdminProperties";
import AdminAnalytics from "./pages/admin/AdminAnalytics";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/property/:id" element={<PropertyDetail />} />
            
            {/* Auth Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/agent-register" element={<AgentRegister />} />
            
            {/* User Routes */}
            <Route path="/dashboard" element={
              <ProtectedRoute allowedUserTypes={['user']}>
                <UserDashboard />
              </ProtectedRoute>
            } />
            <Route path="/profile" element={
              <ProtectedRoute allowedUserTypes={['user']}>
                <UserProfile />
              </ProtectedRoute>
            } />
            <Route path="/saved-properties" element={
              <ProtectedRoute allowedUserTypes={['user']}>
                <SavedProperties />
              </ProtectedRoute>
            } />
            
            {/* Agent Routes */}
            <Route path="/agent/dashboard" element={
              <ProtectedRoute allowedUserTypes={['agent']}>
                <AgentDashboard />
              </ProtectedRoute>
            } />
            <Route path="/agent/listings" element={
              <ProtectedRoute allowedUserTypes={['agent']}>
                <AgentListings />
              </ProtectedRoute>
            } />
            <Route path="/agent/profile" element={
              <ProtectedRoute allowedUserTypes={['agent']}>
                <AgentProfile />
              </ProtectedRoute>
            } />
            <Route path="/agent/analytics" element={
              <ProtectedRoute allowedUserTypes={['agent']}>
                <AgentAnalytics />
              </ProtectedRoute>
            } />
            
            {/* Admin Routes */}
            <Route path="/admin/dashboard" element={
              <ProtectedRoute allowedUserTypes={['admin']}>
                <AdminDashboard />
              </ProtectedRoute>
            } />
            <Route path="/admin/users" element={
              <ProtectedRoute allowedUserTypes={['admin']}>
                <AdminUsers />
              </ProtectedRoute>
            } />
            <Route path="/admin/properties" element={
              <ProtectedRoute allowedUserTypes={['admin']}>
                <AdminProperties />
              </ProtectedRoute>
            } />
            <Route path="/admin/analytics" element={
              <ProtectedRoute allowedUserTypes={['admin']}>
                <AdminAnalytics />
              </ProtectedRoute>
            } />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
