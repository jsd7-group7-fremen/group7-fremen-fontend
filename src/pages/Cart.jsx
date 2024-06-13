import React, { useState, useEffect } from "react";
import MocNav from "../components/MocNav";
import CartItems from "../components/cartItems";
import adidas1 from "../assets/shoes/adidas1.png"
import adidas2 from "../assets/shoes/adidas5.png"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const cart = [
  {
    id: 1,
    name: "Air Jordan 1 Low SE",
    category: "Men's Shoes",
    color: "White/Sail/Seafoam",
    size: "7.5",
    quantity: 1,
    price: 205.0,
    image: adidas1,
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
    image: adidas2,
  },
];

export default function Cart() {
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    const subtotal = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setSubtotal(subtotal);
  }, []);

  return (
  <div>
    <Navbar />
    <div className="w-full p-4 pt-20 bg-white shadow-md pr-10 text-black">
     
      <MocNav />
      <div className="border-b pb-4 mb-4">
        <div className="text-2xl font-bold">Bag</div>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1" id="cart-items">
          <CartItems cart={cart} />
        </div>
        <div className="lg:w-1/3 lg:ml-4 mt-4 lg:mt-0">
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
            <div className="mt-4">
              <a href="#">
                <button
                  className="btn w-full bg-black  text-white mb-2 rounded-2xl px-4 py-2 transition duration-500 ease-in-out hover:bg-gray-400 hover:text-black hover:font-semibold hover:rounded-full"
                  id="guest-checkout"
                >
                  Guest Checkout
                </button>
              </a>
              <a href="#">
                <button
                  className="btn w-full bg-black text-white mb-2 rounded-2xl px-4 py-2 transition duration-500 ease-in-out hover:bg-gray-300 hover:text-black hover:font-bold hover:rounded-full"
                  id="member-checkout"
                >
                  Member Checkout
                </button>
              </a>
              <a href="#">
                <button
                  className="btn flex items-center justify-center bg-white w-full mb-2 rounded-2xl px-4 py-2 transition duration-500 ease-in-out hover:bg-blue-100 hover:text-black hover:font-bold hover:rounded-full"
                  id="paypal-checkout"
                >
                  {/* <img src="/images/paypal.webp" alt="PayPal" className="h-5 mr-2"> */}
                  PayPal
                </button>
              </a>
            </div>
          </div>
        </div>
        <div />
      </div>
      <Footer />
    </div>
  </div>
  );
}
