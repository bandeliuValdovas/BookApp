import axios from "axios";
import { useEffect } from "react";
import {jwtDecode} from "jwt-decode";
import {request, setAuthToken} from "./axios_helper";

const Login = () => {
console.log("tut oshibka?")
    useEffect(() => {
        axios
          .get("http://localhost:8080/api/v1/demo-controller/demo",
            {},
            {withCredentials: true}
          )
          .then((data) => {
            console.log(data);

          })
          .catch((error) => {
            console.log(error.response);

    });           
          
      }, []);



  const login = () => {
    axios
      .post("http://localhost:8080/api/v1/auth/authenticate", {
        name: "adas",
        password: "asd",
      })
      .then((response) => {
        console.log(response);
        const token = console.log(jwtDecode(response.data.token));
        setAuthToken(token);
        
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <button onClick={() => login()}>authenticate</button>
    </>
  );
};
export default Login;
