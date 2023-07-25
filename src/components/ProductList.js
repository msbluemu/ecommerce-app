import React, {useEffect, useState} from "react";
import ProductItem from "./ProductItem";



function ProductList({products, onAddToCart}){

    return (
        <ul className="products">
         {products.map((product) => (
            <ProductItem key={product.id} product={product} onAddToCart={onAddToCart} />
         ))}
        </ul>
    )
}

export default ProductList;