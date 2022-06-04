import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

function Loginpage() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handlePassword = (e) => setPassword(e.target.value);
  const handleUsername = (e) => setUsername(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { username, password };

    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/login`, body)
      .then((response) => {
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/");
      })
      .catch((err) => {
        setErrorMessage(err.response.data.errorMessage);
      });
  };

  return (
    <Form className="login-form" onSubmit={handleSubmit}>
      <h1 className="text-center">Login</h1>

      <FormGroup>
        <Label htmlFor="username">Username</Label>
        <Input
          type="text"
          name="username"
          value={username}
          onChange={handleUsername}
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />
      </FormGroup>

      <Button className="mt-3 mb-3" block type="submit">
        Login
      </Button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <p className="text-center">
        Don't have an account? <Link to="/signup"> Sign up</Link>
      </p>
    </Form>
  );
}

export default Loginpage;
