import React from "react";
import Login from "./pages/auth/Login";
import { Route, Routes } from "react-router-dom";
import { FE_AUTH_LOGIN, FE_AUTH_REGISTER } from "./constants/feEndpoint";
import Dashboard from "./pages/dashboard/Dashboard";
import Register from "./pages/auth/Register";

const App: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path={FE_AUTH_LOGIN} element={<Login />} />
      <Route path={FE_AUTH_REGISTER} element={<Register />} />
    </Routes>
  );
};

export default App;
