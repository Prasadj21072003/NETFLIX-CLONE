import React, { useContext } from "react";
import Topbar from "./components/Topbar/Topbar";
import { RedirectFunction } from "react-router-dom";
import "./app.scss";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home.jsx";
import Userlist from "./pages/userlist/Userlist";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import User from "./pages/user/User";
import Createuser from "./pages/createuser/Createuser";
import Productlist from "./pages/productlist/Productlist";
import Newproduct from "./pages/newproduct/Newproduct";
import Product from "./pages/product/Product";
import Movielistlists from "./pages/movielistlists/Movielistlists";
import Movielist from "./pages/movielist/Movielist";
import Newlist from "./pages/newlist/Newlist";
import Login from "./pages/login/Login";
import { Logincontext } from "./context/login/logincontext";

export default function App() {
  const { user } = useContext(Logincontext);

  return (
    <Router>
      <div className="container">
        {user ? (
          <>
            <Topbar />
            <Sidebar />
          </>
        ) : (
          <Navigate to="/login" />
        )}

        <Routes>
          {user ? (
            <>
              <Route exact path="/" element={<Home />} />
              <Route path="/users" element={<Userlist />} />
              <Route path="/users/:userid" element={<User />} />
              <Route path="/users/createuser" element={<Createuser />} />
              <Route path="/products" element={<Productlist />} />
              <Route path="/createproduct" element={<Newproduct />} />
              <Route path="/products/:productid" element={<Product />} />
              <Route path="/Movielist" element={<Movielistlists />} />
              <Route path="/Movielist/:id" element={<Movielist />} />
              <Route path="/newlist" element={<Newlist />} />
            </>
          ) : (
            <Route path="/login" element={<Login />} />
          )}
        </Routes>
      </div>
    </Router>
  );
}
