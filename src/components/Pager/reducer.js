import { handleAction, handleActions } from "redux-actions";
import { SAVEPAGER, SAVEPAGERLIST, SAVEPAGERFIELD, CURRENTURL } from "./action";
import { combineReducers } from "redux";

// handleAction 处理action 返回一个reducer
// handleActions 处理多个action 返回一个reducer

const defaultState = {
  current: 1,
  pageSize: 10,
  total: 0,
  fields: {},
  list: [],
};

const pagerUrlReducer = handleAction(
  CURRENTURL,
  (state, action) => {
    console.log(action, state);
    return Object.assign(action.url);
  },
  "https://segmentfault.com/a/1190000013026224"
);

const pagerReducer = handleActions(
  {
    [SAVEPAGER]: (state, action) => ({ ...state, current: action.current }),
    [SAVEPAGERLIST]: (state, action) => ({ ...state, current: action.current }),
    [SAVEPAGERFIELD]: (state, action) => ({
      ...state,
      current: action.current,
    }),
  },
  defaultState
);

const reducer = combineReducers({
  pagerUrlReducer,
  pagerReducer,
});

export default reducer;
