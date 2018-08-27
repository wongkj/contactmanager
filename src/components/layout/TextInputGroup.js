
//######################
// TextInputGroup.js
//######################

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextInputGroup = ({
    label,
    name,
    value,
    placeholder,
    type,
    onChange,
    error
}) => {
  return (
    <div className="form-group">
    <label htmlFor={name}>{label}</label>
    <input name={name} placeholder={placeholder} type={type} className={classnames("form-control form-control-lg ", {"is-invalid": error})} value={value} onChange={onChange}/>
    {error && <div className="invalid-feedback">{error}</div>}  
</div>
  );
};

TextInputGroup.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string
}
// Creating a default type if no type is provided.
TextInputGroup.defaultProps = {
    type: 'text'
}

export default TextInputGroup;