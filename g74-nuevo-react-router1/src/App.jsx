import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import pizzas from "./pages/pizzas";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import "./App.css";

const App = () => {
  const [cart, setCart] = useState(pizzas); 
  const [total, setTotal] = useState(0);

  const calculateTotal = () => {
    const newTotal = cart.reduce(
      (acc, pizza) => acc + pizza.price * pizza.quantity,
      0
    );
    setTotal(newTotal);
  };

  useEffect(() => {
    calculateTotal();
  }, [cart]);

  return (
    <div>
      <Navbar total={total} />
      <Header />
      <Routes>
        <Route path="/" element={<Home setCart={setCart} cart={cart} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

