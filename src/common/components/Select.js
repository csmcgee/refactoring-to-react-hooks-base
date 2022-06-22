import React from "react";
import PropTypes from "prop-types";

const Select = ({ options, onChange, defaultValue }) => {
  return <select defaultValue={defaultValue} onChange={onChange}>
    { options.map(({name, value}, index) => {
      return <option key={index} value={value ?? name}>{name}</option>
    })}
  </select>;
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.any,
    defaultValue: PropTypes.any,
  })),
  onChange: PropTypes.func,
};

export default Select;
