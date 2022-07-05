import React from 'react';
import PropTypes from 'prop-types';
import useFetch from '../hooks/useFetch';
import Loading from './Loading';

// todo: consider using internal function for building UI, loading, error, then component
const Fetch = ({component, fetchUrl, }) => {
  const {data, isLoading, error } = useFetch(fetchUrl);

  if (error) {
    return <p>{error.message}</p>
  }

  if (isLoading) {
    return <Loading/>
  }

  return component(data);

};

Fetch.propTypes = {
  component: PropTypes.func.isRequired,
  fetchUrl: PropTypes.string.isRequired,
};

export default Fetch;
