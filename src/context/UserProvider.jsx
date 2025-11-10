import React, { useState } from 'react'
import UserContext from './UserContext';

const UserProvider = ({children}) => {
   const [cart, setCart] = useState([]);
  return (
    <UserContext.Provider value={{cart,setCart}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider
