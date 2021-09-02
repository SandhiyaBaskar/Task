import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./customerlogin.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Storage from "./Storage";
import { useHistory } from "react-router-dom";
import store from "./Redux/store";
export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      let val = JSON.parse(isLoggedIn);
      if (val.type === "Admin") {
        history.push("/CustomerData");
      } else {
        localStorage.removeItem("isLoggedIn");
      }
    }
  }, []);
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    let existingData = store.getState();
    var status = existingData.filter(function (x) {
      return x.email === email && x.password === password;
    });
    if (status.length > 0 && status[0].type === "Admin") {
      localStorage.setItem(
        "isLoggedIn",
        JSON.stringify({ email, password, type: "Admin" })
      );
      history.push("/CustomerData");
    } else {
      alert("Incorrect password");
    }
  }

  return (
    <div className="Login">
      <h5 className="txtCenter">Admin Login</h5>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}
