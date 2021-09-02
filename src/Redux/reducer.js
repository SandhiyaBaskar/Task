import * as actions from "./actionTypes";
let lastId = 0;
export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.USER_ADD:
      return [
        ...state,
        {
          id: ++lastId,
          email: action.payload.email,
          password: action.payload.password,
          type: action.payload.type,
          isLoggedIn: false
        }
      ];
    case actions.REMOVE_USER:
      state.filter((user) => user.email === action.payload.email);
    /* store.dispatch(userAdd("email", "password", "type"));
unsubscribe();
store.dispatch({
  type: actions.CHECK_USER,
  payload: {
    email: "sandhiya@gmail.com",
    password: "Sandhiya",
    type: "Customer"
  }
});*/
    default:
      return state;
  }
}
