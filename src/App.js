import React from "react";
import NavbarComponent from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Holidays from "./components/pages/Holidays";
import Products from "./components/pages/Products";
import Footer from "./components/Footer";
import Profile from "./profile";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/pages/Cart";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <>
      <Router>
        <CartProvider>
          <NavbarComponent />
          <ScrollToTop />
          <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/holidays" exact element={<Holidays />}></Route>
            <Route path="/products" exact element={<Products />}></Route>
            <Route path="/cart" exact element={<Cart />}></Route>
            <Route path="/profile" exact element={<Profile />}></Route>
          </Routes>
        </CartProvider>
        <Footer />
      </Router>
    </>
  );
}

export default App;
