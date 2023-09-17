import { createContext, useReducer } from "react";
import { Moviereducer } from "./Moviereducer";

const initial_state = {
  Movies: [],
  isfetching: false,
  error: false,
};

export const Moviecontext = createContext();

export const MovieProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Moviereducer, initial_state);

  return (
    <Moviecontext.Provider
      value={{
        Movies: state.Movies,
        isfetching: state.isfetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </Moviecontext.Provider>
  );
};
