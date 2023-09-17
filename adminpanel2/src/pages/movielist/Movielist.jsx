import React, { useContext, useEffect, useState } from "react";
import "./movielist.scss";
import { Link, useLocation } from "react-router-dom";
import PublishIcon from "@mui/icons-material/Publish";
import { Movielistcontext } from "../../context/movielist/Movielistcontext";
// import { product } from "../../demodata";
import { getmovielistupdate } from "../../context/movielist/apicalls";

export default function Movielist() {
  const { dispatch } = useContext(Movielistcontext);
  const location = useLocation();
  const movielist = location.state.movielist;

  const movielistcontent = movielist.content;

  const [updatemovielist, setupdatemovielist] = useState(movielist);

  const handlechange = (e) => {
    setupdatemovielist({
      ...updatemovielist,
      [e.target.name]: e.target.value ? e.target.value : e.target.placeholder,
    });
  };

  const handleupdate = () => {
    getmovielistupdate(movielist._id, updatemovielist, dispatch);
    // getmovieupdate(movie._id, updatemovie1, dispatch);
  };

  useEffect(() => {
    console.log(updatemovielist);
  }, [handlechange]);

  return (
    <div className="movielist">
      <div className="wrapper3">
        <div className="top3">
          <h1>Edit Movielist</h1>
          <Link to="/newlist">
            <button>Create</button>
          </Link>
        </div>
        <div className="midcontainer2">
          <div className="rightbox2">
            <div className="header2">
              <span>{movielist.title}</span>
            </div>
            <div className="desc2">
              <h6 className="descinfo2">
                _id:<span>{movielist._id}</span>
              </h6>
              <h6 className="descinfo2">
                type:<span>{movielist.type}</span>
              </h6>
              <h6 className="descinfo2">
                genre:<span>{movielist.genre}</span>
              </h6>

              {movielistcontent.map((movieid, index) => (
                <h6 className="descinfo2">
                  content {index}:
                  <span className="moviedescspan1">{movieid}</span>
                </h6>
              ))}
            </div>
          </div>
        </div>

        <div className="lastcontainer2">
          <div className="lastbox2">
            <div className="left2">
              <label>title</label>
              <input
                type="text"
                name="title"
                placeholder={movielist.title}
                onChange={handlechange}
              />
              <label>type</label>
              <input
                type="text"
                name="type"
                placeholder={movielist.type}
                onChange={handlechange}
              />
              <label>genre</label>
              <input
                type="text"
                name="genre"
                placeholder={movielist.genre}
                onChange={handlechange}
              />
              {movielistcontent.map((movieid, index) => (
                <div>
                  <label>content {index}</label>
                  <input
                    type="text"
                    name="content"
                    placeholder={movieid}
                    onChange={handlechange}
                  />
                </div>
              ))}
            </div>
            <div className="right2">
              <div className="profile3">
                <Link to="/Movielist/">
                  <div className="update3">
                    <button className="updatebutton3" onClick={handleupdate}>
                      Update
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
