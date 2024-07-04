import React from "react";
import "./index.css";

function ProductCard(props) {
  console.log(props);
  return (
    <>
      <div className="card">
        <img src={props.products.images[0]} className="card-img-top" alt={props.products.title}/>
        <div className="card-body">
          <h5 className="card-title">{props.products.title}</h5>
          <h5 className="card-title">${props.products.price}</h5>
          <p className="card-text">{props.products.description}</p>
          <a href="#" className="btn btn-primary">
            Add to Cart
          </a>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
