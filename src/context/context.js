import React, { createContext, useContext, useReducer } from "react";

// context for the state
export const StateContext = createContext();

const StateProvider = ({ children, initialState, reducer }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

// Hook to consume the state provider
export const useStateValue = () => useContext(StateContext);

export default StateProvider;
