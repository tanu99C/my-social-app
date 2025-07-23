import React, { createContext, useContext, useReducer } from "react";

// Create a Context
export const StateContext = createContext();

// Create a Provider component
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Custom hook to use the StateContext
export const useStateValue = () => useContext(StateContext);
