import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ContactPage from "./pages/ContactPage";
import './App.css'
import CustomNavbar from "./components/Navbar";

function App() {
  return(
  <BrowserRouter>
  <CustomNavbar/>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/products" element={<ProductsPage />} />
    <Route path="/contact" element={<ContactPage />} />
  </Routes>
</BrowserRouter>);
}

export default App
