export const getmovieliststart = () => ({
  type: "MOVIELIST_START",
});
export const getmovielistsuccess = (MovieLIST) => ({
  type: "MOVIELIST_SUCCESS",
  payload: MovieLIST,
});
export const getmovielistfailure = () => ({
  type: "MOVIELIST_FAILURE",
});

export const deletemovieliststart = () => ({
  type: "delete_START",
});
export const deletemovielistsuccess = (id) => ({
  type: "delete_SUCCESS",
  payload: id,
});
export const deletemovielistfailure = () => ({
  type: "delete_FAILURE",
});

export const updatemovieliststart = () => ({
  type: "update_START",
});
export const updatemovielistsuccess = (movie) => ({
  type: "update_SUCCESS",
  payload: movie,
});

export const updatemovielistfailure = () => ({
  type: "update_FAILURE",
});
export const createmovieliststart = () => ({
  type: "create_START",
});

export const createmovielistsuccess = (movie) => ({
  type: "create_SUCCESS",
  payload: movie,
});
export const createmovielistfailure = () => ({
  type: "create_FAILURE",
});
