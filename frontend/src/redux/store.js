// store.js
import { createStore, combineReducers } from "redux";
import { jobReducer } from "./reducer";

const rootReducer = combineReducers({
  helpers: jobReducer,
  // ... other reducers if any
});

const store = createStore(rootReducer);

export default store;
