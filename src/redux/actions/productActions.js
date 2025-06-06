import { toast } from 'react-toastify';
import {
  CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, CREATE_PRODUCT_FAILURE,
  FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE,
  UPDATE_PRODUCT_REQUEST, UPDATE_PRODUCT_SUCCESS, UPDATE_PRODUCT_FAILURE,
  DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE
} from './types';
import axiosInstance from '../../axiosInstance';

// Create Product
export const createProduct = (productData) => async (dispatch) => {
  dispatch({ type: CREATE_PRODUCT_REQUEST });
  try {
    const { data } = await axiosInstance.post('/api/products', productData);
    dispatch({ type: CREATE_PRODUCT_SUCCESS, payload: data });
    toast.success('Product created!');
  } catch (error) {
    dispatch({ type: CREATE_PRODUCT_FAILURE, payload: error.message });
    toast.error('Failed to create product');
  }
};

// Fetch Products
export const fetchProducts = () => async (dispatch) => {
  dispatch({ type: FETCH_PRODUCTS_REQUEST });
  try {
    const response = await axiosInstance.get('/api/products');
    console.log(response)
    dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: error.message });
    toast.error('Failed to load products');
  }
};

// Update Product
export const updateProduct = (id, productData) => async (dispatch) => {
  dispatch({ type: UPDATE_PRODUCT_REQUEST });
  try {
    const { data } = await axiosInstance.put(`/api/products/${id}`, productData);
    dispatch({ type: UPDATE_PRODUCT_SUCCESS, payload: data });
    toast.success('Product updated!');
  } catch (error) {
    dispatch({ type: UPDATE_PRODUCT_FAILURE, payload: error.message });
    toast.error('Failed to update product');
  }
};

// Delete Product
export const deleteProduct = (id) => async (dispatch) => {
  dispatch({ type: DELETE_PRODUCT_REQUEST });
  try {
    await axiosInstance.delete(`/api/products/${id}`);
    dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: id });
    toast.success('Product deleted!');
  } catch (error) {
    dispatch({ type: DELETE_PRODUCT_FAILURE, payload: error.message });
    toast.error('Failed to delete product');
  }
};
