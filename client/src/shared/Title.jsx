import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ title }) => {
  return (
    <h1 className="text-xl uppercase font-medium flex items-center">{title}</h1>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
