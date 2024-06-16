// src/Login.js

import { useState } from "react";
import Login from "../authentication/Login";

const LoginPage = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g., send login details to the server
    console.log("Username:", name);
    console.log("Password:", password);
    Login(name, password);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "300px",
          width: "100%",
        }}
      >
        <h2>Login</h2>
        <label>
          Username:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ padding: "8px", margin: "8px 0" }}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: "8px", margin: "8px 0" }}
          />
        </label>
        <button 
        type="submit" 
        style={{ padding: "10px", margin: "8px 0" }}
        onClick={()=>{handleSubmit}}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
