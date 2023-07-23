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

function App() {

  const[products, setProducts] = useState([]);
  const[cartItems, setCartItems] = useState([]);
 

  useEffect(() => {
    fetch("https://dummyjson.com/products")
     .then((r) => r.json())
     .then((data) => {
      const responseData = data;
      setProducts(responseData.products);
     });
  }, []);

 
  function handleAddToCart(item) {
    setCartItems([...cartItems, item])
  }



  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ProductList products={products} onAddToCart={handleAddToCart}/>} />
        <Route path="/cart" element={<Cart items={cartItems}/>} />
        <Route path="/products/categoty/:category" element={<Categories/>} />
        <Route path="/product/:id" element={<ProductDetails products={products} />} />
      </Routes>
    </div>
  )
}

export default App;
