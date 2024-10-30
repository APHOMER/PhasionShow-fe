// src/components/Auth/Login.js

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { login } from '../../utils/api';

import "../../styles/login.css";


const Login = ({ setAuthToken }) => {
  const navigate = useNavigate()

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
      const data = {email:formInputs.email, password:formInputs.password}
      let retro = (await login(data)).data
      console.log({HEREEEE: retro})
      setAuthToken(retro.token);
      sessionStorage.setItem("token", retro.token)
      navigate("/")
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="page-content">
          <header>
            <h1>Events</h1>
          </header>
          <main>

            <div className="form-wrapper">
              <header className="form-header">
                <h2>Login</h2>
                <p>Welcome Back to the stylish entry point of our fashion ticketing app!👋</p>
              </header>
              <form
                onSubmit={handleSubmit}
                className="form"
              >
                <div className="input-wrapper">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formInputs.email}
                    onChange={handleInputChange}
                    placeholder="example@email.com"
                    required
                  />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    type="password"
                    name="password"
                    value={formInputs.password}
                    onChange={handleInputChange}
                    placeholder="At least 8 characters"
                    required
                  />
                </div>
                <Link
                  to="/user/forgotpassword"
                  className="forgot-password-link"
                >Forgot Password</Link>
                <button
                  type="submit"
                  className="submit-btn"
                >Sign in</button>
              </form>

              <div className="form-login-options">
                <span className="or-text">Or</span>
                <button className="external-login-btn">
                  <figure>
                    <img
                      src="/assets/images/google1.png"
                      alt="Google icon"
                    />
                    <figcaption>Sign in with Google</figcaption>
                  </figure>
                </button>
                <button className="external-login-btn">
                  <figure>
                    <img
                      src="/assets/images/facebook.png"
                      alt="Facebook icon"
                    />
                    <figcaption>Sign in with Facebook</figcaption>
                  </figure>
                </button>
                <div className="bottom-text">
                  <p>Don't you have an account?</p>
                  <Link to="/user/signup">Sign up</Link>
                </div>
              </div>
            </div>
          </main>
        </div>

        <img
          src="/assets/images/login-banner.jpg"
          alt=""
          className="banner-image"
        />
      </div>
    </>
  );
};

export default Login;
