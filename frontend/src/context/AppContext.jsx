/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from 'react';
import { dummyProducts } from '../assets/assets';
import toast from 'react-hot-toast';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const currency = import.meta.VITE_CURRENCY;

  const [user, setUser] = useState(null);
  const [isSeller, setIsSeller] = useState(false);
  const [showUserLogin, setShowUserLogin] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    setProducts(dummyProducts);
  };

  // Add products to cart
  const addToCart = (itemId) => {
    let cart = structuredClone(cartItems);

    if (cart[itemId]) cart[itemId] += 1;
    else cart[itemId] = 1;

    setCartItems(cart);
    toast.success('Added to Cart');
  };

  // Update Cart item Quantity
  const updateCartItem = (itemId, quantity) => {
    const cart = structuredClone(cartItems);
    cart[itemId] = quantity;
    setCartItems(cart);
    toast.success('Cart Updated');
  };

  // Remove item from Cart
  const removeCartItem = (itemId) => {
    const cart = structuredClone(cartItems);
    if (cart[itemId]) {
      cart[itemId] -= 1;
      if (cart[itemId] === 0) delete cart[itemId];
    }
    setCartItems(cart);
    toast.success('Remove from Cart');
  };

  const value = {
    user,
    setUser,
    isSeller,
    setIsSeller,
    showUserLogin,
    setShowUserLogin,
    products,
    currency,
    addToCart,
    updateCartItem,
    removeCartItem,
    cartItems,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
