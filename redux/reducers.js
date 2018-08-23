import { combineReducers } from "redux";
import bageReducer from "./bageReducer";
import vendasReducer from "./vendasReducer";
import prediosReducer from "./prediosReducer";
import userReducer from "./userReducer";
export default combineReducers({
  bageReducer,
  vendasReducer,
  prediosReducer,
  userReducer
});
