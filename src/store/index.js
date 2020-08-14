import { createStore, combineReducers } from "redux";
import { userReducer } from "./reducer";

const rootReducer = combineReducers({
  userReducer,
});

const store = createStore(rootReducer);

store.subscribe(() => {
  // console.log("// 可以手动订阅更新，也可以事件绑定到视图层。");
  // console.log("store.subscribe=======");
  console.log(store.getState());
});

store.asyncReducers = { userReducer };

export default store;
