// src/components/Auth/Login.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { login } from '../../utils/api';

import "../../styles/login.css";


const Login = ({ setAuthToken }) => {

  const [formInputs, setFormInputs] = useState({
    "email": "",
    "password": ""
  });

  const handleInputChange = (event) => {
    setFormInputs(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login({ email: formInputs.email, password: formInputs.password });
      setAuthToken(data.token);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
