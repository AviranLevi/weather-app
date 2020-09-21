import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FavoriteCard from '../../components/favorite-card/FavoriteCard';
import Loading from '../../components/loading';
import Title from '../../components/title';
import { getFavorites, toggleLoading } from '../../stores/actions';

const Favorites = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { isLoading, favoriteCities } = state;

  useEffect(() => {
    dispatch(getFavorites());
    if (favoriteCities.length) {
      dispatch(toggleLoading(false));
    }
  }, [dispatch]);

  if (isLoading) return <Loading open={isLoading} />;

  return (
    <div className='favorites center-items fade-in'>
      <div className='favorites-wrapper'>
        {favoriteCities.length ? (
          favoriteCities.map((city, index) => <FavoriteCard title={city.cityName} index={index} />)
        ) : (
          <Title className='no-favorites-title' text={`You didn't save any city yet... :(`} />
        )}
      </div>
    </div>
  );
};

export default Favorites;
