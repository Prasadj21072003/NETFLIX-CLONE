import { createContext, useReducer } from "react";
import { Movielistreducer } from "./Movielistreducer";

const initial_state = {
  MovieLIST: [],
  isfetching: false,
  error: false,
};

export const Movielistcontext = createContext();

export const MovielistProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Movielistreducer, initial_state);

  return (
    <Movielistcontext.Provider
      value={{
        MovieLIST: state.MovieLIST,
        isfetching: state.isfetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </Movielistcontext.Provider>
  );
};
