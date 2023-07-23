import React, { useState } from "react";


function Cart({items}){
   

    return (
      <div>
      <h1>Cart</h1>
      {items.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>Price: {item.price}</p>
          <p>Description: {item.description}</p>
          <p>Rating: {item.rating}</p>
          <p>Stock: {item.stock}</p>
          {/* Display other product details as needed */}
        </div>
      ))}
    </div>

    )
}

export default Cart;