import React, { useContext, useReducer, useEffect } from "react";
import { footWears } from "../utils/Data.js";
import reducer from "../reducer/reducer";

const AppContext = React.createContext();

const AppProvider = function ({ children }) {
  const getLocalStorage = () => {
    let cart = localStorage.getItem("cart");
    if (cart) {
      return JSON.parse(localStorage.getItem("cart"));
    } else {
      return [];
    }
  };

  const initialState = {
    products: footWears,
    allKicks: footWears,
    activeFilter: "all",
    min_price: 0,
    max_price: 3000,
    price: "",
    cart: getLocalStorage(),
    total_items: 0,
    total_amount: 0,
    tempStock: 1,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const decreaseAmount = (value, stock) => {
    dispatch({ type: "DECREASE_AMOUNT", payload: { value, stock } });
  };
  const increaseAmount = (value, stock) => {
    dispatch({ type: "INCREASE_AMOUNT", payload: { value, stock } });
  };

  useEffect(() => {
    dispatch({ type: "SET_PRICE" });
  }, []);

  const sortHandler = (value) => {
    dispatch({ type: "SORT_HANDLE", payload: value });
  };

  const categoryHandle = (value) => {
    dispatch({ type: "CATEGORY_HANDLE", payload: value });
  };

  const companyHandle = (value) => {
    dispatch({ type: "COMPANY_HANDLE", payload: value });
  };

  const updatePrice = (value) => {
    dispatch({ type: "PRICE_UPDATE", payload: value });
  };

  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTER" });
  };

  useEffect(() => {
    dispatch({ type: "COUNT_CART_TOTALS" });
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  const addToCart = (id, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, amount, product } });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const increaseCart = (id, value, max) => {
    dispatch({ type: "INCREASE_CART", payload: { id, value, max } });
  };

  const decreaseCart = (id, value, max) => {
    dispatch({ type: "DECREASE_CART", payload: { id, value, max } });
  };
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id } });
  };
  return (
    <AppContext.Provider
      value={{
        ...state,
        decreaseAmount,
        increaseAmount,
        sortHandler,
        categoryHandle,
        companyHandle,
        updatePrice,
        clearFilters,
        addToCart,
        clearCart,
        increaseCart,
        decreaseCart,
        removeItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = function () {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
