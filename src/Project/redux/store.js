import { applyMiddleware, createStore } from "redux";
import allReducers from "./index"
import { middlewareExample } from "./middleware/customMiddleware";

const store = createStore(
    allReducers, applyMiddleware(middlewareExample) 
)

store.getState()
export default store