import { combineReducers } from "redux";
import { postReducer } from "./post";
import { pastaReducer } from "./pasta";

export const reducer = combineReducers({
    posts: postReducer,
    client: pastaReducer,
});