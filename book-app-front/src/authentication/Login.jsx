// import { UserContext } from "./UserInfoProvider";
// import { useContext } from "react";
import axios from "axios";
import axiosInstance from "./axiosInstance";

const Login = async (name, password) => {
  // const {userinfo, setUserInfo} = useContext(UserContext);
  console.log("tut dohodit");

  axiosInstance
     .post("/api/v1/auth/authenticate", { name, password})
   // .post("http://localhost:8080/api/v1/auth/authenticate", { name: "adas", password: "asd"})
 //   .post("http://localhost:8080/api/v1/auth/authenticate", { name, password})
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
