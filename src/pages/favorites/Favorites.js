import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import FavoriteCard from '../../components/favorite-card/FavoriteCard';
import Title from '../../components/title';
import { redirectToMain } from '../../stores/actions';
import { getLocalStorage } from '../../utils/general';

const Favorites = () => {
  const [favoriteCities, setFavoriteCities] = useState([]);
  const { convertTempUnits, redirect } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    setFavoriteCities(getLocalStorage());
  }, [favoriteCities.length]);

  if (redirect) {
    dispatch(redirectToMain(false));
    return <Redirect to='/' />;
  }

  return (
    <div className='favorites center-items fade-in'>
      <div className='favorites-wrapper'>
        {favoriteCities.length ? (
          favoriteCities.map((city, index) => (
            <Link to={`/${city.id}`}>
              <FavoriteCard
                convertTempUnits={convertTempUnits}
                title={city.cityName}
                locationKey={city.locationKey}
                index={index}
                key={city.id}
              />
            </Link>
          ))
        ) : (
          <Title className='no-favorites-title' text={`You didn't save any city yet... :(`} />
        )}
      </div>
    </div>
  );
};

export default Favorites;
