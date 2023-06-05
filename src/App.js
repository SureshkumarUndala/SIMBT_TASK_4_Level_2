import React from "react"
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checkout from "./pages/checkout/checkout";
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Basket from "./pages/Basket/Basket";
import Cart from "./pages/cart/Cart"


const App = ()=>{
  return (
    <BrowserRouter>
   
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products/:productid" element={<ProductDetails/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="/Basket" element={<Basket/>}/>
      <Route path="/cart" element={<Cart/>}/>


    </Routes>
    </BrowserRouter>

  )
 
 
 
}


export default App;
