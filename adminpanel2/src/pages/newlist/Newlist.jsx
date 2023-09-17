import React, { useContext, useEffect, useState } from "react";
import { Movielistcontext } from "../../context/movielist/Movielistcontext";
import { createmovielist } from "../../context/movielist/apicalls";
import { Link } from "react-router-dom";
import "./newlist.scss";

export default function Newlist() {
  const { dispatch } = useContext(Movielistcontext);

  const [newmovielist, setnewmovielist] = useState({
    title: "",
    type: "",
    genre: "",
    content: [""],
  });

  const handlechange = (e) => {
    setnewmovielist({
      ...newmovielist,
      [e.target.name]: e.target.value,
    });
    console.log(newmovielist);
  };

  const handlecreate = () => {
    createmovielist(newmovielist, dispatch);
  };

  return (
    <div className="newlist">
      <div className="wrapper1">
        <div className="heading1">
          <h1>New List</h1>
        </div>
        <div className="form1">
          <div className="left1">
            <label>title</label>
            <input type="text" name="title" onChange={handlechange} />

            <label>type</label>
            <input type="text" name="type" onChange={handlechange} />

            <label>genre</label>
            <input type="text" name="genre" onChange={handlechange} />

            <label>content</label>
            <input
              className="content"
              type="text"
              name="content"
              onChange={handlechange}
            />
          </div>
        </div>
        <Link to="/Movielist">
          <div className="createbutton1">
            <button onClick={handlecreate}>Create</button>
          </div>
        </Link>
      </div>
    </div>
  );
}
