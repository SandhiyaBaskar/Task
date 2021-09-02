import React, { useState, useEffect } from "react";
import Storage from "./Storage";
import "./customerlogin.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";
import Logout from "./Logout";
import axios from "axios";
import Table from "react-bootstrap/Table";
export default function CustomerData() {
  const [value, setValue] = useState([]);
  const [onlineData, setOnlineData] = useState([]);
  const history = useHistory();
  useEffect(() => {
    initialize();
  }, []);
  async function initialize() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    console.log("is  ", isLoggedIn);
    if (isLoggedIn) {
      let result = [];
      let val = JSON.parse(isLoggedIn);
      if (val.type !== "Admin") {
        result = Storage.ReadCustomerData("Employee", val.email);
        setValue([...result]);
      } else {
        result = JSON.parse(localStorage.getItem("Employee")) || [];
        setValue([...result]);
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users`
        );
        setOnlineData(response.data);
      }
      return result;
    } else {
      history.push("/");
    }
    return [];
  }
  return (
    <div className="Login">
      <Button onClick={(e) => history.push("/Employee")}>Add Employee</Button>
      <Logout />
      <h5 className="txtCenter">Report</h5>
      <h6 className="txtCenter">Customer Data</h6>
      <Table striped bordered hover size="sm">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Model</th>
          </tr>
          {value.map((element) => (
            <tr>
              <td>{element.name}</td>
              <td>{element.age}</td>
              <td>{element.model}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      {onlineData.length ? (
        <div>
          <h6 className="txtCenter">Online Data</h6>
          <Table striped bordered hover size="sm">
            <tbody>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
              {onlineData.map((element) => (
                <tr>
                  <td>{element.id}</td>
                  <td>{element.name}</td>
                  <td>{element.email}</td>
                  <td>{element.phone}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
