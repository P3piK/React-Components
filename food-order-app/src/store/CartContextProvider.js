import React, { useReducer } from "react";
import CartContext from "./cart-context";

const totalAmount = (items) => items.reduce((a, b) => a + b.amount, 0);
const totalPrice = (items) =>
  items.reduce((a, b) => Math.round(a + b.price * b.amount * 100) / 100, 0);

const cartReducer = (state, action) => {
  let index;
  switch (action.type) {
    case "add":
      index = state.items.findIndex((p) => p.id === action.item.id);

      if (index !== -1) {
        state.items[index].amount += action.item.amount;
      } else {
        state.items = [...state.items, action.item];
      }

      return {
        items: state.items,
        totalAmount: totalAmount(state.items),
        totalPrice: totalPrice(state.items),
      };
    case "remove":
      index = state.items.findIndex((item) => item.id === action.item.id);
      console.log(index);
      if (index !== -1) {
        if (state.items[index].amount > 1) {
          console.log(">1");
          state.items[index].amount -= action.item.amount;
        } else {
          console.log("1");
          state.items = state.items.filter(
            (item) => item.id !== action.item.id
          );
        }
      }
      return {
        items: state.items,
        totalAmount: totalAmount(state.items),
        totalPrice: totalPrice(state.items),
      };
    default:
      console.log("default");
      return state;
  }
};

function CartContextProvider(props) {
  const [cartState, dispatchCart] = useReducer(cartReducer, {
    type: "",
    items: [],
    totalAmount: 0,
    totalPrice: 0,
  });

  const addOrUpdateItemHandler = (item) => {
    console.log(item);
    dispatchCart({ type: "add", item: item });
  };

  const removeItemHandler = (item) => {
    dispatchCart({ type: "remove", item: item });
  };

  return (
    <CartContext.Provider
      value={{
        addItem: addOrUpdateItemHandler,
        removeItem: removeItemHandler,
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        totalPrice: cartState.totalPrice,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
