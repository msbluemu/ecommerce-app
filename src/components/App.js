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
import ProductDetails from "./ProductDetails";
import Checkout from "./Checkout";
import NoPageFound from "./NoPageFound";



function App() {

  const[products, setProducts] = useState([]);
  const[cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [payButton, setPayButton] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://json-server-product-api-b0e685320ba1.herokuapp.com/products")
      .then((response) => response.json())
      .then((data) => {
          setProducts(data);
          setLoading(false);
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

useEffect(() => {
  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  setCartCount(totalCartCount);
}, [cartItems]); 

function handlePay(){
  setPayButton(!payButton);
  setCartCount(0);
}

  return (
    <div className="app-container">
      <NavBar cartCount={cartCount}/>
      <div className="content-container">
        <Routes>
          <Route path="/" element={<ProductList products={products} onAddToCart={handleAddToCart} setProducts={setProducts} loading={loading} setLoading={setLoading}/>}/>
          <Route path="/cart" element={<Cart cartItems={cartItems} onRemoveCart={handleRemoveCart} onAddToCart={handleAddToCart} totatPrice={totatPrice}/>  } />
          <Route path="/product/:id" element={<ProductDetails products={products} onAddToCart={handleAddToCart} />} />
          <Route path="/checkout" element={<Checkout cartItems={cartItems} totalPrice={totatPrice} onPay={handlePay} payButton={payButton}/>}/>
          <Route path="/*" element={<NoPageFound />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App;
