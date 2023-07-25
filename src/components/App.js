import React, {useState, useEffect} from "react";
import {
   BrowserRouter,
   Routes,
   Route,
   Link,
   useParams,
 } from "react-router-dom";
import NavBar from "./NavBar";
import ProductList from "./ProductList";
import Cart from "./Cart";
import Categories from "./Categories";
import ProductDetails from "./ProductDetails";
import Checkout from "./Checkout";

function App() {

  const[products, setProducts] = useState([]);
  const[cartItems, setCartItems] = useState([]);
  const [isInCart, setIsInCart] = useState(false)
  const [cartPrice, setCartPrice] = useState("")

  useEffect(() => {
    fetch("https://dummyjson.com/products")
     .then((r) => r.json())
     .then((data) => {
      const responseData = data;
      setProducts(responseData.products);
     });
  }, []);

 
  function handleAddToCart(item) {
    setCartItems([...cartItems, item]);

    if(cartItems) {
      setIsInCart(true);
      const totalCartPrice = cartItems.reduce((total, cartItem) => total + cartItem.price, 0)
      setCartPrice(item.price + totalCartPrice)
    }
  }

  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ProductList products={products} onAddToCart={handleAddToCart}/>} />
        <Route path="/cart" element={<Cart items={cartItems} isInCart={isInCart} cartPrice={cartPrice}/> } />
        <Route path="/products/categoty/:category" element={<Categories/>  } />
        <Route path="/product/:id" element={<ProductDetails products={products} />} />
        <Route path="/checkout" element={<Checkout />}/>
      </Routes>
    </div>
  )
}

export default App;
