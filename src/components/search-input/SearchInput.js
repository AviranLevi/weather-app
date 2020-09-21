import React, { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useDispatch } from 'react-redux';
import { getTodayWeather } from '../../stores/actions/weather';
import { searchCity } from '../../stores/actions';
import { featureIcons } from '../../constant/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  list: {
    position: 'absolute',
    width: '300px',
    color: '#232526',
    fontSize: '25px',
    fontWeight: 'bold',
    background: 'white',
    margin: '10px 0',
    zIndex: '10',
    borderRadius: '25px',
  },
}));

const SearchInput = ({ className = '', style = {}, searchResults = [] }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [value, setValue] = useState('');
  const renderResults = (
    <List className={classes.list}>
      {searchResults.map((city) => (
        <ListItem button onClick={() => dispatch(getTodayWeather(city.Key, city.LocalizedName))}>
          <ListItemText primary={city.LocalizedName} />
        </ListItem>
      ))}
    </List>
  );

  const handleOnChange = (e) => {
    let value = e.target.value;
    setValue(value);
    dispatch(searchCity(value));
  };

  return (
    <div className={`search ${className}`} style={style}>
      <div className='search-input'>
        <input value={value} onChange={handleOnChange} placeholder='Search a city...' />
        {featureIcons.search}
      </div>
      {searchResults.length && value ? renderResults : null}
    </div>
  );
};

export default SearchInput;
