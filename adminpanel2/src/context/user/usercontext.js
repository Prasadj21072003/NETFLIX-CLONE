import { createContext, useReducer } from "react";
import { Userreducer } from "./userreducer";

const initial_state = {
  users: [],
  isfetching: false,
  error: false,
};

export const Usercontext = createContext();

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Userreducer, initial_state);

  return (
    <Usercontext.Provider
      value={{
        users: state.users,
        isfetching: state.isfetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </Usercontext.Provider>
  );
};
