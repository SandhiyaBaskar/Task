import * as actions from "./actionTypes";
/* export function userAdd(description) {
  return {
    type: actions.USER_ADD,
    payload: {
      email: "sandhiya@gmail.com",
      password: "Sandhiya",
      type: "Admin"
    }
  };
} */
export const userAdd = (email, password, type) => ({
  type: actions.USER_ADD,
  payload: {
    email: email,
    password: password,
    type: type
  }
});
