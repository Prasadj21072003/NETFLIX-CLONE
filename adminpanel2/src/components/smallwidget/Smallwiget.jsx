import React from "react";
import "./smallwidget.scss";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState, useEffect } from "react";
import axios from "axios";
import { tokennotvalid } from "../../context/login/loginactions";

export default function Smallwiget() {
  const [newuser, setnewuser] = useState([]);

  useEffect(() => {
    const getnewuser = async () => {
      try {
        const res = await axios.get("http://localhost:8080/user?new=true", {
          headers: {
            token:
              "bearer " + JSON.parse(localStorage.getItem("user")).acesstoken,
          },
        });
        console.log(res.data);
        if (res.data === "Token is not valid") {
          tokennotvalid();
        } else {
          setnewuser(res.data);
        }
      } catch (error) {
        console.log(`the error is: ${error}`);
      }
    };
    getnewuser();
  }, []);

  return (
    <div className="smallwidget">
      <div className="wrapper">
        <h4>New Join Members</h4>

        <ul>
          {newuser?.map((user) => (
            <li className="userli">
              <img
                src={
                  user.profilepic ||
                  "https://netflix-bootcamp-db.netlify.app/static/media/profileIcon1.b36331ae.jpg"
                }
                alt=""
                className="userphoto"
              />
              <span className="username">{user.username}</span>

              <button className="button">
                <VisibilityIcon />
                <span className="buttontext">Display</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
