import axios from "axios";

// const BASE_URL = "https://tutorial-3-0q9v.onrender.com";
const BASE_URL = import.meta.env.VITE_API_BASE_URL; // ✅ for Vite

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: BASE_URL, // Replace with your API URL
  timeout: 10000, // Request timeout
  headers: {
    "Content-Type": "application/json",
  },
});
// Optional: attach token to every request automatically
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
export default axiosInstance;
