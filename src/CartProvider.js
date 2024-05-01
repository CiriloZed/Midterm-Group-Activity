import React, { createContext, useContext, useState } from "react";

// Step 1: Create the Cart Context
const CartContext = createContext();

// Step 2: Create Cart Provider Component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Step 3: Implement Add to Cart Functionality
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Step 4: Custom Hook to Access Cart Context
export const useCart = () => useContext(CartContext);
