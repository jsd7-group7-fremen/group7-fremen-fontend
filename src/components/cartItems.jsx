// src/components/CartItems.js
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

export default function CartItems({ cart, onQuantityChange, onSizeChange, onDeleteItem }) {
  const { userId } = useContext(UserContext);

  const handleChange = (id, size, event) => {
    onQuantityChange(id, event.target.value, size);
  };

  const handleSizeChange = (id, event) => {
    onSizeChange(id, event.target.value);
  };

  const handleDelete = (id, size) => {
    onDeleteItem(id, size);
  };

  const sizes = [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5];

  return (
    <div>
      {cart.map(item => (
        <div className="flex items-center mb-4 border-b border-b-gray-300" key={item.productId}>
          <div className="flex w-full mb-10">
            <div className="flex items-center w-40 h-18">
              <Link to="/Cart/ProductInfo">
                <img className="w-40 h-18 object-cover" src={''} alt={item.name} />
              </Link>
            </div>
            <div className="ml-4 w-full">
              <div className="flex items-center justify-between">
                <div className="text-lg text-black font-bold">{item.productId}</div>
                <div className="mr-10 text-lg text-black font-bold">
                  {item.originalPrice ? (
                    <span className="line-through mr-2 text-gray-500">${(item.originalPrice * item.quantity).toFixed(2)}</span>
                  ) : ''}
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
              <div className="text-black mb-1">{item.category}</div>
              <div className="text-black mb-1">{item.color}</div>
              <div className="flex gap-4">
                <label htmlFor={`size-${item.productId}`}>Size:</label>
                <select id={`size-${item.productId}`} value={item.size} onChange={(event) => handleSizeChange(item.productId, event)}>
                  {sizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
                <label htmlFor={`quantity-${item.productId}`}>Quantity:</label>
                <select id={`quantity-${item.productId}`} value={item.quantity} onChange={(event) => handleChange(item.productId, item.size, event)}>
                  {[...Array(10).keys()].map(i => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex gap-4 mt-5">
                <button onClick={() => handleDelete(item.productId, item.size)}>
                  <img className="h-5" src="./images/cart/trash.png" alt="Delete" />
                </button>
                <button>
                  <img className="h-5" src="./images/cart/love.png" alt="Save for later" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
