// src/utils/api.js

import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const register = (userData) => axios.post(`${API_URL}/auth/register`, userData);
export const login = (userData) => axios.post(`${API_URL}/auth/login`, userData);
export const createShow = (showData, token) => axios.post(`${API_URL}/shows/create`, showData, {
  headers: { Authorization: `Bearer ${token}` }
});
export const getShows = () => axios.get(`${API_URL}/shows`);
export const getUserProfile = (token) => axios.get(`${API_URL}/users`, {
  headers: { Authorization: `Bearer ${token}` }
});
 