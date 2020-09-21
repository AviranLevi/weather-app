import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FavoriteCard from '../../components/favorite-card/FavoriteCard';
import Title from '../../components/title';
import { getLocalStorage } from '../../utils/general';

const Favorites = () => {
  const [favoriteCities, setFavoriteCities] = useState([]);

  useEffect(() => {
    setFavoriteCities(getLocalStorage());
  }, [favoriteCities.length]);

  return (
    <div className='favorites center-items fade-in'>
      <div className='favorites-wrapper'>
        {favoriteCities.length ? (
          favoriteCities.map((city, index) => (
            <Link to={`/${city.id}`}>
              <FavoriteCard title={city.cityName} locationKey={city.locationKey} index={index} key={city.id} />
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
