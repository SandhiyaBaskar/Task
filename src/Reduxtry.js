import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import store from "./Redux/store";
import MainPage from "./MainPage";
import CustomerLogin from "./CustomerLogin";
import AdminLogin from "./AdminLogin";
import Register from "./Register";
import Employee from "./Employee";
import CustomerData from "./CustomerData";
//testing store ,action
import * as actions from "./Redux/actionTypes";
import { userAdd } from "./Redux/actions";
/* const unsubscribe = store.subscribe(() => {
  console.log("Store get changed ", store.getState());
}); */
/* store.dispatch({
  type: actions.USER_ADD,
  payload: {
    email: "sandhiya@gmail.com",
    password: "Sandhiya",
    type: "Admin"
  }
}); */
/* store.dispatch(userAdd("email", "password", "type"));
unsubscribe();
store.dispatch({
  type: actions.CHECK_USER,
  payload: {
    email: "sandhiya@gmail.com",
    password: "Sandhiya",
    type: "Customer"
  }
});
console.log("Store ", store.getState()); */
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
