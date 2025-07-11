import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home";
import RegistrationForm from "../pages/register";
import LoginPage from "../pages/login";
import ContactPage from "../pages/contact";


const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegistrationForm />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/contact" element={<ContactPage />} /> 
    </Routes>
  );
};

export default PublicRoutes;
