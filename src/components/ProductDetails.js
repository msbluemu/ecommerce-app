import React from "react";
import { useParams } from "react-router-dom";

function ProductDetails({products}) {
    const { id } = useParams();
  
    const product = products.find((product) => product.id === parseInt(id));

    // If product details are still being fetched or the product is not found, display a loading message or error
    if (!product) {
      return <p>Product not found</p>;
    }
  
    // Once product details are available, display them
    return (
      <div>
        <h1>Product Details for ID: {id}</h1>
        <h2>{product.title}</h2>
        <p>Price: {product.price}</p>
        <p>Description: {product.description}</p>
        <p>Rating: {product.rating}</p>
        <p>Stock: {product.stock}</p>
        {/* Display other product details as needed */}
      </div>
    );
  }

export default ProductDetails