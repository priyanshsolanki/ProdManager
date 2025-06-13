import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import ProductsPage from "./pages/products";
import ContactPage from "./pages/contact";
import "./App.css";
import CustomNavbar from "./components/Navbar";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ToastContainer } from "react-toastify";
import RegistrationForm from "./pages/register";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/register" element={<RegistrationForm />} />

        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </Provider>
  );
}

export default App;
