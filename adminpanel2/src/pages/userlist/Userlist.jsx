import React, { useState, useContext, useEffect } from "react";
import "./userlist.scss";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";
import { Usercontext } from "../../context/user/usercontext";
import { getuser, getuserdelete } from "../../context/user/apicalls";

export default function Userlist() {
  const { users, dispatch } = useContext(Usercontext);

  useEffect(() => {
    getuser(dispatch);
  }, [dispatch]);

  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="user">
            <img
              src={
                params.row.profilepic ||
                "https://netflix-bootcamp-db.netlify.app/static/media/profileIcon1.b36331ae.jpg"
              }
              alt=""
              className="userimg"
            />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 300 },
    {
      field: "isAdmin",
      headerName: "isAdmin",

      width: 120,
    },

    {
      field: "actions",
      headerName: "Actions",
      width: 160,
      renderCell: (params) => {
        return (
          <div className="actions">
            <Link
              to={"/users/" + params.row._id}
              state={{
                user: params.row,
              }}
            >
              <button className="edit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="delete"
              onClick={() => handledelete(params.row._id)}
            />
          </div>
        );
      },
    },
  ];

  const handledelete = (id) => {
    getuserdelete(id, dispatch);
  };

  return (
    <div className="userlist">
      <div className="wrapper">
        <DataGrid
          disableRowSelectionOnClick
          rows={users}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          getRowId={(r) => r._id}
        />
      </div>
    </div>
  );
}
