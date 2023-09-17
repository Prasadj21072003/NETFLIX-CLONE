import axios from "axios";
import {
  getmovieliststart,
  getmovielistsuccess,
  getmovielistfailure,
  deletemovieliststart,
  deletemovielistsuccess,
  deletemovielistfailure,
  updatemovielistsuccess,
  updatemovielistfailure,
  createmovieliststart,
  createmovielistsuccess,
  createmovielistfailure,
} from "./Movielistactions";

export const getmovielist = async (dispatch) => {
  // dispatch(getmoviestart());
  try {
    const resp = await axios.get("http://localhost:8080/list/", {
      headers: {
        token: "bearer " + JSON.parse(localStorage.getItem("user")).acesstoken,
      },
    });

    dispatch(getmovielistsuccess(resp.data));
  } catch (error) {
    dispatch(getmovielistfailure());
    console.log(error);
  }
};

export const getmovielistdelete = async (id, dispatch) => {
  // dispatch(getmoviestart());
  try {
    const resp = await axios.delete(`http://localhost:8080/list/${id}`, {
      headers: {
        token: "bearer " + JSON.parse(localStorage.getItem("user")).acesstoken,
      },
    });

    dispatch(deletemovielistsuccess(id));
  } catch (error) {
    dispatch(deletemovielistfailure());
    console.log(error);
  }
};

export const getmovielistupdate = async (id, movielist, dispatch) => {
  try {
    const resp = await axios.put(
      `http://localhost:8080/list/${id}`,
      movielist,
      {
        headers: {
          token:
            "bearer " + JSON.parse(localStorage.getItem("user")).acesstoken,
        },
      }
    );
    console.log(resp);
    dispatch(updatemovielistsuccess(resp));
  } catch (error) {
    dispatch(updatemovielistfailure());
    console.log(error);
  }
};

export const createmovielist = async (movielist, dispatch) => {
  try {
    const resp = await axios.post(
      "http://localhost:8080/list/createlist",
      movielist,

      {
        headers: {
          token:
            "bearer " + JSON.parse(localStorage.getItem("user")).acesstoken,
        },
      }
    );
    console.log(resp);
    dispatch(createmovielistsuccess(resp.data));
  } catch (error) {
    dispatch(createmovielistfailure());
    console.log(error);
  }
};
