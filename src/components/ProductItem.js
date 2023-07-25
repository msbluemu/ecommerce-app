import React, { useState } from "react";
import { Link } from "react-router-dom";


function ProductItem({product, onAddToCart}) {
  const { id, title, price, thumbnail } = product;

    
 
     return(
        <div key={id} className="product">
          <Link to={`/product/${id}`}>
              <img src={thumbnail} />
          </Link>
          <h4>{title}</h4>
          <p>Price: {price}</p>
          <button onClick={() => onAddToCart(product)}>Add to cart</button>
         </div>
     );
}

export default ProductItem;