export const Moviereducer = (state, action) => {
  switch (action.type) {
    case "MOVIES_START":
      return {
        Movies: [],
        isfetching: true,
        error: false,
      };
    case "MOVIES_SUCCESS":
      return {
        Movies: action.payload,
        isfetching: false,
        error: false,
      };
    case "MOVIES_FAILURE":
      return {
        Movies: [],
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
        Movies: state.Movies.filter((movie) => movie._id !== action.payload),
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
        Movies: action.payload,
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
        Movies: action.payload,
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
