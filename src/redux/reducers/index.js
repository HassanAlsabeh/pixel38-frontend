import { combineReducers } from "redux";
import { userReducer } from "./userReducer";


const reducers = combineReducers({
  users: userReducer,
  registerusers: userReducer,
});

export default reducers;
