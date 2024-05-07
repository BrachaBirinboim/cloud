import { useSelector } from "react-redux";
import { decreaseQty } from "./Action/productAction";
import React, { useState, useEffect } from 'react';
export default function GoToPayment() {
   
    // const dispatch = useDispatch()
    // const removeFromthecart = (item, index) => {
    //     if (item.qtyInTheCard ===1)
    //         dispatch(deleteFromCart(index))
    // }
    // const navigate=useNavigate()
    useEffect(() => {
       
alert("אתה בטוח שאתה רוצה לעבור לתשלום??")
      });
      const cartD = useSelector((state) => state.cart);
    return (
        <>
    
            <center>

                <table class="table">
                    <thead>
                        {/* <tr>
                            <th scope="col">name</th>
                            <th scope="col">price</th>
                            <th scope="col">how many?</th>
                            <th scope="col">image</th>
                        </tr> */}
                    </thead>
                    <button style={{font:"BN KiD"}}>לתשלום עכשיו</button>
                    {cartD.map((item, index) => (
                        <>
                      
                            <tr>
                                <div>
                                    <th scope="row"><h3>{item.name}</h3></th>                                   
                                    <th><h4>{item.price}</h4></th>
                                    <th><h4>{item.qtyInTheCard}</h4></th>
                                     <th><img src={item.image}></img></th>                        
                                  
                                    <h4>{item.qtyInTheCard*item.price}</h4>
                                   
                                   
                                </div>
                            </tr>

                        </>
                    ))}
                </table>
               
            </center>
        </>
        
    )
}