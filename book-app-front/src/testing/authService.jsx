import axios from 'axios';

const login = async (name, password) => {
  
    axios.post('http://localhost:8080/api/v1/auth/authenticate',
         { name, password })
         .then((response) => {
            
            console.log(response.data);
            const token = response.data.token;
            localStorage.setItem('jwtToken', token);
            
            window.location.href = '/p';            

         }).catch((error) => {
            console.log(error);
            throw new Error('Login failed');
         });


};

const logout = () => {
  localStorage.removeItem('jwtToken');
};

export { login, logout };
