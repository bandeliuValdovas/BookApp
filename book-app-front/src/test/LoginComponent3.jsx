// LoginComponent2.jsx
import React from 'react';
import Login from './Login';
import axios from 'axios';


const LoginComponent2 = () => {
  const handleLogin = async (credentials) => {
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/authenticate', credentials);
      console.log('Login successful:', response.data);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return <Login onLogin={handleLogin} />;
};

export default LoginComponent2;
