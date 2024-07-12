import React, { useState, useEffect } from "react";
import MocNav from "../components/MocNav";
import CartItems from "../components/cartItems";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, Outlet } from "react-router-dom";


const initialCart = [
  {
    id: 1,
    name: "Air Jordan 1 Low SE",
    category: "Men's Shoes",
    color: "White/Sail/Seafoam",
    size: "7.5",
    quantity: 1,
    price: 205.0,
    image: "./images/cart/adidas1.png",
  },
  {
    id: 2,
    name: "Nike Air Force 1 Low Retro",
    category: "Men's Shoes",
    color: "Black/Black/Black",
    size: "7.5",
    quantity: 1,
    price: 189.9,
    originalPrice: 239.0,
    image: "./images/cart/adidas5.png",
  },
];

export default function Cart() {
  const [cart,setCart] = useState(initialCart)
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    const subtotal = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setSubtotal(subtotal);
  }, [cart]);

  const handleQuantityChange = (id, quantity) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: Number(quantity) } : item
    );
    setCart(updatedCart);
  };

  const handleSizeChange = (id, size) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, size } : item
    );
    setCart(updatedCart);
  };

  const handleDeleteItem = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
  };

  return (
  <div>
    {/* <Navbar /> */}
    <div className="w-full p-4 pt-20 bg-white shadow-md px-12 text-black">
     
      <MocNav />
      <div className="border-b pb-4 mb-4">
        <div className="text-2xl font-bold">Cart</div>
      </div>
      <div className="flex flex-col lg:flex-row ">
        <div className="flex-1 " id="cart-items">
        <CartItems
              cart={cart}
              onQuantityChange={handleQuantityChange}
              onSizeChange={handleSizeChange}
              onDeleteItem={handleDeleteItem}
            />
        </div>
        <div className="lg:w-1/3 lg:ml-4 mt-4 lg:mt-0 mb-8">
          <div className="p-4 bg-gray-50 border rounded" id="cart-summary">
            <div className="text-xl font-bold mb-2">Summary</div>
            <div className="flex justify-between">
              <div>Subtotal</div>
              <div id="subtotal">${subtotal.toFixed(2)}</div>
            </div>
            <div className="flex justify-between mt-2">
              <div>Estimated Delivery & Handling</div>
              <div>Free</div>
            </div>
            <div className="flex justify-between mt-2 font-bold">
              <div>Total</div>
              <div id="total">${subtotal.toFixed(2)}</div>
            </div>
            <Link to="/Cart/Payment">
            <div className="mt-4">
              <a href="#">
                <button
                  className="btn w-full bg-black  text-white mb-2 rounded-2xl px-4 py-2 transition duration-500 ease-in-out hover:bg-gray-400 hover:text-black hover:font-semibold hover:rounded-full"
                  id="guest-checkout"
                >
                  Checkout
                </button>
              </a>
            </div>
            </Link>
          </div>
        </div>
      <div />
    </div>
    <Footer />
  </div>
  </div>
  );
}
