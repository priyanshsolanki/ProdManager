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
import ProtectedRoutes from "./routes/ProtectedRoutes";
import { AuthProvider } from "./context/AuthContext";
import PublicRoutes from "./routes/PublicRoutes";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AuthProvider>
          <CustomNavbar/>
          <ProtectedRoutes />
          <PublicRoutes />
        </AuthProvider>
      </BrowserRouter>
      <ToastContainer />
    </Provider>
  );
}

export default App;
