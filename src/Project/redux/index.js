import { combineReducers } from "redux";
import cartReducer from "../Reducer/cartReducer"
import productsReducer from "../Reducer/productsReducer"
const allReducers = combineReducers({
   
    products: productsReducer,
    cart:cartReducer
})                                                                                             

export default allReducers