export default function home(state = {}, action) {
  switch (action.type) {
    case "UPDATE_STATE":
      return action.data;
    default:
      return state;
  }
}
