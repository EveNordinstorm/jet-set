import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Holidays from "./components/pages/Holidays";
import Products from "./components/pages/Products";
import Footer from "./components/Footer";
import Profile from "./profile";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <>
      <Router>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/holidays" exact element={<Holidays />}></Route>
            <Route path="/products" exact element={<Products />}></Route>
            <Route path="/profile" exact element={<Profile />}></Route>
          </Routes>
        </CartProvider>
        <Footer />
      </Router>
    </>
  );
}

export default App;
