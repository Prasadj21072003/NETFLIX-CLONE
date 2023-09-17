import axios from "axios";
import {
  getmoviestart,
  getmoviesuccess,
  getmoviefailure,
  deletemoviestart,
  deletemoviesuccess,
  deletemoviefailure,
  updatemoviesuccess,
  updatemoviefailure,
  createmoviestart,
  createmoviesuccess,
  createmoviefailure,
} from "./Movieactions";

export const getmovies = async (dispatch) => {
  // dispatch(getmoviestart());
  try {
    const resp = await axios.get("http://localhost:8080/Movie///", {
      headers: {
        token: "bearer " + JSON.parse(localStorage.getItem("user")).acesstoken,
      },
    });

    dispatch(getmoviesuccess(resp.data));
  } catch (error) {
    dispatch(getmoviefailure());
    console.log(error);
  }
};

export const getmoviedelete = async (id, dispatch) => {
  // dispatch(getmoviestart());
  try {
    const resp = await axios.delete(`http://localhost:8080/Movie/${id}`, {
      headers: {
        token: "bearer " + JSON.parse(localStorage.getItem("user")).acesstoken,
      },
    });

    dispatch(deletemoviesuccess(id));
  } catch (error) {
    dispatch(deletemoviefailure());
    console.log(error);
  }
};

export const getmovieupdate = async (id, movie, dispatch) => {
  try {
    const resp = await axios.put(`http://localhost:8080/Movie/${id}`, movie, {
      headers: {
        token: "bearer " + JSON.parse(localStorage.getItem("user")).acesstoken,
      },
    });
    console.log(resp);
    dispatch(updatemoviesuccess());
  } catch (error) {
    dispatch(updatemoviefailure());
    console.log(error);
  }
};

export const createmovie = async (movie, dispatch) => {
  console.log(movie);
  try {
    const resp = await axios.post(
      "http://localhost:8080/Movie/createmovie",
      movie,

      {
        headers: {
          token:
            "bearer " + JSON.parse(localStorage.getItem("user")).acesstoken,
        },
      }
    );
    console.log(resp);
    dispatch(createmoviesuccess(resp));
  } catch (error) {
    dispatch(createmoviefailure());
    console.log(error);
  }
};
