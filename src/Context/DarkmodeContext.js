
import { createContext, useReducer } from "react";
import Darkmodereducer from "./Darkmodereducer";

const INITIAL_STATE = {
  darkMode: false,
};

export const DarkmodeContext = createContext(INITIAL_STATE);

export const DarkmodeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Darkmodereducer, INITIAL_STATE);

  return (
    <DarkmodeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
      {children}
    </DarkmodeContext.Provider>
  );
};