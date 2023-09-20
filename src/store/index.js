import { createStore, combineReducers } from "redux";
import formReducer from "../LoginScreen/reducers";

const rootReducer = combineReducers({
  formData: formReducer,
});

const store = createStore(rootReducer);

export default store;
