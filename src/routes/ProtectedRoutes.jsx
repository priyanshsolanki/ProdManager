import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductsPage from "../pages/products";
import PrivateRoute from "../components/PrivateRoute";

const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="/products" element={<ProductsPage />} />
      </Route>
  </Routes>
  );
};

export default ProtectedRoutes;
