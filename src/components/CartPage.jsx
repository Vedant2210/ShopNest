// // import React, { useContext } from "react";
// // import UserContext from "../context/UserContext";
// // import Navbar from "./Navbar";

// // const CartPage = () => {
// //   const { cart } = useContext(UserContext);

// //   return (
// //     <div className="bg-gray-100 min-h-screen">
// //       <Navbar />
// //       <div className="p-6">
// //         <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

// //         {cart.length === 0 ? (
// //           <p className="text-gray-600">Your cart is empty 🛒</p>
// //         ) : (
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //             {cart.map((item, index) => (
// //               <div
// //                 key={index}
// //                 className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center"
// //               >
// //                 <img
// //                   src={item.image || "https://via.placeholder.com/150"}
// //                   alt={item.name}
// //                   className="h-40 object-cover mb-3 rounded-lg"
// //                 />
// //                 <h3 className="text-lg font-semibold">{item.name}</h3>
// //                 <p className="text-gray-600">${item.price}</p>
// //               </div>
// //             ))}
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default CartPage;

// // import React, { useContext } from "react";
// // import UserContext from "../context/UserContext";
// // import Navbar from "./Navbar";

// // const CartPage = () => {
// //   const { cart } = useContext(UserContext);

// //   return (
// //     <div className="bg-gray-100 min-h-screen">
// //       <Navbar />
// //       <div className="p-6">
// //         <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

// //         {cart.length === 0 ? (
// //           <p className="text-gray-600">Your cart is empty 🛒</p>
// //         ) : (
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //             {cart.map((item, index) => (
// //               <div
// //                 key={index}
// //                 className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center"
// //               >
// //                 <img
// //                   src={item.image || "https://via.placeholder.com/150"}
// //                   alt={item.name}
// //                   className="h-40 object-cover mb-3 rounded-lg"
// //                 />
// //                 <h3 className="text-lg font-semibold">{item.name}</h3>
// //                 <p className="text-gray-600">
// //                   Price: ${item.price} × {item.quantity}
// //                 </p>
// //                 <p className="text-green-700 font-semibold">
// //                   Total: ${(item.price * item.quantity).toFixed(2)}
// //                 </p>
// //               </div>
// //             ))}
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default CartPage;



// import React, { useContext } from "react";
// import UserContext from "../context/UserContext";
// import Navbar from "./Navbar";
// import AddedCart from "./AddedCart";
// const CartPage = () => {
//   const { cart, setCart } = useContext(UserContext);

//   // ✅ Increase quantity
//   const increaseQuantity = (name) => {
//     setCart((prevCart) =>
//       prevCart.map((item) =>
//         item.name === name ? { ...item, quantity: item.quantity + 1 } : item
//       )
//     );
//   };

//   // ✅ Decrease quantity
//   const decreaseQuantity = (name) => {
//     setCart((prevCart) =>
//       prevCart
//         .map((item) =>
//           item.name === name
//             ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
//             : item
//         )
//         .filter((item) => item.quantity > 0) // remove if quantity = 0
//     );
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <Navbar />
//       <div className="p-6">
//         <h2 className="text-2xl font-bold mb-4">🛒 Your Cart</h2>

//         {cart.length === 0 ? (
//           <p className="text-gray-600">Your cart is empty.</p>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {cart.map((item, index) => (
//               <div
//                 key={index}
//                 className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center"
//               >
//                 <img
//                   src={item.image || "https://via.placeholder.com/150"}
//                   alt={item.name}
//                   className="h-40 object-cover mb-3 rounded-lg"
//                 />
//                 <h3 className="text-lg font-semibold">{item.name}</h3>
//                 <p className="text-gray-600 font-medium mb-2">
//                   Price: ${item.price}
//                 </p>

//                 {/* ✅ Quantity Controller */}
//                 <div className="flex items-center gap-3 mb-3">
//                   <button
//                     onClick={() => decreaseQuantity(item.name)}
//                     className="bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 transition"
//                   >
//                     −
//                   </button>
//                   <span className="text-lg font-semibold">{item.quantity}</span>
//                   <button
//                     onClick={() => increaseQuantity(item.name)}
//                     className="bg-green-500 text-white px-3 py-1 rounded-full hover:bg-green-600 transition"
//                   >
//                     +
//                   </button>
//                 </div>

//                 <p className="text-green-700 font-semibold">
//                   Total: ${(item.price * item.quantity).toFixed(2)}
//                 </p>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CartPage;

// import React, { useContext } from "react";
// import UserContext from "../context/UserContext";
// import Navbar from "./Navbar";
// import AddedCart from "./AddedCart";

// const CartPage = () => {
//   const { cart } = useContext(UserContext);

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <Navbar />
//       <div className="p-6">
//         <h2 className="text-2xl font-bold mb-4">🛒 Your Cart</h2>

//         {cart.length === 0 ? (
//           <p className="text-gray-600">Your cart is empty.</p>
//         ) : (
//           // ✅ Just use the reusable AddedCart component
//           <div className="flex flex-wrap gap-6">
//             <AddedCart />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CartPage;


import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import Navbar from "./Navbar";
import AddedCart from "./AddedCart";

const CartPage = () => {
  const { cart } = useContext(UserContext);

  let totalAmount = 0;
  for (let i = 0; i < cart.length; i++) {
    totalAmount += cart[i].price * cart[i].quantity;
  }


  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6">🛒 Your Cart</h2>

        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="flex flex-col lg:flex-row gap-10">
            
            <div className="flex-1">
              <AddedCart />
            </div>

            <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Order Summary
              </h3>

              <div className="space-y-3">
                {cart.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center border-b pb-2"
                  >
                    <div>
                      <p className="font-medium text-gray-700">{item.name}</p>
                      <p className="text-sm text-gray-500">
                        {item.quantity} × ${item.price.toFixed(2)}
                      </p>
                    </div>
                    <p className="font-semibold text-gray-800">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              <hr className="my-4" />

              <div className="flex justify-between items-center text-lg font-semibold text-gray-800 mb-4">
                <p>Total Amount:</p>
                <p>${totalAmount.toFixed(2)}</p>
              </div>

              <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-200">
                Proceed to Pay
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;

