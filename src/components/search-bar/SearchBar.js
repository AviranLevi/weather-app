import React from 'react';
import { featureIcons } from '../../constant/icons';

const SearchBar = ({ onChange, value = '', className = '', style = {}, searchResults = [], onClick }) => (
  <div className={`search-bar ${className}`} style={style}>
    <div className='search-input'>
      <input value={value} onChange={onChange} placeholder='Search for a city...' />
      {featureIcons.search}
    </div>

    {/* {searchResults.length ? (
      <ul>
        {searchResults.map((item) => (
          <li onClick={onClick}>{item}</li>
        ))}
      </ul>
    ) : (
      <div className='no-suggestions'>
        <em>Sorry, can't find this place..</em>
      </div>
    )} */}
  </div>
);

export default SearchBar;
