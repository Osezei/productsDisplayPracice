import React, { useContext, useReducer, useEffect } from "react";
import { footWears } from "../utils/Data.js";
import reducer from "../reducer/reducer";

const AppContext = React.createContext();

const AppProvider = function ({ children }) {
  const initialState = {
    products: footWears,
    allKicks: footWears,
    activeFilter: "all",
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = function () {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
