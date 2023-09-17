export const getuserstart = () => ({
  type: "user_START",
});
export const getusersuccess = (users) => ({
  type: "user_SUCCESS",
  payload: users,
});
export const getuserfailure = () => ({
  type: "user_FAILURE",
});

export const deleteuserstart = () => ({
  type: "delete_START",
});
export const deleteusersuccess = (id) => ({
  type: "delete_SUCCESS",
  payload: id,
});
export const deleteuserfailure = () => ({
  type: "delete_FAILURE",
});

export const updateuserstart = () => ({
  type: "update_START",
});
export const updateusersuccess = (user) => ({
  type: "update_SUCCESS",
  payload: user,
});

export const updateuserfailure = () => ({
  type: "update_FAILURE",
});
export const createuserstart = () => ({
  type: "create_START",
});

export const createusersuccess = (user) => ({
  type: "create_SUCCESS",
  payload: user,
});
export const createuserfailure = () => ({
  type: "create_FAILURE",
});
