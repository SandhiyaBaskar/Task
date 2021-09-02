import React, { useEffect } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import MainPage from "./MainPage";
import CustomerLogin from "./CustomerLogin";
import AdminLogin from "./AdminLogin";
import Register from "./Register";
import Employee from "./Employee";
import CustomerData from "./CustomerData";
function App() {
  const alert = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (
    <div className="jumbotron">
      <div className="container">
        <div className="col-md-8 offset-md-2">
          {alert.message && (
            <div className={`alert ${alert.type}`}>{alert.message}</div>
          )}
          <Router>
            <Switch>
              <Route exact path="/" component={MainPage} />
              <Route path="/Register" component={Register} />
              <Route path="/CustomerLogin" component={CustomerLogin} />
              <Route path="/AdminLogin" component={AdminLogin} />
              <Route path="/Employee" component={Employee} />
              <Route path="/CustomerData" component={AdminLogin} />
              <Redirect from="*" to="/" />
              <Route exact path="/" />
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}

export { App };
