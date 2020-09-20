import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { featureIcons } from '../../constant/icons';
import { makeStyles } from '@material-ui/core/styles';
import { getTodayWeather } from '../../stores/actions/weather';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: '250px',
  },
  list: {
    width: '250px',
    color: '#232526',
    fontSize: '25px',
    fontWeight: 'bold',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const Menu = ({ items = [], favorites = [] }) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();

  const toggleMenu = (toggle) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(toggle);
  };

  const favoriteCities = (
    <List>
      {favorites.map((city) => (
        <ListItem
          onClick={() => {
            dispatch(getTodayWeather(city.locationKey, city.cityName));
            setOpen(false);
          }}
          className={classes.nested}
          button
          key={city.locationKey}
        >
          <ListItemText primary={city.cityName} />
        </ListItem>
      ))}
    </List>
  );

  const navigationList = (
    <List className={classes.list}>
      <ListItem key='logo-menu'>
        <ListItemText primary='WeatherApp' inset />
      </ListItem>
      {items.map((item) => (
        <ListItem key={`${item}-btn`}>
          <ListItemText primary={item} />
        </ListItem>
      ))}
      {favorites.length ? favoriteCities : <ListItemText primary={`No favorites yet...`} inset />}
    </List>
  );

  return (
    <div className='menu'>
      <div className='menu-icon' onClick={toggleMenu(true)}>
        {featureIcons.burger}
      </div>
      <Drawer className={classes.drawer} anchor='left' open={open} onClose={toggleMenu(false)}>
        <div className='drawer-list'>{navigationList}</div>{' '}
      </Drawer>
    </div>
  );
};

export default Menu;
