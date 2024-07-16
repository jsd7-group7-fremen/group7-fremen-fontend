import React, { useState, useEffect } from "react";
import axios from 'axios';
import MocNav from "../components/MocNav";
import CartItems from "../components/cartItems";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import  {jwtDecode}  from "jwt-decode";
import axiosInstance from "../utils/axiosInstance";

export default function Cart() {
  
  const [cart, setCart] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const token = localStorage.getItem('token'); // Assume the token is stored in localStorage
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState([])
  
  useEffect(() => {
    // decode
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setUserId(decodedToken.id);
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    } else {
      console.log("No token found in local storage.");
    }
  }, []);

  useEffect(() => {
    if (userId) {
      fetchCart();
    }
  }, [cart,[]]);

  useEffect(() => {
    if (cart && cart.length > 0) {
      setSubtotal(cart.reduce((acc, item) => acc + item.productId.unitPrice * item.quantity, 0));
    } else {
      setSubtotal(0);
    }
  }, [cart]);

  const fetchCart = async () => {
    try {
      const response = await axiosInstance.get(`/carts/${userId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setUser(response.data.user)
      setCart(response.data.user.cart)
    } catch (error) {
      console.error("Error fetching the cart:", error);
      alert("มีข้อผิดพลาดในการดึงข้อมูลจากตะกร้า กรุณาลองใหม่ภายหลัง");
    }
  };

  const handleCartUpdate = async (url, method, data) => {
    try {
      const response = await axiosInstance({
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
    handleCartUpdate('/carts/', 'PATCH', { _id: userId, productId: id, quantity, size });
  };

  const handleSizeChange = (id, size) => {
    handleCartUpdate('/carts/', 'PATCH', { _id: userId, productId: id, size });
  };

  const handleDeleteItem = (id, size) => {
    handleCartUpdate('/carts/', 'DELETE', { _id: userId, productId: id, size });
  };

  const handleCheckout = async () => {
    setLoading(true);
    try {
      // Create the payload matching your order.model
      const orderPayload = {
        purchaseDate: new Date(),
        products: cart.map(item => ({
          productId: item.productId._id,
          quantityInOrder: item.quantity,
          amountInOrder: item.productId.unitPrice * item.quantity,
        })),
        userId: userId,
        orderStatus: "active", // Assuming new orders are "active" by default
      };
  
      // Replace with your POST request logic using Axios
      const response = await axiosInstance.post("/order", orderPayload);
  
      if (response.status === 201) { // Change to 201 to match created status
        // Clear the cart after successful order creation
        const clearCartResponse = await axiosInstance.post("/carts/clear", { _id : userId });
  
        if (clearCartResponse.status === 200) {
          // Show alert and redirect if the POST request is successful
          // const updateProduct = await axiosInstance.patch("/product/", )
          alert("Checkout successful!");
          navigate("/Cart/Payment");
        } else {
          console.error("Failed to clear cart");
          alert("Failed to clear cart. Please try again later.");
          navigate("/Cart");
        }
      } else {
        // Handle other status codes or errors
        console.error("Failed to checkout");
        alert("Failed to checkout. Please try again later.");
      }
    } catch (error) {
      // Handle network errors or exceptions
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Error response:", error.response.data);
        alert(`Checkout failed: ${error.response.data.message || "Please try again later."}`);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("Error request:", error.request);
        alert("No response from server. Please try again later.");
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error message:", error.message);
        alert(`Error: ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
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
                    onClick={handleCheckout}
                    disabled={loading}
                  >
                    {loading ? 'Processing...' : 'Checkout'}
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
