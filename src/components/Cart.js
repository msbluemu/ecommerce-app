import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'



function Cart({cartItems, onRemoveCart, onAddToCart, totatPrice}){
    const navigate = useNavigate();
    
    return (
      <div className="cart-container">
        <div className="cart-heading">
          {cartItems.length > 0 && <FontAwesomeIcon icon={faArrowLeft} className="left-arrow" onClick={() => navigate("/")}/>}
          <h1>Your Cart</h1>
        </div>
        {cartItems.length === 0 && <div>is empty. Add more items</div>}
        {cartItems.map((item) => (
        <div key={item.id}  className="cart-item">
              <img src={item.thumbnail}></img>
              <div className="cart-item-info">
                <h2>{item.title}</h2>
                <p>Price : ${item.price}</p>
              </div>
              <div className="cart-item-button">
                <button className="cart-items-add" onClick={() => onAddToCart(item)}>+</button>
                <button className="cart-items-remove"onClick={()=> onRemoveCart(item)}>-</button>
             </div>
            <div className="cart-item-price">
             {item.quantity} * ${item.price}
            </div>
        </div>
      ))}
           {cartItems.length > 0 ? <h3>Subtotal : ${totatPrice} </h3> : null}
       {
          cartItems.length > 0 ? <button onClick={() => navigate("/checkout") }>Order Now</button> : null
        }
    </div>
    )
}

export default Cart;