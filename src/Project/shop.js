import { useDispatch, useSelector } from "react-redux"
import React from "react"
 import { useNavigate } from "react-router-dom"
// import Button from 'react-bootstrap/Button';
// import allReducers from "./redux/index"
import { useState } from "react"
import { addToCart } from "./Action/CartAction"
import { decreaseQty } from "./Action/productAction"
import { Link } from "react-router-dom"

export default function Shop() {
  
    const products = useSelector((state) => state.products)
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch()
    const navigate=useNavigate()
    const addToTheCart = (item,index) => {
       const findTheItem=cart.find(i=>i.id==item.id)
       if(!findTheItem){
        dispatch(addToCart(item,index))
       }

    }
    return (
        <>
                                                                                                                                                                                                                 
                
                {/* <table> */}
                <button type="button" class="btn btn-outline-info"><Link to="/cartDetails">לעגלת הקניות </Link></button>
                
                <div id="asdf">
                    {products.map((item, index) => (
                        <>
                        
                            <tr>
                                <div id="cards" style={{ "border-color": "pink"}}>
                                    
                                <div id="btn" class="card" style={{"width": "300px","height":"500px","alignSelf":"center"}}>
                                    <td><img src={item.image}></img></td>
                                    <td><h3>{item.name}</h3></td>
                                    <br></br>
                                    <td><h4>מחיר:₪{item.price}</h4></td>
                              
                                    <td><h4 id="des">{item.description}</h4></td>
                                    {/* <td><h4>כמות:{item.qty}</h4></td> */}
                                    <button  className="btn btn-light text-dark btn-lg btn-block"   onClick={() => {addToTheCart(item,index); dispatch(decreaseQty(item.id))}}>הוספה לעגלה</button>
                                    {/* <button className="btn btn-light text-dark btn-lg btn-block" onClick={() => { dispatch(addToCart(item)); dispatch(addSum(item.code)); }}>ADD TO CART</button> */}
                                    {/* <button onClick={() => { dispatch(addToCart(index)); dispatch(decreaseQty(index)) }}> Add to cart</button> */}
                                    {/* <Button variant="outline-primary" id={item.id} onClick={(e)=>{addToCart(e.target.id) }}>Add to cart</Button>{' '} */}
                                    
                                </div>
                            </div>
                        </tr>
                        </>
                    ))}</div>
                {/* </table> */}
            

        </>
    )
}
