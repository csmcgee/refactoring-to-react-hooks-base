import React from 'react';
import PropTypes from 'prop-types';
import useFetch from '../hooks/useFetch';
import Loading from './Loading';

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
