import React from 'react';
import Spinner from './Spinner';

const Card = ({ loadingData, showData, weather, forecast }) => {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = `${day}  /  ${month}  /  ${year} `;

  let url = '';
  let iconUrl = '';

  if (loadingData) {
    return <Spinner />;
  }

  if (showData) {
    url = 'https://openweathermap.org/img/w/';
    iconUrl = `${url}${weather.weather[0].icon}.png`;
  }
  return (
    <div className='mt-5'>
      {showData ? (
        <div className='container'>
          <div className='card mb-3 mx-auto bg-dark text-light'>
            <div className='row g-0'>
              <div className='col-md-4'>
                <p className='card-title large-font-size'>{weather.name}</p>
                <p className='card-date'>{date}</p>
                <p className='card-temp extra-large-font-size'>
                  {(weather.main.temp - 273.15).toFixed(0)}ºC
                </p>
                <p className='card-desc'>
                  <img src={iconUrl} alt='icon' />
                  {weather.weather[0].description}
                </p>

                <img
                  src='https://images.pexels.com/photos/10817264/pexels-photo-10817264.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=126'
                  className='img-fluid rounded-start'
                  alt=''
                />
              </div>
              <div className='col-md-8'>
                <div className='card-body text-start mt-2'>
                  <p className='card-text small-font-size'>
                    Maximum temperature{' '}
                    {(weather.main.temp_max - 273.15).toFixed(0)}ºC
                  </p>
                  <p className='card-text small-font-size'>
                    Minimum temperature{' '}
                    {(weather.main.temp_min - 273.15).toFixed(0)}ºC
                  </p>
                  <p className='card-text small-font-size'>
                    Humidity {weather.main.humidity}%
                  </p>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className='text-light large-font-size'>No data</p>
      )}
    </div>
  );
};
export default Card;
