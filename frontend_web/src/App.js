import "./App.css";
import Dashboard from "./modules/Dashboard";
import Form from "./modules/Form";
import { Routes, Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, auth = false }) => {
  const isLoggedIn = localStorage.getItem("user:token") != null || true;

  if (!isLoggedIn && auth) {
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
      <Route path="/users/login" element={<Form isLoginPage={true} />} />
      <Route path="/users/daftar" element={<Form isLoginPage={false} />} />
    </Routes>
  );
}

export default App;
