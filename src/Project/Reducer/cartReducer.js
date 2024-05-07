import React, { Component } from 'react';
import { useDispatch, useSelector } from "react-redux"
import {decreaseQty,addQty} from "../Action/productAction"
 

const cart = [];

const CartReducer = (state = cart, action) =>{
   
    switch(action.type){
        case "add to cart":
            return [...state,action.newProduct]
        case "delete from cart":
            return state.filter((item, index) => index!== action.index) 
           
            case "decrease Qty In The Cart":
                    const newProducts2 = [...state]
                    if( newProducts2[action.index].qtyInTheCard>0){
                    // newProducts2[action.index].qty = newProducts2[action.index].qty+1
                    newProducts2[action.index].qtyInTheCard = newProducts2[action.index].qtyInTheCard-1
                    return newProducts2
                }
                case "add Qty In The Card":
                    const newProducts3 = [...state]
                    if( newProducts3[action.index].qtyInTheCard>0){
                    // newProducts3[action.index].qty = newProducts3[action.index].qty-1
                    newProducts3[action.index].qtyInTheCard = newProducts3[action.index].qtyInTheCard+1
                    
                    }
                    return newProducts3
        default:
            return state
    }
}
export default CartReducer