import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./customerlogin.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Storage from "./Storage";
import { useHistory } from "react-router-dom";
import Logout from "./Logout";
export default function Employee() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [model, setModel] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      let val = JSON.parse(isLoggedIn);
      setEmail(val.email);
    }
  }, []);
  function validateForm() {
    return name.length > 0 && age.length > 0 && model.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    let status = Storage.AppendStoarage("Employee", {
      name,
      age,
      model,
      email
    });
    alert("SuccessFully added data");
    history.push("/CustomerData");
  }

  return (
    <div className="Login">
      <Logout />
      <h5 className="txtCenter">Employee</h5>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Name</Form.Label>
          <Form.Control
            autoFocus
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="age">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="age">
          <Form.Label>Model</Form.Label>
          <Form.Control
            type="model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Add Employee
        </Button>
      </Form>
    </div>
  );
}
