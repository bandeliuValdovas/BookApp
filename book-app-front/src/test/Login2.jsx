// Login.jsx
import { useState } from 'react';
import axios from 'axios';

const Login2 = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/authenticate', credentials);
      console.log(response.data);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" onChange={handleChange} value={credentials.username} />
      <input type="password" name="password" onChange={handleChange} value={credentials.password} />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login2;
