import { createContext, useCallback, useState } from "react";

export const GlobalContext = createContext();

const GloabalProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = useCallback(
    (id) => {
      return cart.find((i) => i.id == id);
    },
    [cart]
  );
  const addToCart = useCallback((product) => {
    setCart((currCart) => [product, ...currCart]);
  }, []);
  const removeFromCart = useCallback((id) => {
    setCart((currCart) => currCart.filter((i) => i.id !== id));
  }, []);

  return (
    <GlobalContext.Provider
      value={{ cart, setCart, removeFromCart, addToCart, isInCart }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GloabalProvider;
