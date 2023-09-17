import "./newproduct.scss";
import React, { useContext, useEffect, useState } from "react";
import { Moviecontext } from "../../context/movie/Moviecontext";
import { createmovie } from "../../context/movie/apicalls";
import { Link } from "react-router-dom";

export default function Newproduct() {
  const { dispatch } = useContext(Moviecontext);

  const [newmovie, setnewmovie] = useState({
    title: "",
    desc: "",
    img: "",
    imgsmall: "",
    imgtitle: "",
    trailer: "",
    video: "",
    genre: "",
    year: "",
    isseries: "",
  });

  const handlechange = (e) => {
    setnewmovie({
      ...newmovie,
      [e.target.name]: e.target.value,
    });
    // console.log(newmovie);
  };

  const handlecreate = () => {
    createmovie(newmovie, dispatch);
  };

  return (
    <div className="createproduct">
      <div className="wrapper">
        <div className="heading">
          <h1>New Movie</h1>
        </div>
        <div className="form">
          <div className="left">
            <label>img</label>
            <input type="text" name="img" onChange={handlechange} />

            <label>imgsmall</label>
            <input type="text" name="imgsmall" onChange={handlechange} />

            <label>title</label>
            <input
              type="text"
              placeholder="Batman"
              name="title"
              onChange={handlechange}
            />

            <label>desc</label>
            <input
              type="text"
              placeholder="it is awsome movie"
              name="desc"
              onChange={handlechange}
            />

            <label>isseries</label>
            <select name="isseries" id="active" onChange={handlechange}>
              <option value="true">true</option>
              <option value="false">false</option>
            </select>
          </div>
          <div className="left2">
            <label>imgtitle</label>
            <input type="text" onChange={handlechange} name="imgtitle" />

            <label>trailer</label>
            <input type="text" onChange={handlechange} name="trailer" />

            <label>video</label>
            <input type="text" onChange={handlechange} name="video" />

            <label>genre</label>
            <input
              type="text"
              placeholder="Action"
              onChange={handlechange}
              name="genre"
            />

            <label>year</label>
            <input
              type="text"
              placeholder="2014"
              onChange={handlechange}
              name="year"
            />
          </div>
        </div>
        <Link to="/products">
          <div className="createbutton">
            <button onClick={handlecreate}>Create</button>
          </div>
        </Link>
      </div>
    </div>
  );
}
