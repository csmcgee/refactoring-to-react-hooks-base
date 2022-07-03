import { useReducer, useEffect } from "react";

const initialState = {
  data: null,
  isLoading: true,
  error: false
};

export function reducer(state, action) {
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


export default function useFetch(url) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function fetchData() {
      dispatch({type: "FETCH_REQUEST"});

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw Error(response.statusText);
        }
        const data = await response.json();
        dispatch({
          type: "FETCH_SUCCESS",
          payload: data,
        })
      } catch(e) {
        dispatch({
          type: "FETCH_ERROR",
          payload: e,
        });
      }
    }

    fetchData();
  }, [url]);

  return state;
}
