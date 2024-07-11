import React from "react";
import "./index.css";
import {Link} from "react-router-dom"

function ProductCard(props) {
  
  return (
    <>
      <div style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"100vh"
      }}>
        <div className="card">
          <img src={props.product.images[0]} className="card-img-top" alt={props.product.title}/>
          <div className="card-body">
            <h5 className="card-title">{props.product.title}</h5>
            <h5 className="card-title">${props.product.price}</h5>
            <p className="card-text">{props.product.description}</p>
            <a href="#" className="btn btn-primary">
              Add to Cart
            </a>
            <Link to='/productprofile'  state={ props.product}className="card-link">View More</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;




