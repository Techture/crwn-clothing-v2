import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  cartCount: 0,
  cartTotal: 0
});

export const CartProvider = ({ children }) => {
  // const [{ cartItems, isCartOpen, cartCount, cartTotal }, dispatch] =
  //   useReducer(cartReducer, INITIAL_STATE);

  // const updateCartItemsReducer = (newCartItems) => {
  //   const newCartCount = newCartItems.reduce(
  //     (total, cartItem) => total + cartItem.quantity,
  //     0
  //   );

  //   const newCartTotal = newCartItems.reduce(
  //     (total, cartItem) => total + cartItem.quantity * cartItem.price,
  //     0
  //   );

  //   const cartPayload = {
  //     cartItems: newCartItems,
  //     cartTotal: newCartTotal,
  //     cartCount: newCartCount
  //   };

  //   dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartPayload));
  // };

  const value = {
    // isCartOpen,
    // cartItems,
    // cartCount,
    // cartTotal
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
