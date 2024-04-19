// Login.js
import React from 'react';
import { useAuth } from './AuthContext';

const Login = () => {
  const { login } = useAuth();

  const handleLogin = () => {
    login('rohan');
  };

  return <button id="login-btn" onClick={handleLogin}>Login</button>;
};

export default Login;
