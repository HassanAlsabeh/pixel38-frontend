import React from "react";
import { Navigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  return localStorage.getItem("token") !== null ? (
    children
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute;
