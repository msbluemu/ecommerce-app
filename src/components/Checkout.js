import React, { useState } from "react";


function Checkout(){
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
       <form onSubmit={handSubmit} className="checkout-info">
          <input type="text" name="name" placeholder="name" value={name} onChange={e => setName(e.target.value)} />
          <input type="email" name="email" placeholder="name" value={email} onChange={e => setEmail(e.target.value)} />
          <input type="text" name="address" placeholder="address" value={address} onChange={e => setAddress(e.target.value)} />
          <input type="number" name="cardnumber" placeholder="card number" value={cardNumber} onChange={e => setCardNumber(e.target.value)}/>
          <button type="submit">Pay Now</button>
       </form>
    )
}

export default Checkout;