import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";
import DashboardLayout from "../components/layout/DashboardLayout";

import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";

import Dashboard from "../pages/Dashboard/Dashboard";

import Documents from "../pages/Documents/Documents";
import UploadDocument from "../pages/Documents/UploadDocument";
import DocumentDetails from "../pages/Documents/DocumentDetails";

import Settings from "../pages/Settings/Settings";
import NotFound from "../pages/NotFound/NotFound";
import ProtectedRoute from "../components/common/ProtectedRoute";

const AppRoutes = () => {
  return (
   <BrowserRouter>
  <Routes>

    {/* Home only */}
    <Route element={<MainLayout />}>
      <Route path="/" element={<Home />} />
    </Route>

    {/* Auth Pages */}
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />

    {/* Dashboard */}
   <Route
  element={
    <ProtectedRoute>
      <DashboardLayout />
    </ProtectedRoute>
  }
>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/documents" element={<Documents />} />
      <Route path="/documents/upload" element={<UploadDocument />} />
      <Route path="/documents/:id" element={<DocumentDetails />} />
      <Route path="/settings" element={<Settings />} />
    </Route>

    <Route path="*" element={<NotFound />} />

  </Routes>
</BrowserRouter>
  );
};

export default AppRoutes;