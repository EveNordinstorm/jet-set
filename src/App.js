import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Holidays from "./components/pages/Holidays";
import Products from "./components/pages/Products";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/holidays" exact element={<Holidays />}></Route>
          <Route path="/products" exact element={<Products />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
