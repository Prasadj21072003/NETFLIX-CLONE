import "./movielistlists.scss";
import {
  getmovielist,
  getmovielistdelete,
} from "../../context/movielist/apicalls";
import { Movielistcontext } from "../../context/movielist/Movielistcontext";
import React, { useContext, useEffect, useState } from "react";

import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";

export default function Movielist() {
  const { MovieLIST, dispatch } = useContext(Movielistcontext);

  useEffect(() => {
    getmovielist(dispatch);
  }, [dispatch]);

  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "Movielist1",
      headerName: "Movielist",
      width: 200,
      renderCell: (params) => {
        return <div className="products1">{params.row.title}</div>;
      },
    },
    { field: "type", headerName: "TYPE", width: 100 },

    { field: "genre", headerName: "Genre", width: 130 },
    { field: "content", headerName: "Content", width: 340 },

    {
      field: "actions",
      headerName: "Actions",
      width: 170,
      renderCell: (params) => {
        return (
          <div className="actions2">
            <Link
              to={"/Movielist/" + params.row._id}
              state={{
                movielist: params.row,
              }}
            >
              <button className="edit2">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="delete2"
              onClick={() => handledelete(params.row._id)}
            />
          </div>
        );
      },
    },
  ];

  const handledelete = (id) => {
    getmovielistdelete(id, dispatch);
  };

  return (
    <div className="movielistlistcontainer">
      <div className="productlist1">
        <div className="wrapper1">
          <DataGrid
            disableRowSelectionOnClick
            rows={MovieLIST}
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
    </div>
  );
}
