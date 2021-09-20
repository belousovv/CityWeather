import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import weatherReducer from "./weather-reducer";
import searchReducer from "./search-reducer";

export type InferValueType<T> = T extends {[key: string]: infer U} ? U : never;

export type StateType = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
    weather: weatherReducer,
    search: searchReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
