import React, {useReducer, useEffect} from 'react';
import PropTypes from 'prop-types';
import reducer from './reducer';

const initialState = {
  data: null,
  isLoading: true,
  error: false
};

const Fetch = ({component, fetchUrl, }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { data, isLoading, error } = state;

  useEffect(() => {
    async function fetchData() {
      dispatch({type: "FETCH_REQUEST"});

      try {
        const response = await fetch(fetchUrl);
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
  }, [fetchUrl]);

  if (error) {
    return <p>{error.message}</p>
  }

  if (isLoading) {
    return <p>Loading...</p>
  }

  return component(data);

};

Fetch.propTypes = {
  component: PropTypes.func.isRequired,
  fetchUrl: PropTypes.string.isRequired,
};

export default Fetch;
