import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ContactPage from "./pages/ContactPage";
import Navbar from "./components/Navbar";
import './App.css'

function App() {
  return(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/products" element={<ProductsPage />} />
    <Route path="/contact" element={<ContactPage />} />
  </Routes>
</BrowserRouter>);
}

export default App
