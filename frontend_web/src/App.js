import "./App.css";
import Dashboard from "./modules/Dashboard";
import Form from "./modules/Form";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/users/login" element={<Form isLoginPage={true} />} />
      <Route path="/users/daftar" element={<Form isLoginPage={false} />} />
    </Routes>
  );
}

export default App;
