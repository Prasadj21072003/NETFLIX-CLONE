import React, { useContext, useEffect, useState } from "react";
import "./productlist.scss";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";
import { Moviecontext } from "../../context/movie/Moviecontext";
import { getmovies } from "../../context/movie/apicalls";
import { getmoviedelete } from "../../context/movie/apicalls";

export default function Productlist() {
  const { Movies, dispatch } = useContext(Moviecontext);

  useEffect(() => {
    getmovies(dispatch);
  }, [dispatch]);

  console.log(Movies);

  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "Movie1",
      headerName: "Movie",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="products">
            <img src={params.row.img} alt="" className="productimg" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "desc", headerName: "Desc", width: 200 },

    { field: "genre", headerName: "Genre", width: 130 },
    { field: "year", headerName: "Year", width: 130 },
    { field: "isseries", headerName: "Isseries", width: 130 },

    {
      field: "actions",
      headerName: "Actions",
      width: 160,
      renderCell: (params) => {
        return (
          <div className="actions1">
            <Link
              to={"/products/" + params.row._id}
              state={{ movie: params.row }}
            >
              <button className="edit1">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="delete1"
              onClick={() => handledelete(params.row._id)}
            />
          </div>
        );
      },
    },
  ];

  const handledelete = (id) => {
    getmoviedelete(id, dispatch);
  };

  return (
    <div className="productlist">
      <div className="wrapper">
        <DataGrid
          disableRowSelectionOnClick
          rows={Movies}
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
