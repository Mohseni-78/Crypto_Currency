import React, { useReducer } from "react";
import { createContext } from "react";
import toastify from "../services/toastify";

export const cartContext = createContext();

const initialState = {
  selectedItem: [],
  itemCounter: 0,
  total: 0,
  checkOut: false,
  clear: true,
};

const sumItems = (pro) => {
  const itemCounter = pro.reduce((total, item) => total + item.quantity, 0);
  return { itemCounter };
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItem.find((item) => item.id === action.payload.id)) {
        state.selectedItem.push({ ...action.payload, quantity: 1 });
        toastify("success", "به سبد خرید اضافه شد !");
      }
      return {
        ...state,
        selectedItem: [...state.selectedItem],
        ...sumItems(state.selectedItem),
      };
    case "INCREASE":
      const indexI = state.selectedItem.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItem[indexI].quantity++;
      return {
        ...state,
        ...sumItems(state.selectedItem),
      };

    case "DECREASE":
      const indexD = state.selectedItem.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItem[indexD].quantity--;
      return {
        ...state,
        ...sumItems(state.selectedItem),
      };

    case "REMOVE_ITEM":
      const newSelectedItem = state.selectedItem.filter(
        (item) => item.id !== action.payload.id
      );
      toastify("error", "از سبد خرید حذف گردید !");
      return {
        ...state,
        selectedItem: [...newSelectedItem],
        ...sumItems(newSelectedItem),
      };

    case "CLEAR":
      return {
        ...state,
        selectedItem: [],
        itemCounter: 0,
        total: 0,
        clear: true,
        checkOut: false,
      };
    case "CHECKOUT":
      return {
        ...state,
        selectedItem: [],
        itemCounter: 0,
        total: 0,
        clear: false,
        checkOut: true,
      };

    default:
      return {
        ...state,
      };
  }
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  console.log(initialState);
  return (
    <>
      <cartContext.Provider value={{ dispatch, state }}>
        {children}
      </cartContext.Provider>
    </>
  );
};

export default CartContextProvider;
