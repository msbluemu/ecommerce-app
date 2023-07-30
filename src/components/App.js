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
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
     .then((r) => r.json())
     .then((data) => {
      const responseData = data;
      setProducts(responseData.products);
     });
  }, []);

  function handleAddToCart(product) {
   const productExist = cartItems.find((item) => item.id === product.id)
   if(productExist){
    setCartItems(cartItems.map((item) => item.id === product.id ?
    {...productExist, quantity: productExist.quantity + 1} : item)
    );
   } else{
    setCartItems([...cartItems, {...product, quantity : 1}]);
    setIsInCart(true)
   }
  }

 function handleRemoveCart(removedItem){
   const productExist = cartItems.find((item) => item.id === removedItem.id);
   if(productExist.quantity === 1){
    setCartItems(cartItems.filter((item) => item.id !== removedItem.id));
   } else {
    setCartItems(cartItems.map((item) =>
                item.id === removedItem.id ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  }
}

const totatPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0)

  return (
    <div className="app-container">
      <NavBar />
      <div className="content-container">
        <Routes>
          <Route path="/" element={<ProductList products={products} onAddToCart={handleAddToCart} setProducts={setProducts}/>} />
          <Route path="/cart" element={<Cart cartItems={cartItems} isInCart={isInCart} onRemoveCart={handleRemoveCart} onAddToCart={handleAddToCart} totatPrice={totatPrice}/>  } />
          <Route path="/products/categoty/:category" element={<Categories/>  } />
          <Route path="/product/:id" element={<ProductDetails products={products} onAddToCart={handleAddToCart} />} />
          <Route path="/checkout" element={<Checkout cartItems={cartItems} totalPrice={totatPrice} />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App;
