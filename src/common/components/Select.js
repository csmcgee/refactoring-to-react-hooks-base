import React from "react";
import PropTypes from "prop-types";

const Select = ({ id, label, options, onChange, defaultValue }) => {
  return <>
    <label htmlFor={id}>{label}</label>
    <select id={id} defaultValue={defaultValue} onChange={onChange}>
      <option value="">--</option>
      { options.map(({name, value}) => {
        const computedValue = value ?? name;
        return <option key={computedValue} value={computedValue}>{name}</option>
      })}
    </select>
  </>;
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.any,
    defaultValue: PropTypes.any,
  })),
  onChange: PropTypes.func,
};

export default Select;
