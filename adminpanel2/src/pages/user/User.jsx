import React, { useContext, useEffect, useState } from "react";
import "./user.scss";
import MailIcon from "@mui/icons-material/Mail";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PublishIcon from "@mui/icons-material/Publish";
import { Link, useLocation } from "react-router-dom";
import { Usercontext } from "../../context/user/usercontext";
import { getuserupdate } from "../../context/user/apicalls";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

export default function User() {
  const { dispatch } = useContext(Usercontext);
  const location = useLocation();
  console.log(location);
  const user = location.state.user;

  const [updateuser, setupdateuser] = useState(user);

  const handlechange = (e) => {
    setupdateuser({
      ...updateuser,
      [e.target.name]: e.target.value ? e.target.value : e.target.placeholder,
    });
  };

  const handleupdate = () => {
    getuserupdate(user._id, updateuser, dispatch);
    // getmovieupdate(movie._id, updatemovie1, dispatch);
  };

  useEffect(() => {
    console.log(updateuser);
  }, [handlechange]);

  const isAdmin = String(updateuser.isAdmin);

  return (
    <div className="new">
      <div className="wrapper">
        <div className="top">
          <h1>Edit User</h1>
          <Link to="/users/createuser">
            <button>Create</button>
          </Link>
        </div>
        <div className="usercontainer">
          <div className="usershow">
            <div className="photo">
              <img
                src={
                  updateuser.profilepic
                    ? updateuser.profilepic
                    : "https://netflix-bootcamp-db.netlify.app/static/media/profileIcon1.b36331ae.jpg"
                }
                alt=""
              />
              <span className="name">{updateuser.username}</span>
            </div>
            <div className="details">
              <span className="accountdetails">Account Details</span>
              <span className="email">
                <MailIcon className="icon" />
                {updateuser.email}
              </span>
              <span className="date">
                <AdminPanelSettingsIcon className="icon" />
                isAdmin : {isAdmin}
              </span>
            </div>
          </div>
          <div className="userupdate">
            <div className="info">
              <div className="heading">
                <h1>Edit</h1>
              </div>
              <div className="updateinfo">
                <div className="infoinput">
                  <label className="label">Username</label>
                  <input
                    type="text"
                    placeholder={updateuser.username}
                    className="input"
                    name="username"
                    onChange={handlechange}
                  />
                </div>
                <div className="infoinput">
                  <label className="label">Email</label>
                  <input
                    type="text"
                    placeholder={updateuser.email}
                    className="input"
                    name="email"
                    onChange={handlechange}
                  />
                </div>
                <div className="infoinput">
                  <label className="label">Password</label>
                  <input
                    type="text"
                    placeholder={updateuser.password}
                    className="input"
                    name="password"
                    onChange={handlechange}
                  />
                </div>
                <div className="infoinput">
                  <label className="label">isAdmin</label>
                  <input
                    type="text"
                    placeholder={isAdmin}
                    className="input"
                    name="isAdmin"
                    onChange={handlechange}
                  />
                </div>
                <div className="infoinput">
                  <label className="label">Profilepic</label>
                  <input
                    type="text"
                    placeholder={updateuser.profilepic}
                    className="input"
                    name="profilepic"
                    onChange={handlechange}
                  />
                </div>
              </div>
            </div>
            <div className="profile">
              <div className="image">
                <img
                  src={
                    updateuser.profilepic
                      ? updateuser.profilepic
                      : "https://netflix-bootcamp-db.netlify.app/static/media/profileIcon1.b36331ae.jpg"
                  }
                  alt=""
                />
              </div>
              <div className="update">
                <button className="updatebutton" onClick={handleupdate}>
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
