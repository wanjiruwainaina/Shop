import React from "react";
import "./index.css";
import {Link} from "react-router-dom"

function ProductCard(props) {
  console.log(props);
  return (
    <>
      <div className="card">
        <img src={props.prod.images[0]} className="card-img-top" alt={props.prod.title}/>
        <div className="card-body">
          <h5 className="card-title">{props.prod.title}</h5>
          <h5 className="card-title">${props.prod.price}</h5>
          <p className="card-text">{props.prod.description}</p>
          <a href="#" className="btn btn-primary">
            Add to Cart
          </a>
          <Link to='/productprofile' className="card-link">View More</Link>
        </div>
      </div>
    </>
  );
}

export default ProductCard;


