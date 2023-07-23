import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductItem from "./ProductItem";

function Categories(){


    const {category} = useParams();
    const [categoryItems, setCategoryItems] = useState([]);



    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${category}`)
        .then(res => res.json())
        .then((data) => {
          const responseData = data;
          setCategoryItems(responseData.products);
        });
    }, [category]);
    
    return (
      <ul className="cards">
      {categoryItems.map((item) => (
        /* Render each product item using the ProductItem component */
        <ProductItem product={item} className="card" key={item.id} />
      ))}
      </ul>
    )
  }

export default Categories;