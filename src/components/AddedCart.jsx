import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const AddedCart = () => {
  const { cart, setCart } = useContext(UserContext);

  const increaseQuantity = (name) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.name === name ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  
  };


  const decreaseQuantity = (name) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.name === name
            ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );

  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {cart.map((item, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center"
        >
          <img
            src={item.image || "https://via.placeholder.com/150"}
            alt={item.name}
            className="h-40 object-cover mb-3 rounded-lg"
          />
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <p className="text-gray-600 font-medium mb-2">
            Price: ${item.price}
          </p>


          <div className="flex items-center gap-3 mb-3">
            <button
              onClick={() => decreaseQuantity(item.name)}
              className="bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 transition"
            >
              −
            </button>
            <span className="text-lg font-semibold">{item.quantity}</span>
            <button
              onClick={() => increaseQuantity(item.name)}
              className="bg-green-500 text-white px-3 py-1 rounded-full hover:bg-green-600 transition"
            >
              +
            </button>
          </div>

          <p className="text-green-700 font-semibold">
            Total: ${(item.price * item.quantity).toFixed(2)}
          </p>
        </div>
      ))}
      
    </div>
  );
};

export default AddedCart;
