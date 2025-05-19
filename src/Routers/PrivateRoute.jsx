import React from "react";
import { useAuth } from "../Context/AuthContext.jsx"; // Import the useAuth hook to access authentication context
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { currentUser,loading } = useAuth();

  // Check if the user is loading
  if (loading) {
    return <div>Loading...</div>; // Show a loading message while checking authentication
  }

  if (currentUser) {
    return children;
  }

  return <Navigate to="/login" replace />; // Redirect to login page if not authenticated
};

export default PrivateRoute;
