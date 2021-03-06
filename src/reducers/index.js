import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import memberReducer from './member'
import regisReducer from './regis'
import categoryReducer from './category'
import authReducer from './auth'

export default combineReducers({
  form: formReducer,
  member: memberReducer,
  regis: regisReducer,
  categories: categoryReducer,
  auth: authReducer
})