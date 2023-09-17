export const getmoviestart = () => ({
  type: "MOVIES_START",
});
export const getmoviesuccess = (Movies) => ({
  type: "MOVIES_SUCCESS",
  payload: Movies,
});
export const getmoviefailure = () => ({
  type: "MOVIES_FAILURE",
});

export const deletemoviestart = () => ({
  type: "delete_START",
});
export const deletemoviesuccess = (id) => ({
  type: "delete_SUCCESS",
  payload: id,
});
export const deletemoviefailure = () => ({
  type: "delete_FAILURE",
});

export const updatemoviestart = () => ({
  type: "update_START",
});
export const updatemoviesuccess = (movie) => ({
  type: "update_SUCCESS",
  payload: movie,
});

export const updatemoviefailure = () => ({
  type: "update_FAILURE",
});
export const createmoviestart = () => ({
  type: "create_START",
});

export const createmoviesuccess = (movie) => ({
  type: "create_SUCCESS",
  payload: movie,
});
export const createmoviefailure = () => ({
  type: "create_FAILURE",
});
