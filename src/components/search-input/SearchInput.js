import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useDispatch } from 'react-redux';
import { getTodayWeather } from '../../stores/actions/weather';
import { searchCity } from '../../stores/actions';
import { featureIcons } from '../../constant/icons';

const SearchInput = ({ className = '', style = {}, searchResults = [] }) => {
  const dispatch = useDispatch();

  const renderResults = (
    <List>
      {searchResults.map((city) => (
        <ListItem onClick={() => dispatch(getTodayWeather(city.Key, city.LocalizedName))}>
          <ListItemText primary={city.LocalizedName} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <div className={`search ${className}`} style={style}>
      <div className='search-input'>
        <input onChange={(e) => searchCity(e.target.value)} placeholder='Search a city...' />
        {featureIcons.search}
      </div>
      {searchResults.length ? renderResults : null}
    </div>
  );
};

export default SearchInput;
