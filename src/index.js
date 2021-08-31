import ReactDOM from "react-dom";
import MainPage from "./MainPage";
import CustomerLogin from "./CustomerLogin";
import AdminLogin from "./AdminLogin";
import Register from "./Register";
import Employee from "./Employee";
import CustomerData from "./CustomerData";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const rootElement = document.getElementById("root");

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/">
        <MainPage />
      </Route>
      <Route path="/Register">
        <Register />
      </Route>
      <Route path="/CustomerLogin">
        <CustomerLogin />
      </Route>
      <Route path="/AdminLogin">
        <AdminLogin />
      </Route>
      <Route path="/Employee">
        <Employee />
      </Route>
      <Route path="/CustomerData">
        <CustomerData />
      </Route>
    </Switch>
  </Router>,
  rootElement
);
