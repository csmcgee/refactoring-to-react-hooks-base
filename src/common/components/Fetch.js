import React from 'react';
import PropTypes from 'prop-types';
import useFetch from '../hooks/useFetch';
import Loading from './Loading';

const Fetch = ({ children, fetchUrl }) => {
  const {data, isLoading, error } = useFetch(fetchUrl);

  if (error) {
    return <p>{error.message}</p>
  }

  if (isLoading) {
    return <Loading/>
  }

  return <div>{children(data)}</div>;

};

Fetch.propTypes = {
  children: PropTypes.node.isRequired,
  fetchUrl: PropTypes.string.isRequired,
};

export default Fetch;
