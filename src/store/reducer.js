import { EDIT_USER } from "./actions";

export function userReducer(state = {}, action) {
  switch (action.type) {
    case EDIT_USER:
      return Object.assign({}, state, { s: 1 });
    default:
      return state;
  }
}
