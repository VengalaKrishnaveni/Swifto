/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import '../assets/Login.css'
import logoImg from '../assets/swifto-logo.png';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();
    console.log("Login");
    Axios.post('http://localhost:3001/login', {
      username: username,
      password: password
    })
      .then((response) => {
        if (response.data.message) {
          console.log(response);
          localStorage.setItem('user', response.config.username);
          localStorage.setItem('token', response.data.accessToken);
          navigate('/providers');
        } else {
          setError(response.data.error);
        }
      })
      .catch((err) => {
        setError('An error occurred while logging in.');
      });
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="welcome-message">
          <h2>Welcome Back!</h2>
          <img className='logo' src={logoImg}></img>
          <p>Login to your account to access our services.</p>
        </div>
        <form className="form" onSubmit={loginUser}>
          <input
            placeholder="Username"
            className="input"
            type="text"
            onChange={(event) => setUsername(event.target.value)}
          />
          <input
            placeholder="Password"
            className="input"
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <button className="btn" type="submit">
            Login
          </button>
        </form>
        {error && <p className="error-message">{error}</p>}
        <p>
          Don't have an account? <Link to="/register">Register here</Link>.
        </p>
      </div>
    </div>
  );
};

export default Login;
