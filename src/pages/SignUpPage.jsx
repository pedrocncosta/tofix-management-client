import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

function Signuppage() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [profileType, setProfileType] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handlePassword = (e) => setPassword(e.target.value);
  const handleUsername = (e) => setUsername(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleProfileType = (e) => setProfileType(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { username, password, email, profileType };

    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/signup`, body)
      .then(() => {
        navigate("/login");
      })
      .catch((err) => {
        setErrorMessage(err.response.data.errorMessage);
      });
  };

  return (
    <Form className="EditProjectPage login-form" onSubmit={handleSubmit}>
      <h1 className="text-center">Sign Up</h1>
      <FormGroup>
        <Label htmlFor="username">Name</Label>
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

      <FormGroup>
        <Label htmlFor="email">Email</Label>
        <Input type="email" name="email" value={email} onChange={handleEmail} />
      </FormGroup>

      <FormGroup>
        <Label htmlFor={profileType}>Role</Label>
        <Input type="select" name="" onChange={handleProfileType}>
          <option value=""></option>
          <option value="user">User</option>
          <option value="admin">Professional</option>
        </Input>
      </FormGroup>

      <FormGroup>
        <Button className="myButtons btn-lg mb-4" block type="submit">
          Sign Up
        </Button>
      </FormGroup>

      <FormGroup>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <p className="text-center ">Already have an account?</p>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <Button className="myButtons btn-lg " block type="submit">
            Log in
          </Button>
        </Link>
      </FormGroup>
    </Form>
  );
}

export default Signuppage;
