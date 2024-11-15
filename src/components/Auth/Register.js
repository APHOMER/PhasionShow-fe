// src/components/Auth/Register.js

import React, { useState } from 'react';
import { register } from '../../utils/api';
import { Link, useNavigate } from 'react-router-dom';

import "../../styles/login.css";

const Register = ({ setAuthToken }) => {
  const navigate = useNavigate()

  const [formInputs, setFormInputs] = useState({
    "firstName": "",
    "lastName": "",
    "email": "",
    // "dateOfBirth": "",
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
    const body = {
      name: formInputs.firstName + " " + formInputs.lastName,
      email: formInputs.email,
      password: formInputs.password,
      confirmPassword: formInputs.confirmPassword
    }

    e.preventDefault();
    try {
      const { data } = await register(body);
      setAuthToken(data.token);
      navigate("/user/signup")
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main>
      <div className="page-wrapper">
        <section className="page-content">
          <header>
            <h1>Events</h1>
          </header>
          <main>
            <div className='form-wrapper'>
              <header className='form-header'>
                <h2>Create account</h2>
              </header>
              <form className='form' onSubmit={handleSubmit}>
                <div className="form-inputs">
                  <div className="input-wrapper">
                    <label htmlFor="first-name">First name</label>
                    <input
                      id="first-name"
                      type="text"
                      name="firstName"
                      value={formInputs.firstName}
                      onChange={handleInputChange}
                      placeholder="John"
                      required
                    />
                  </div>
                  <div className="input-wrapper">
                    <label htmlFor="lastName">Last name</label>
                    <input
                      id="last-name"
                      type="text"
                      name="lastName"
                      value={formInputs.lastName}
                      onChange={handleInputChange}
                      placeholder="Doe"
                      required
                    />
                  </div>
                  <div className="input-wrapper">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formInputs.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="input-wrapper">
                    <label htmlFor="date-of-birth">Date of birth <span className="date-format">(MM/DD/YY)</span></label>
                    <input
                      id="date-of-birth"
                      type="date"
                      name="dateOfBirth"
                      value={formInputs.dateOfBirth}
                      onChange={handleInputChange}
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
                      required
                    />
                  </div>
                  <div className="input-wrapper">
                    <label htmlFor="confirm-password">Confirm password</label>
                    <input
                      id="confirm-password"
                      type="password"
                      name="confirmPassword"
                      value={formInputs.confirmPassword}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <Link
                  to="/user/forgotpassword"
                  className="forgot-password-link"
                >Forgot password?</Link>

                <div className="checkbox-wrapper">
                  <input
                    id="remember-me"
                    type="checkbox"
                    name="rememberMe"
                    value={shouldRememberMe}
                    onChange={() => setShouldRememberMe(prevState => !prevState)}
                  />
                  <label htmlFor="remember-me">Remember me</label>
                </div>
                <div className="checkbox-wrapper">
                  <input
                    id="terms"
                    type="checkbox"
                    name="terms"
                    value={agreeToTerms}
                    onChange={() => setAgreeToTerms(prevState => !prevState)}
                  />
                  <label htmlFor="terms">I agree to all
                    the <Link to="/">Terms</Link> and <Link to="/">Privacy policy</Link>
                  </label>
                </div>

                <button
                  type="submit"
                  className="submit-btn"
                >Create account</button>

                <div className="form-login-options">
                  <button
                    type="button"
                    className="external-login-btn"
                  >
                    <figure>
                      <img
                        src="/assets/images/google.png"
                        alt="Google icon"
                      />
                      <figcaption>Login with Google</figcaption>
                    </figure>
                  </button>
                </div>
              </form>
            </div>
          </main>

          <p className="login-text">Don&apos;t have an account? <Link to="/user/login">Log in</Link></p>
        </section>
        <img
          src="/assets/images/banner-image.jpg"
          alt=""
          className="banner-image"
        />
      </div>
    </main>
  );
};

export default Register;
