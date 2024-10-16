// src/utils/api.js

import axios from 'axios';

const API_URL = "https://phasionshow-be.onrender.com";

export const register = (userData) => axios.post(`${API_URL}/user/signup`, userData);
export const login = (userData) => axios.post(`${API_URL}/user/login`, userData);
export const createShow = (showData, token) => axios.post(`${API_URL}/show`, showData, {
  headers: { Authorization: `Bearer ${token}` }
});
export const getShows = (token) => axios.get(`${API_URL}/shows`, {
  headers: { Authorization: `Bearer ${token}` }
});
export const getUserProfile = (token) => axios.get(`${API_URL}/users`, {
  headers: { Authorization: `Bearer ${token}` }
});
 