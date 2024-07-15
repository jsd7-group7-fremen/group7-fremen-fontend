import React, { useState, useEffect } from "react";
import axios from 'axios';
import MocNav from "../components/MocNav";
import CartItems from "../components/cartItems";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Cart() {
  const userId = "668aadf902e816669af00831";
  const [cart, setCart] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const token = localStorage.getItem('token'); // Assume the token is stored in localStorage

  useEffect(() => {
    if (userId) {
      fetchCart();
    }
  }, [cart]);

  useEffect(() => {
    if (cart && cart.length > 0) {
      setSubtotal(cart.reduce((acc, item) => acc + item.productId.unitPrice * item.quantity, 0));
    } else {
      setSubtotal(0);
    }
  }, [cart]);

  const fetchCart = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/carts/${userId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      console.log(response.data)
      setCart(response.data.user.cart);
    } catch (error) {
      console.error("Error fetching the cart:", error);
      alert("มีข้อผิดพลาดในการดึงข้อมูลจากตะกร้า กรุณาลองใหม่ภายหลัง");
    }
  };

  const handleCartUpdate = async (url, method, data) => {
    try {
      const response = await axios({
        url,
        method,
        data,
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setCart(response.data.cart);
    } catch (error) {
      console.error("Error updating the cart:", error);
      alert("มีข้อผิดพลาดในการอัพเดทข้อมูลในตะกร้า กรุณาลองใหม่ภายหลัง");
    }
  };

  const handleQuantityChange = (id, quantity, size) => {
    handleCartUpdate('http://localhost:8080/carts/', 'PATCH', { _id: userId, productId: id, quantity, size });
  };

  const handleSizeChange = (id, size) => {
    handleCartUpdate('http://localhost:8080/carts/', 'PATCH', { _id: userId, productId: id, size });
  };

  const handleDeleteItem = (id, size) => {
    handleCartUpdate('http://localhost:8080/carts/', 'DELETE', { _id: userId, productId: id, size });
  };

  return (
    <div>
      <div className="w-full p-4 pt-20 bg-white shadow-md px-12 text-black">
        <MocNav />
        <div className="border-b pb-4 mb-4">
          <div className="text-2xl font-bold">Cart</div>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1" id="cart-items">
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
                  <button
                    className="btn w-full bg-black text-white mb-2 rounded-2xl px-4 py-2 transition duration-500 ease-in-out hover:bg-gray-400 hover:text-black hover:font-semibold hover:rounded-full"
                    id="guest-checkout"
                  >
                    Checkout
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
