import React from 'react';

const FavoriteCard = ({ title = '', className = '', style = {} }) => (
  <div className={`favorite-card ${className}`} style={style}>
    {title}
  </div>
);

export default FavoriteCard;
