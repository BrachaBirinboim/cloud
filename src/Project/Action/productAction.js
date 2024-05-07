export const  decreaseQty = (id) => {
    return{
        type: "decrease Qty",
        id
       
    }
}
export const  decreaseQtyProducts = (id) => {
    return{
        type: "decrease QtyProject",
        id
       
    }
}
export const addQty = (id) => {
    return{
        type: "add Qty",
       id

    }
}
// export const addQty2 = (id) => {
//     return{
//         type: "add Qty2",
//        id

//     }
// }
//     // export const decreaseQtyInTheCart = (index) => {
    //     return{
    //         type: "decrease Qty In The Cart",
    //        index
    
    //     }
    // }
