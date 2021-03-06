import React from 'react';
import Title from '../title';
import Grow from '@material-ui/core/Grow';
import weatherIcons from '../../config/weatherIcons';
import moment from 'moment';
import { converter } from '../../utils/general';

const DailyForecast = ({ forecast, index, convertTempUnits }) => {
  const date = moment(forecast.Date).format('dddd DD');

  return (
    <Grow in={true} timeout={index * 1000}>
      <div key={`${date}-${index}`} className='daily-forecast-card center-items '>
        <div className='daily-forecast-wrapper'>
          <div className='date bold-text'>{date}</div>
          <div className='daily-status'>
            <div className='daily-status-text'>{forecast.Day.IconPhrase}</div>
            <img src={weatherIcons[forecast.Day.Icon]} alt={forecast.Day.IconPhrase} />
          </div>
          <div className='day-temp'>
            <div className='max-temp'>
              <Title
                className='bold-text'
                text={
                  convertTempUnits ? converter(forecast.Temperature.Maximum.Value) : forecast.Temperature.Maximum.Value
                }
              />
              <span>&#176;</span>
            </div>

            <div className='min-temp'>
              <Title
                text={
                  convertTempUnits ? converter(forecast.Temperature.Minimum.Value) : forecast.Temperature.Minimum.Value
                }
              />
              <span>&#176;</span>
            </div>
          </div>
        </div>
      </div>
    </Grow>
  );
};

export default DailyForecast;
