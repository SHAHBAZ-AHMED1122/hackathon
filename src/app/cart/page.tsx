"use client";

import { useState, useEffect } from "react";
 
  
export default function CartPage() {
  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const handleRemoveItem = (index: number) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="min-h-screen bg-gray-100 text-black p-6 flex justify-center items-center">
      <div className="max-w-3xl w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6">Shopping Cart</h1>
        {cartItems.length > 0 ? (
          <div className="divide-y divide-gray-300">
            {cartItems.map((item, index) => (
              <div key={index} className="flex justify-between items-center py-4">
                <div className="flex items-center gap-4">
                  <img src={item.imageUrl} alt={item.name} className="w-16 h-16 rounded-lg" />
                  <div>
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-gray-600">${item.price}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <p className="font-semibold">Qty: {item.quantity}</p>
                  <button
                    className="text-red-500 font-bold hover:text-red-700"
                    onClick={() => handleRemoveItem(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        )}
        <div className="mt-6 flex justify-between items-center font-semibold text-lg">
          <p>Total:</p>
          <p>${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</p>
        </div>
        <button className="mt-6 w-full bg-yellow-500 text-black font-bold py-3 rounded-lg shadow-md hover:bg-yellow-600">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
