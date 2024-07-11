import React from "react";
import NavBar from "../Navigation-bar";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import {Link} from "react-router-dom"
        const ProductProfile = () => {
        const [index, setActiveStep]=useState(0)
        const location = useLocation()
        const product = location.state
        console.log(product);
        const images = [...product.images, product.thumbnail]
        const goToNextImg=()=>{
            if(index < images.length - 1){
                setActiveStep((prevActiveStep)=>
                    prevActiveStep+1
                    )
            }else{
                setActiveStep(0)
            }
            console.log(index)
        }
        return (
            <>
                <NavBar />
                <div className="productprofilecard">
                <div className="card"  style={{width:'18rem'}}>
                    <div>
                        <img src={images[index]} className="card-img-top" alt={images[index]}/>
                        <button onClick={goToNextImg}>shuffle</button>
                        </div>
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <h5>price:{product.price}</h5>
                        <p className="card-text">{product.description}</p>
                        <p className="card-text"><b>RATING:{product.rating}</b></p>

                    </div>
                    </div>
                </div>
            </>
        )
    }
    export default ProductProfile
























