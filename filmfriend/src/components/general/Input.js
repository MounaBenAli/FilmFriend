import React from 'react'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './general.css';


function Input({ label, type, className, value, setValue, icon, inputAttributes }) {
  const hendleInput = (e) => {
    setValue(e.target.value)
  }
  
  return (
    <div className="input">
      <label>{label}</label>
      <div  className="input-wrapper">
        {icon && <FontAwesomeIcon icon={icon} />}
        <input type={type} className={className} value={value} onChange={hendleInput} {...inputAttributes} />
      </div>
    </div>
  )
}

Input.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    className: PropTypes.string,
    value: PropTypes.any.isRequired,
    setValue: PropTypes.func.isRequired,
    icon: PropTypes.object,
    inputAttributes: PropTypes.object,
};

Input.defaultProps = {
    inputAttributes: {},
};

export default Input;
