// import { UserContext } from "./UserInfoProvider";
// import { useContext } from "react";
import axiosInstance from "./axiosInstance";
import axios from "axios";

const Login = async (email, password) => {
  // const {userinfo, setUserInfo} = useContext(UserContext);
  console.log("tut dohodit");

  axios
   //  .post("/api/v1/auth/authenticate", { email, password})
   // .post("http://localhost:8080/api/v1/auth/authenticate", { name: "adas", password: "asd"})
    .post("http://localhost:8080/api/v1/auth/authenticate", { email, password})
    .then((response) => {      
      const token = response.data.token;
      localStorage.setItem("jwtToken", token);
      console.log(token);
      // setUserInfo(response.data);
      // console.log(userinfo);
    })    
    .catch((error) => {
      console.log(error);
      throw new Error("Login failed");
    });
};
export default Login;
