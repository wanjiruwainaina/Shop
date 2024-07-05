import React from "react";
import NavBar from "../Navigation-bar";
import { useLocation } from "react-router-dom";

const ProductProfile = () => {
    const location = useLocation()
    const product = location.state
    console.log(product);
    return (
        <>
            <NavBar />
            <div className="productprofilecard">
            <div className="card"  style={{width:'18rem'}}>
                <img src={product.images[0]} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <h5>price:{product.price}</h5>
                    <p className="card-text">{product.description}</p>
                </div>
                </div>
            </div>
        </>
    )
}
export default ProductProfile




















