import React from "react";
import { useParams } from "react-router-dom";

function ProductDetails({products, onAddToCart}) {
    const { id } = useParams();
  
    const product = products.find((product) => product.id === parseInt(id));

  
    if (!product) {
      return <p>Product not found</p>;
    }
  
    return (
      <div className="product-details">
        <img src={product.thumbnail}></img>
        <div>
          <h2>{product.title}</h2>
          <p>Price: {product.price}</p>
          <p>Description: {product.description}</p>
          <button onClick={() => onAddToCart(product)}>Add to cart</button>
        </div>
      </div>
    );
  }

export default ProductDetails