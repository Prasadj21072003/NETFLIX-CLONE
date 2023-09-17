import axios from "axios";
import {
  loginstart,
  loginsuccess,
  loginfailure,
  logoutsuccess,
  logoutfailure,
} from "./loginactions";
import { Navigate } from "react-router-dom";

export const loginuser = async (user, dispatch) => {
  try {
    const resp = await axios.post("http://localhost:8080/api/auth/login", user);
    console.log(resp.data);
    resp.data.isAdmin && dispatch(loginsuccess(resp.data));
  } catch (error) {
    dispatch(loginfailure());
    console.log(error);
  }
};

export const logoutuser = async (dispatch) => {
  try {
    dispatch(logoutsuccess());
    <Navigate to="/logout" />;
  } catch (error) {
    dispatch(logoutfailure());
    console.log(error);
  }
};
