import React from "react";
import "./login.scss";
import { useContext, useEffect, useState } from "react";
import { Logincontext } from "../../context/login/logincontext";
import { loginuser } from "../../context/login/apicalls";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const { dispatch } = useContext(Logincontext);
  const navigate = useNavigate();

  const [user, setuser] = useState({
    email: "",
    password: "",
  });

  const handlechange = (e) => {
    setuser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const login = () => {
    console.log(user);
    loginuser(user, dispatch);
    navigate("/");
  };

  useEffect(() => {
    console.log(user);
  }, [handlechange]);

  return (
    <div className="logincontainer">
      <div className="loginform">
        <div className="form1">
          <h1>Adminpanel</h1>
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            onChange={handlechange}
          />
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            onChange={handlechange}
          />
          <button className="button" onClick={login}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
