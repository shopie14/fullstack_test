import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import "./App.css";
import Dashboard from "./modules/Dashboard";
import Form from "./modules/Form";

const ProtectedRoute = ({ children, auth = false }) => {
  const isLoggedIn = localStorage.getItem("user:token") != null || Cookies.get("user_token") != null;

  if (!isLoggedIn && auth) {
    return <Navigate to={"/users/login"} />;
  } else if (
    isLoggedIn &&
    ["/users/login", "/users/register"].includes(window.location.pathname)
  ) {
    return <Navigate to={"/"} />;
  }
  return children;
};

function App() {
  useEffect(() => {
    const token = Cookies.get("user_token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute auth={true}>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route path="/users/login" element={<Form isLoginPage={true} />} />
      <Route path="/users/register" element={<Form isLoginPage={false} />} />
    </Routes>
  );
}

export default App;
