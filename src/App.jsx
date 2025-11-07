import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home";
import Products from "./assets/pages/products";
import About from "./assets/pages/About";
import Contact from "./assets/pages/Contact";
import Cart from "./assets/pages/Cart";
import Navbar from "./assets/components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/producrs" element={<Products/>}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
