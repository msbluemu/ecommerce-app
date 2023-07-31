import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'

function Checkout({cartItems, totalPrice, onPay, payButton}){
  const navigate=useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [cardNumber, setCardNumber] = useState("");
   

    function handSubmit(e){
      e.preventDefault();
    }


   
    return (
      <div className="checkout-container">
      {payButton ? (
        <div className="thank-you">Thank you for your payment. <br></br>Your order is on the way!</div>
      ) : (
        <div>
          <FontAwesomeIcon icon={faArrowLeft} className="left-arrow" onClick={() => navigate("/cart")}/>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.thumbnail} alt={item.title} />
              <h2>{item.title}</h2>
              <div>
                {item.quantity} * ${item.price}
              </div>
            </div>
          ))}
          <h3 className="checkout-price">Order total: ${totalPrice}</h3>
          <div className="checkout-info">
            <form onSubmit={handSubmit}>
              <input
                type="text"
                name="name"
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="text"
                name="address"
                placeholder="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
              <input
                type="number"
                name="cardnumber"
                placeholder="card number"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required
              />
              <button type="submit" onClick={onPay}>Pay Now</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Checkout;