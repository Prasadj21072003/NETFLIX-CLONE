import axios from "axios";
import {
  getuserstart,
  getusersuccess,
  getuserfailure,
  deleteuserstart,
  deleteusersuccess,
  deleteuserfailure,
  updateusersuccess,
  updateuserfailure,
  createuserstart,
  createusersuccess,
  createuserfailure,
} from "./useractions";

export const getuser = async (dispatch) => {
  // dispatch(getmoviestart());
  try {
    const resp = await axios.get("http://localhost:8080/user/", {
      headers: {
        token: "bearer " + JSON.parse(localStorage.getItem("user")).acesstoken,
      },
    });

    dispatch(getusersuccess(resp.data));
  } catch (error) {
    dispatch(getuserfailure());
    console.log(error);
  }
};

export const getuserdelete = async (id, dispatch) => {
  // dispatch(getmoviestart());
  try {
    const resp = await axios.delete(`http://localhost:8080/user/${id}`, {
      headers: {
        token: "bearer " + JSON.parse(localStorage.getItem("user")).acesstoken,
      },
    });

    dispatch(deleteusersuccess(id));
  } catch (error) {
    dispatch(deleteuserfailure());
    console.log(error);
  }
};

export const getuserupdate = async (id, user, dispatch) => {
  try {
    const resp = await axios.put(`http://localhost:8080/user/${id}`, user, {
      headers: {
        token: "bearer " + JSON.parse(localStorage.getItem("user")).acesstoken,
      },
    });
    console.log(resp);
    dispatch(updateusersuccess(resp));
  } catch (error) {
    dispatch(updateuserfailure());
    console.log(error);
  }
};

export const createuser = async (user, dispatch) => {
  try {
    const resp = await axios.post(
      "http://localhost:8080/user/createuser",
      user,

      {
        headers: {
          token:
            "bearer " + JSON.parse(localStorage.getItem("user")).acesstoken,
        },
      }
    );
    console.log(resp);
    dispatch(createusersuccess(resp.data));
  } catch (error) {
    dispatch(createuserfailure());
    console.log(error);
  }
};
