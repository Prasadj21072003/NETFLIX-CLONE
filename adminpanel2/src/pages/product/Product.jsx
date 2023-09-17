import React, { useContext, useEffect, useState } from "react";
import "./product.scss";
import { Link, useLocation } from "react-router-dom";
import PublishIcon from "@mui/icons-material/Publish";
import { Moviecontext } from "../../context/movie/Moviecontext";
// import { product } from "../../demodata";
import { getmovieupdate } from "../../context/movie/apicalls";

export default function Product() {
  const { dispatch } = useContext(Moviecontext);
  const location = useLocation();
  const movie = location.state.movie;

  const [updatemovie, setupdatemovie] = useState(movie);

  const [img, setimg] = useState(movie.img);

  const [imgsmall, setimgsmall] = useState(movie.imgsmall);
  const [imgtitle, setimgtitle] = useState(movie.imgtitle);
  const [trailer, settrailer] = useState(movie.trailer);
  const [video, setvideo] = useState(movie.video);

  const handlechange = (e) => {
    setupdatemovie({
      ...updatemovie,
      [e.target.name]: e.target.value ? e.target.value : e.target.placeholder,
    });
  };

  const handleupdate = () => {
    getmovieupdate(movie._id, updatemovie, dispatch);
    // getmovieupdate(movie._id, updatemovie1, dispatch);
  };

  useEffect(() => {
    console.log(updatemovie);
  }, [handlechange]);

  return (
    <div className="maincontainer">
      <div className="wrapper1">
        <div className="top1">
          <h1>Edit Movie</h1>
          <Link to="/createproduct">
            <button>Create</button>
          </Link>
        </div>
        <div className="midcontainer">
          <div className="leftbox">
            <div className="desc">
              <h6 className="descinfo">
                imgsmall:
                <span className="moviedescspan">
                  {movie.imgsmall.slice(0, 35) + "..."}
                </span>
              </h6>
              <h6 className="descinfo">
                imgtitle:
                <span className="moviedescspan">
                  {movie.imgtitle.slice(0, 40).slice(0, 35) + "..."}
                </span>
              </h6>
              <h6 className="descinfo">
                tralier:<span>{movie.trailer.slice(0, 35) + "..."}</span>
              </h6>
              <h6 className="descinfo">
                video:<span>{movie.trailer.slice(0, 35) + "..."}</span>
              </h6>
              <h6 className="descinfo">
                isseries:<span>{String(movie.isseries)}</span>
              </h6>
            </div>
          </div>
          <div className="rightbox">
            <div className="header">
              <img src={movie.img} alt="" />
              <span>{movie.title}</span>
            </div>
            <div className="desc">
              <h6 className="descinfo">
                _id:<span className="moviedescspan">{movie._id}</span>
              </h6>
              <h6 className="descinfo">
                desc:<span className="moviedescspan">{movie.desc}</span>
              </h6>
              <h6 className="descinfo">
                genre:<span>{movie.genre}</span>
              </h6>
              <h6 className="descinfo">
                year:<span>{movie.year}</span>
              </h6>
            </div>
          </div>
        </div>

        <div className="lastcontainer">
          <div className="lastbox">
            <div className="left">
              <label>title</label>
              <input
                type="text"
                name="title"
                placeholder={movie.title}
                onChange={handlechange}
              />
              <label>desc</label>
              <input
                type="text"
                name="desc"
                placeholder={movie.desc}
                onChange={handlechange}
              />
              <label>genre</label>
              <input
                type="text"
                name="genre"
                placeholder={movie.genre}
                onChange={handlechange}
              />
              <label>year</label>
              <input
                type="text"
                name="year"
                placeholder={movie.year}
                onChange={handlechange}
              />
              <label>imgsmall</label>
              <input
                type="text"
                name="imgsmall"
                id="imgsmall"
                placeholder={movie.imgsmall}
                onChange={handlechange}
              />
              <label>imgtitle</label>
              <input
                type="text"
                name="imgtitle"
                id="imgtitle"
                placeholder={movie.imgtitle}
                onChange={handlechange}
              />
              <label>trailer</label>
              <input
                type="text"
                name="trailer"
                id="trailer"
                placeholder={movie.trailer}
                onChange={handlechange}
              />

              <label>video</label>
              <input
                type="text"
                name="video"
                id="video"
                placeholder={movie.video}
                onChange={handlechange}
              />

              <label>isseries</label>
              <select name="isseries" id="instock">
                <option value="true">true</option>
                <option value="false">false</option>
              </select>
            </div>
            <div className="right">
              <div className="profile1">
                <div className="image1">
                  <img src={movie.img} alt="" />

                  <input
                    type="text"
                    name="img"
                    id="file1"
                    placeholder={movie.img}
                    onChange={handlechange}
                  />
                </div>
                <Link to="/products">
                  <div className="update1">
                    <button className="updatebutton1" onClick={handleupdate}>
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
