import React from "react";

export default function CartItems({cart}) {
    return(
        <div>
            {cart.map(item => (
            <div className="flex items-center mb-4" key={item.id}>
              <a href='/productinfo.html' className='hover:bg-neutral-100 w-full flex'>
                <div className="flex items-center w-40 h-18">
                  <img className="w-40 h-18 object-cover" src={item.image} alt={item.name} />
                </div>
                <div className="ml-4 w-max h-18">
                  <div className="text-lg text-black font-bold">{item.name}</div>
                  <div className="text-black">{item.category}</div>
                  <div className="text-black">{item.color}</div>
                  <div className="text-black">Size {item.size}</div>
                  <div className="text-black">Quantity {item.quantity}</div>
                  <div className="mt-2 text-lg text-black font-bold">
                    {item.originalPrice ? <span className="line-through text-gray-500">${item.originalPrice.toFixed(2)}</span> : ''}
                    ${item.price.toFixed(2)}
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
    )
}