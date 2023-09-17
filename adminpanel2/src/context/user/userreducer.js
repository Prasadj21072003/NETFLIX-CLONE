export const Userreducer = (state, action) => {
  switch (action.type) {
    case "user_START":
      return {
        users: [],
        isfetching: true,
        error: false,
      };
    case "user_SUCCESS":
      return {
        users: action.payload,
        isfetching: false,
        error: false,
      };
    case "user_FAILURE":
      return {
        users: [],
        isfetching: false,
        error: true,
      };

    case "delete_START":
      return {
        ...state,
        isfetching: true,
        error: false,
      };
    case "delete_SUCCESS":
      return {
        users: state.users.filter((user) => user._id !== action.payload),
        isfetching: false,
        error: false,
      };
    case "delete_FAILURE":
      return {
        ...state,
        isfetching: false,
        error: true,
      };
    case "update_START":
      return {
        ...state,
        isfetching: true,
        error: false,
      };
    case "update_SUCCESS":
      return {
        users: action.payload,
        isfetching: false,
        error: false,
      };
    case "update_FAILURE":
      return {
        ...state,
        isfetching: false,
        error: true,
      };

    case "create_START":
      return {
        ...state,
        isfetching: true,
        error: false,
      };
    case "create_SUCCESS":
      return {
        users: action.payload,
        isfetching: false,
        error: false,
      };
    case "create_FAILURE":
      return {
        ...state,
        isfetching: false,
        error: true,
      };
  }
};
