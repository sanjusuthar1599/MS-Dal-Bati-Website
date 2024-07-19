import React, { useState, createContext, useEffect } from "react";
import PropTypes from "prop-types";
import { food_list } from "../../../public/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState({});

  const addToCart = (itemId) => {
    if (!cartItem[itemId]) {
      setCartItem((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    if (cartItem[itemId] === 1) {
      const newCartItems = { ...cartItem };
      delete newCartItems[itemId];
      setCartItem(newCartItems);
    } else {
      setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }
  };


  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itam in cartItem){
        if(cartItem[itam] > 0){
          let itemInfo = food_list.find((product) => product._id === itam);
          totalAmount += itemInfo.price * cartItem [itam];
        }
    }
    return totalAmount
  }


  // useEffect(() => {
  //   console.log(cartItem);
  // }, [cartItem]);

  const contextValue = {
    food_list,
    cartItem,
    addToCart,
    removeFromCart,
    getTotalCartAmount
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

StoreContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StoreContextProvider;
