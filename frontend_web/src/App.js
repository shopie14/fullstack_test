import "./App.css";
import Dashboard from "./modules/Dashboard";
import Form from "./modules/Form";
import { Routes, Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("user:token") != null || true;

  if (!isLoggedIn) {
    return <Navigate to={"/users/login"} />;
  } else if (
    isLoggedIn &&
    ["/users/login", "/users/daftar"].includes(window.location.pathname)
  ) {
    return <Navigate to={"/"} />;
  }
  return children;
};

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/users/login"
        element={
          <ProtectedRoute>
            <Form isLoginPage={true} />
          </ProtectedRoute>
        }
      />
      <Route
        path="/users/daftar"
        element={
          <ProtectedRoute>
            <Form isLoginPage={false} />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
