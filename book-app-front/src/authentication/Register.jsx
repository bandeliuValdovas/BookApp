import axios from "axios";

const Register = (firstName, lastName, email, password) => { 

  axios
    .post("http://localhost:8080/api/v1/auth/register", {firstName, lastName, email, password})
    .then((response) => {
      console.log(response);
    })    
    .catch((error) => {
      console.log(error);      
    });
};

export default Register;