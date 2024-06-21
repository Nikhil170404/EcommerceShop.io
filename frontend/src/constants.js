// Define constants for API endpoints

// Set BASE_URL based on environment
export const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5000' // Local development URL
    : 'https://ecommerceshop-io.onrender.com'; // Your Render backend URL

export const PRODUCTS_URL = '/api/products';
export const USERS_URL = '/api/users';
export const ORDERS_URL = '/api/orders';
export const PAYPAL_URL = '/api/config/paypal';
