import { useDispatch, useSelector } from "react-redux"
import { addProduct, changeProductName, removeProduct } from "../redux/actions/productActions"
import { useState } from "react"

export default function ProductDetails() {
    const products = useSelector((state) => state.products)
    const dispatch = useDispatch()
    const newProduct = { name: "klik", price: 7 }

    const [newProductName, setNewProductName] = useState("")
    return (
        <>
            <h1>Products Redux component 1</h1>

            <table className="table table-dark">
                {products ? products.map((item, index) => (
                    <>
                        <tr>
                            <td><h2>{item.name}</h2></td>
                            <td><h3>{item.price}</h3></td>
                        </tr>
                    </>
                )) : <div>Products is null</div>}
            </table>

            <button onClick={() => dispatch(removeProduct(1))}>remove product</button>
            <button onClick={() => dispatch(addProduct(newProduct))}>add product</button>
            <input onChange={(e) => setNewProductName(e.target.value)}></input>
            <button onClick={() => dispatch(changeProductName(newProductName, 0))}>change product name</button>

        </>
    )
}