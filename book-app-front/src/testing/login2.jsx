import axios from 'axios';

const login2 = async (username, password) => {
  try {
    const response = await axios.post('http://localhost:8080/api/v1/auth/authenticate', { username, password });
    const { token } = response.data;
    // Store the JWT token in localStorage
    localStorage.setItem('jwtToken', token);
  } catch (error) {
    console.error('Login error:', error);
  }
};

export default login2;
