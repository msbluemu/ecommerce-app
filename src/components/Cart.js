import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Cart({items, isInCart, cartPrice}){
    const navigate = useNavigate();
 


    return (
      <div className="cart-container">
        <h1>Your Cart</h1>
        {items.map((item) => (
        <div key={item.id}  className="cart-item">
              <img src={item.thumbnail}></img>
              <div>
                <h2>{item.title}</h2>
                <p>Price: {item.price}</p>
              </div>
        </div>
      ))}
           {isInCart? <h3>Subtotal (1 item): {cartPrice} </h3> : null}
       {
          isInCart? <button onClick={() => navigate("/checkout") }>Pay Now</button> : null
        }
    </div>
    )
}

export default Cart;