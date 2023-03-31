import React, { useState, useEffect, useMemo } from 'react';
import { getCartList } from '../service';

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    const params = {};
    getCartList(params).then((res) => {
      setCartList(res);
    });
  }, []);

  const value = useMemo(() => {
    return {
      cartList,
    };
  }, [cartList]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
