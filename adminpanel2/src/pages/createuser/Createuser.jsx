import React from "react";
import "./createuser.scss";
import { Usercontext } from "../../context/user/usercontext";
import { useState } from "react";
import { createuser } from "../../context/user/apicalls";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function Createuser() {
  const { dispatch } = useContext(Usercontext);

  const [newuser, setnewuser] = useState({
    username: "",
    email: "",
    password: "",
    profilepic: "",
  });

  const handlechange = (e) => {
    setnewuser({
      ...newuser,
      [e.target.name]: e.target.value,
    });
    console.log(newuser);
  };

  const handlecreate = () => {
    createuser(newuser, dispatch);
  };

  return (
    <div className="createuserpage">
      <div className="wrapper">
        <div className="heading">
          <h1>New User</h1>
        </div>
        <div className="form">
          <div className="left">
            <label>Username</label>
            <input
              type="text"
              placeholder="Random"
              name="username"
              onChange={handlechange}
            />

            <label>Email</label>
            <input
              type="text"
              placeholder="123@gmail.com"
              name="email"
              onChange={handlechange}
            />

            <label>Password</label>
            <input type="text" name="password" onChange={handlechange} />
            <label>Profilepic</label>
            <input type="text" name="profilepic" onChange={handlechange} />
          </div>
          <div className="right">
            <img src={newuser.profilepic} alt="" />
          </div>
        </div>
        <Link to="/users">
          <div className="createbutton">
            <button onClick={handlecreate}>Create</button>
          </div>
        </Link>
      </div>
    </div>
  );
}
