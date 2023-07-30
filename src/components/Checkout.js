import React, { useState } from "react";


function Checkout({cartItems, totalPrice}){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [cardNumber, setCardNumber] = useState("");

    function handSubmit(e){
      e.preventDefault();
      
      const checkoutData = {
        name: name,
        email: email,
        address: address,
        cardnumber: cardNumber,
      };
      fetch("  http://localhost:5000/data", {
        method: "POST",
        headers: {
          "Content-Type":"application/json",
        },
        body: JSON.stringify(checkoutData)
      })
      .then((r) => r.json())
    }


    return (
      <div>
       {cartItems.map((item) => (
        <div key={item.id}  className="cart-item">
          <img src={item.thumbnail}></img>
          <h2>{item.title}</h2>
          <div>{item.quantity} * ${item.price}</div>
          <div>{totalPrice}</div>
        </div>
       )
     )
    }
       <form onSubmit={handSubmit} className="checkout-info">
          <input type="text" name="name" placeholder="name" value={name} onChange={e => setName(e.target.value)} required/>
          <input type="email" name="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} required/>
          <input type="text" name="address" placeholder="address" value={address} onChange={e => setAddress(e.target.value)} required />
          <input type="number" name="cardnumber" placeholder="card number" value={cardNumber} onChange={e => setCardNumber(e.target.value)} required/>
          <button type="submit">Pay Now</button>
       </form>
       </div>
    )
}

export default Checkout;