import { useDispatch, useSelector } from "react-redux"
import { index } from "./redux/index"
import { useState } from "react";
import { addQty, decreaseQty, decreaseQty2, decreaseQtyProducts } from "./Action/productAction";
import { addQtyInTheCard, decreaseQtyInTheCart, deleteFromCart } from "./Action/CartAction";
 import minus from "./pictures/minus.png"
 import { Route, Routes, useNavigate } from "react-router-dom"
 import plus from "./pictures/plus.png"
import { Link } from "react-router-dom";
import פח from "./pictures/פח.jpg"
import love from "./pictures/love.png";
import mini from "./pictures/mini.png"
export default function CartDetails() {
    const cartD = useSelector((state) => state.cart);
    const dispatch = useDispatch()
    // const removeFromthecart = (item, index) => {
    //     if (item.qtyInTheCard ===1)
    //         dispatch(deleteFromCart(index))
    // }
    const navigate=useNavigate()
    return (
        <>
            <center>


                {/* <h1>BEAUTY SHOP</h1> */}
 
         
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">name</th>
                            <th scope="col">price</th>
                            <th scope="col">how many?</th>
                            <th scope="col">image</th>
                        </tr>
                    </thead>
                    <button type="button" class="btn btn-outline-info"><Link to="/goToPayment">מעבר לתשלום </Link></button>
                    
                    {cartD.map((item, index) => (
                        <>
                           
                            <tr>
                               
                                    <th scope="row"><h3>{item.name}</h3></th>                                   
                                    <th><h4>{item.price}</h4></th>
                                    <th><h4>{item.qtyInTheCard}</h4></th>
                                     <th><img style={{"width":"100px","height":"auto"}} src={item.image}></img></th>                        
                                   <th><button type="button" class="btn btn-outline-info" onClick={() => {(dispatch(deleteFromCart(item,index)));dispatch(addQty(item.id)) }}><img id="grbg" src={פח}></img></button></th> 
                                   <th> <button onClick={()=>{dispatch(decreaseQtyInTheCart(index));dispatch(addQty(item.id))}} ><img id="grbg" src={love}></img></button></th>
                                    <th><h4>{item.qtyInTheCard}</h4></th>
                                    <th> <button onClick={()=>{dispatch(addQtyInTheCard(index));dispatch(decreaseQtyProducts(item.id))}}  ><img id="grbg" src={mini}></img></button></th>
                                    {/* <button onClick={()=>{(deleteFromCart(index)); dispatch(addQty(index))}}>to payment</button> */}
                                
                            </tr>

                        </>
                    ))}
                </table>
                {/* </div> */}
                {/* <button on></button> */}
                {/* <Routes>
                <Route path="/goToPayment" element={<GoToPayment></GoToPayment>} />
            </Routes> */}
            </center>
        </>
        
    )
}
