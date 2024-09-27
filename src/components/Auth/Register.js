// src/components/Auth/Register.js

import React, { useState } from 'react';
import { register } from '../../utils/api';
import { Link } from 'react-router-dom';

import "../../styles/register.css";

const Register = ({ setAuthToken }) => {

  const [formInputs, setFormInputs] = useState({
    "firstName": "",
    "lastName": "",
    "email": "",
    "dateOfBirth": "",
    "password": "",
    "confirmPassword": ""
  });

  const [shouldRememberMe, setShouldRememberMe] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleInputChange = (event) => {
    setFormInputs(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }));
  }

  const handleSubmit = async (e) => {

    const { name, email, password } = formInputs;

    e.preventDefault();
    try {
      const { data } = await register({ name, email, password });
      setAuthToken(data.token);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
