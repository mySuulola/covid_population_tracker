import { combineReducers } from "redux";
import authReducer from './authReducer';
import eventReducer from './eventReducer';
import styleReducer from './styleReducer';



const rootReducer = combineReducers({
    authReducer,
    eventReducer,
    styleReducer    
  })

export default rootReducer;