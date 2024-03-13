import { createContext, useReducer } from "react";

const intialSate = {
  count: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        count: state.count + 1,
      };
    default:
      return state;
  }
};
export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialSate);
  console.log("re-render")
  return (
    <Context.Provider value={{ count: state.count, dispatch }}>
      {children}
    </Context.Provider>
  );
};
 