


export const deleteFromCart = (item,index) => {
    return{
        type: "delete from cart",
        index
    }
}

export const addToCart = (newProduct,index) => {
    return{
        type: "add to cart",
        newProduct,
        index
    }
}
export const decreaseQtyInTheCart = (index) => {
    return{
        type: "decrease Qty In The Cart",
      index

    }
    }
    export const addQtyInTheCard = (index) => {
        return{
            type: "add Qty In The Card",
          index
    
        }
        }
    