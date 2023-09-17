import ReactDOM from "react-dom";
import React from "react";

import App from "./App";
import { MovieProvider } from "./context/movie/Moviecontext";
import { MovielistProvider } from "./context/movielist/Movielistcontext";
import { UserProvider } from "./context/user/usercontext";
import { LoginProvider } from "./context/login/logincontext";

ReactDOM.render(
  <MovieProvider>
    <MovielistProvider>
      <UserProvider>
        <LoginProvider>
          <App />
        </LoginProvider>
      </UserProvider>
    </MovielistProvider>
  </MovieProvider>,
  document.getElementById("root")
);
