import React, { useState, useEffect } from "react";
import "./index.css";
import ProductCard from "../product-card";

function ProductContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        let response = await fetch('https://api.escuelajs.co/api/v1/products');
        let results = await response.json();
        setProducts(results);
        console.log(results);
      } catch (err) {
        console.error(err);
      }
    }

    fetchProducts();
  }, []);

  return (
    <>
      <div className="container">
        <h1>Buy Now</h1>
        <div className="row justify-content-around">
          {
            products.map((prod, index) => {
              return (
                <div className="col-md-4 mb-4" key={index} >
                  <ProductCard products={prod}/>
                </div>
              );
            })
          }
        </div>
      </div>
    </>
  );
}

export default ProductContainer;
