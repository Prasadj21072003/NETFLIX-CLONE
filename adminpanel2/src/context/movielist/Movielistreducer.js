export const Movielistreducer = (state, action) => {
  switch (action.type) {
    case "MOVIELIST_START":
      return {
        MovieLIST: [],
        isfetching: true,
        error: false,
      };
    case "MOVIELIST_SUCCESS":
      return {
        MovieLIST: action.payload,
        isfetching: false,
        error: false,
      };
    case "MOVIELIST_FAILURE":
      return {
        MovieLIST: [],
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
        MovieLIST: state.MovieLIST.filter(
          (movielist) => movielist._id !== action.payload
        ),
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
        MovieLIST: action.payload,
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
        MovieLIST: action.payload,
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
