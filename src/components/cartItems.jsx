import React from "react";
import { useState } from "react";
import {Link} from "react-router-dom"

export default function CartItems({ cart, onQuantityChange, onSizeChange, onDeleteItem }) {

    const handleChange = (id, event) => {
      onQuantityChange(id, event.target.value);
    };

    const handleSizeChange = (id, event) => {
      onSizeChange(id, event.target.value);
    };

    const handleDelete = (id) => {
      onDeleteItem(id);
    };
    const sizes = [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5];
    
    return(
        <div>
            {cart.map(item => (
            <div className="flex items-center mb-4 border-b border-b-gray-300  " key={item.id}>
              
              <div className="flex w-full mb-10">
               
                <div className="flex items-center w-40 h-18 ">
                  <Link to="/Cart/ProductInfo">
                  <img className="w-40 h-18 object-cover" src={item.image} alt={item.name} />
                  </Link>
                </div>
                
                <div className="ml-4 w-full ">
                  <div className="flex items-center justify-between">
                    <div className="text-lg text-black font-bold">{item.name}</div>
                    <div className="mr-10 text-lg text-black font-bold">
                    {item.originalPrice ? <span className="line-through mr-2 text-gray-500">${item.originalPrice.toFixed(2)}</span> : ''}
                    ${item.price.toFixed(2)}
                    </div>
                  </div>
                  <div className="text-black mb-1">{item.category}</div>
                  <div className="text-black mb-1">{item.color}</div>
                  <div className="flex gap-4">
                  <label htmlFor={`size-${item.id}`}>Size:</label>
                  <select id={`size-${item.id}`} value={item.size} onChange={(event) => handleSizeChange(item.id, event)}>
                  {sizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                    ))}
                    </select>
                    <lebel htmlFor={`quantity-${item.id}`} >Quantity:</lebel>
                    <select id={`quantity-${item.id}`} value={item.quantity} onChange={(event) => handleChange(item.id, event)}>{[...Array(10).keys()].map( i => (
                      <option key={i + 1} value={i + 1} >{i + 1}</option>
                    ))}
                    </select>
                  </div>
                  <div className="flex gap-4 mt-5">
                  <button onClick={() => handleDelete(item.id)}><img className="h-5" src="./images/cart/trash.png"/></button>
                    <button ><img className="h-5" src="./images/cart/love.png"/></button>
                  </div>
                </div>
              </div>

            </div>
           
          ))}
        </div>
     )
  }              