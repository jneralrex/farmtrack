import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useAuthStore } from "./store/auth-store";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import CreateSoilTester from "./components/SoilTester/CreateSoilTester";
import SoilTesterList from "./components/SoilTester/SoilTesterList";
import ChangePassword from "./components/Auth/ChangwPassword";
import SingleFarmer from "./components/SoilTester/SingleFarmer";
import Analytics from "./pages/Analytics";
import Profile from "./pages/Profile";
import AssignedList from "./components/SoilTester/AssignedList";

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/test-pool"
          element={
            <PrivateRoute>
              <SoilTesterList />
            </PrivateRoute>
          }
        />
          <Route
          path="/my-test"
          element={
            <PrivateRoute>
              <AssignedList />
            </PrivateRoute>
          }
        />
        <Route
          path="/soil-testers/new"
          element={
            <PrivateRoute>
              <CreateSoilTester />
            </PrivateRoute>
          }
        />
        <Route
          path="/setting/change-password"
          element={
            <PrivateRoute>
              <ChangePassword />
            </PrivateRoute>
          }
        />

        <Route
          path="/analytics"
          element={
            <PrivateRoute>
              <Analytics />
            </PrivateRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />

        <Route
          path="/single/test-request/:id"
          element={
            <PrivateRoute>
              <SingleFarmer />
            </PrivateRoute>
          }
        />

        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
