import React from 'react';
import PropTypes from 'prop-types';
import './general.css';

function SearchBar({ title, setTitle }) {
  const hendleInput = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={title}
        onChange={hendleInput}
      />
    </div>
  );
}

SearchBar.propTypes = {
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
};

export default SearchBar;
