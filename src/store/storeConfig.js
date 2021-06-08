import { createStore, applyMiddleware, combineReducers } from "redux";
import Thunk from "redux-thunk";
import tripDetailsReducer from "./trip-details/tripDetailsReducer.js";

const rootReducer = combineReducers({
  trip: tripDetailsReducer,
});

const middlewares = applyMiddleware(Thunk);

const store = createStore(rootReducer, middlewares);

export default store;
