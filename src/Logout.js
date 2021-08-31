import ReactDOM from "react-dom";
import React from "react";
import "./customerlogin.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./MainPage";
export default function Logout() {
  const history = useHistory();
  function logout() {
    localStorage.removeItem("isLoggedIn");
    history.push("/");
  }

  return (
    <div style={{ float: "right" }}>
      <Button onClick={(e) => logout()}>Logout</Button>
    </div>
  );
}
