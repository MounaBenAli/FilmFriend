import React from 'react'
import PropTypes from 'prop-types';
import './general.css';

function SelectInput({ label, options, className, value, setValue }) {
    const hendleSelect  = (e) => {
      setValue(e.target.value)
    }
    
    return (
        <div className="select">
          <label>{label}</label>
          <div className="select-wrapper">
            <select className={className} value={value} onChange={hendleSelect}>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.text}
                </option>
              ))}
            </select>
          </div>
        </div>
      );
    }
  
  SelectInput.propTypes = {
      label: PropTypes.string.isRequired,
      options: PropTypes.array.isRequired,
      className: PropTypes.string,
      value: PropTypes.any.isRequired,
      setValue: PropTypes.func.isRequired,
  };
  
 
  
  export default SelectInput;