import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./customerlogin.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { userAdd } from "./Redux/actions";
import store from "./Redux/store";
import { useHistory } from "react-router-dom";
import * as actions from "./Redux/actionTypes";
export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("");
  const history = useHistory();

  function validateForm() {
    return email.length > 0 && password.length > 0 && type.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    let existingData = store.getState();
    var duplicateCheck = existingData.filter(function (x) {
      return x.email === email && x.password === password && x.type === type;
    });

    console.log(" check store ", store.getState());
    console.log("duplicate check ", duplicateCheck);
    if (!duplicateCheck.length) {
      store.dispatch(userAdd(email, password, type));
      console.log(" add store ", store.getState());
      if (type == "Admin") {
        history.push("/CustomerData");
      } else {
        history.push("/Employee");
      }
    } else {
      alert("Data already exists");
    }
  }
  return (
    <div className="Login">
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
        <Form.Group size="lg" controlId="type">
          <Form.Label>Type</Form.Label>
          <Form.Control
            as="select"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="">Select Type</option>
            <option value="Admin">Admin</option>
            <option value="Customer">Customer</option>
          </Form.Control>
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Register
        </Button>
      </Form>
    </div>
  );
}
