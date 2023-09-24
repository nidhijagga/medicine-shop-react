import React, { useState, createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

 
  const updateQuantity = (itemId, newQuantity) => {
    setCartItems((prevCartItems) => {
      const updatedItems = prevCartItems.map((item) => {
        if (item.id === itemId) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
      return updatedItems;
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, updateQuantity }}>
      {props.children}
    </CartContext.Provider>
  );
};
