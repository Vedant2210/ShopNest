// import React from 'react'
// import Navbar from './components/Navbar'
// import Card from './components/Card'
// import Homepage from './components/Homepage'
// import UserProvider from './context/UserProvider'

// import { Route } from 'react-router-dom'
// import { Routes } from 'react-router-dom'
// import CartPage from './components/CartPage'
// const App = () => {
//   return (
//    <div>
//       <Navbar/>
//       <Homepage/>
//          <Routes>
//           <Route path="/" element={<Homepage />} />
//           <Route path="/cart" element={<CartPage />} />
//         </Routes>

//    </div>
   
    
//   )
// }

// export default App

import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import CartPage from "./components/CartPage";



const App = () => {
  return (
    <>
   
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
};

export default App;

