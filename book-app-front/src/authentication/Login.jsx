import axios from "axios";

const Login = (email, password) => { 

  axios
    .post("http://localhost:8080/api/v1/auth/authenticate", { email, password})
    .then((response) => {      
      const token = response.data.token;
      localStorage.setItem("jwtToken", token);
      console.log(token);

    })    
    .catch((error) => {
      console.log(error);
    });
};

export default Login;
