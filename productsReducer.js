const initialState = [{name: "milk", price: 8}, {name: "chocolate", price:10}, {name: "lolly pop", price:3}, {name: "PC", price:4000}]
const productsReducer = (state = initialState, action) =>{
    // Actions 
    switch(action.type){
        case "ADD_PRODUCT":
            return [...state, action.newProduct]
        case "REMOVE_PRODUCT":
            return state.filter((item, index) => index!== action.index)
        case "CHANGE_PRODUCT_NAME":{
            const newProducts = [...state]
            newProducts[action.index].name = action.name
            return newProducts
        }
        case "CHANGE_PRODUCT_PRICE":{
            const newProducts = [...state]
            newProducts[action.index].price = action.price
            return newProducts
        }
        default:
            return state
    }
}

export default productsReducer
