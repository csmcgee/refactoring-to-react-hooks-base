export default function reducer(state, action) {
  switch(action.type) {
    case "FETCH_REQUEST":
      return {
        ...state,
        isLoading: true,
        error: false,
        data: null,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        error: false,
        data: action.payload,
      };
    case "FETCH_ERROR":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
