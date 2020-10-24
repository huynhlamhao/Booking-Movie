import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import movie from "../redux/reducers/movie";
import cinema from "../redux/reducers/cinema";
// create root
const Reducer = combineReducers({ movie, cinema });
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(Reducer, composeEnhancers(applyMiddleware(thunk)));
export default store;
