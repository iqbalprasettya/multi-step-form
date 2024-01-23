import { combineReducers } from "redux";
import loginReducers from "./pages/Login/reducers";

const rootReducer = combineReducers({
  loginReducers: loginReducers,
});

export default rootReducer;
