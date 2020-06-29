import { combineReducers } from "redux";
import authReducer from './authReducer';
import eventReducer from './eventReducer';



const rootReducer = combineReducers({
    authReducer,
    eventReducer    
  })

export default rootReducer;