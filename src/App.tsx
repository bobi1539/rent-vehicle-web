import React from "react";
import Login from "./pages/auth/Login";
import { Route, Routes } from "react-router-dom";
import {
  FE_AUTH_LOGIN,
  FE_AUTH_REGISTER,
  FE_CATEGORY,
  FE_DASHBOARD,
  FE_PRODUCT,
  FE_USER,
} from "./constants/feEndpoint";
import Dashboard from "./pages/dashboard/Dashboard";
import Register from "./pages/auth/Register";
import Product from "./pages/product/Product";
import Category from "./pages/category/Category";
import User from "./pages/user/User";

const App: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path={FE_DASHBOARD} element={<Dashboard />} />
      <Route path={FE_PRODUCT} element={<Product />} />
      <Route path={FE_CATEGORY} element={<Category />} />
      <Route path={FE_USER} element={<User />} />
      <Route path={FE_AUTH_LOGIN} element={<Login />} />
      <Route path={FE_AUTH_REGISTER} element={<Register />} />
    </Routes>
  );
};

export default App;
