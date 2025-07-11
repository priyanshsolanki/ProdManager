// src/api/authService.js
import { toast } from 'react-toastify';
import axiosInstance from '../axiosInstance';

const handleApiError = (error, fallbackMessage = 'Something went wrong') => {
  const message = error?.response?.data?.msg || fallbackMessage;
  toast.error(message);
  throw new Error(message);
};

const authService = {
  /**
   * Register a new user
   * @param {Object} data { name, gender, dob, email, password, role }
   */
  register: async (data) => {
    try {
      const res = await axiosInstance.post('/api/auth/register', data);
      toast.success('Registered successfully!');
      return {
        ...data,
        jwtToken: res.data.token,
      };
    } catch (error) {
      handleApiError(error, error.response.data.error || 'Registration failed');
    }
  },

  /**
   * Login step 1 - send email/password and receive OTP token
   * @param {String} email
   * @param {String} password
   */
  authenticate: async (email, password) => {
    try {
      const res = await axiosInstance.post('/api/auth/login', { email, password });
      toast.success('Login successfull!');
      return {
        email,
        jwtToken: res.data.token,
      };
    } catch (error) {
      handleApiError(error, 'Login failed');
    }
  },
 /**
   * Logout user
   */
  logout: () => {
    localStorage.removeItem('auth');
    localStorage.removeItem('token');
    toast.success('Logged out successfully!');
  },
};

// Named exports for direct use with AuthContext
export const {
  register,
  authenticate,
  logout,
} = authService;

export default authService;
