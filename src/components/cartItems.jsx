import React from "react";
import { Link } from "react-router-dom";

export default function CartItems({ cart, onQuantityChange, onSizeChange, onDeleteItem }) {
  const handleChange = (id, event, size) => {
    onQuantityChange(id, event.target.value, size);
  };

  const handleSizeChange = (id, event, quantity) => {
    onSizeChange(id, event.target.value, quantity);
  };

  const handleDelete = (id, size) => {
    onDeleteItem(id, size);
  };

  const sizes = [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5];

  return (
    <div>
      {cart && cart.length > 0 ? (
        cart.map((item) => (
          <div className="flex items-center mb-4 border-b border-gray-300" key={item.productId._id}>
            <div className="flex w-full mb-10">
              <div className="flex items-center w-40 h-18">
                <Link to={`/product/${item.productId._id}`}>
                  {item.productId && item.productId.productImages && item.productId.productImages.side && (
                    <img className="w-40 h-18 object-cover" src={item.productId.productImages.side} alt={item.productId.productName} />
                  )}
                </Link>
              </div>
              <div className="ml-4 w-full">
                <div className="flex items-center justify-between">
                  <div className="text-lg text-black font-bold">{item.productId.productName}</div>
                  <div className="mr-10 text-lg text-black font-bold">
                    {item.productId.originalPrice ? (
                      <span className="line-through mr-2 text-gray-500">${(item.productId.originalPrice * item.quantity).toFixed(2)}</span>
                    ) : ''}
                    ${(item.productId.unitPrice * item.quantity).toFixed(2)}
                  </div>
                </div>
                <div className="text-black mb-1">
                  {item.productId.category && item.productId.category.length > 0 && (
                    <div>{item.productId.category.join(", ")}</div>
                  )}
                </div>
                <div className="text-black mb-1">{item.productId.color}</div>
                <div className="flex gap-4">
                  <label htmlFor={item.productId._id}>Size:</label>
                  <select id={item.productId._id} value={item.size} onChange={(event) => handleSizeChange(item.productId._id, event, item.quantity)}>
                    {sizes.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                  <label htmlFor={item.productId._id}>Quantity:</label>
                  <select id={`q-${item.productId._id}`} value={item.quantity} onChange={(event) => handleChange(item.productId._id, event, item.size)}>
                    {[...Array(100).keys()].map(i => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex gap-4 mt-5">
                  <button onClick={() => handleDelete(item.productId._id, item.size)}>
                    <img className="h-5" src="./images/cart/trash.png" alt="Delete" />
                  </button>
                  <button>
                    <img className="h-5" src="./images/cart/love.png" alt="Save for later" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center">empty</div>
      )}
    </div>
  );
}
