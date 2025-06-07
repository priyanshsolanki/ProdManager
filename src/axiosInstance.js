import axios from "axios";

const BASE_URL = "https://tutorial-3-0q9v.onrender.com";
// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: BASE_URL, // Replace with your API URL
  timeout: 10000, // Request timeout
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
