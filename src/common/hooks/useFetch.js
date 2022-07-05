import { useReducer, useEffect } from "react";

const initialState = {
  data: undefined,
  loading: true,
  error: false
};

// todo: add finish to use in finally clause
export function reducer(state, action) {
  switch(action.type) {
    case "FETCH_REQUEST":
      return {
        ...state,
        loading: true,
        error: false,
        data: undefined,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      };
    case "FETCH_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}


// todo: add handling for empty url (don't do anyting in useEffect)
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

    if (!url) {
      return;
    }

    fetchData();
  }, [url]);

  return state;
}
