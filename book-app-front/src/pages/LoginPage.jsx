import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Login from "../authentication/Login";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await Login(username, password);
    } catch (error) {
      setError("Login failed. Please check username and password");
    }
  };

  return (
    <Form onSubmit={handleLogin}>
      <Form.Text className="text-muted">
        If you have no accoun please go to{" "}
        <a href="/registration">registration</a> page.
      </Form.Text>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </Form.Group>

      <Button variant="success" type="submit">
        Login
      </Button>
      {error && <div style={{ color: "red" }}>{error}</div>}
    </Form>
  );
}

export default LoginPage;
