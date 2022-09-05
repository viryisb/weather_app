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

  let iconUrl24Hours = '';
  let iconUrl48Hours = '';
  let iconUrl72Hours = '';

  let forecastDate24Hours = '';
  let forecastDate48Hours = '';
  let forecastDate72Hours = '';

  if (loadingData) {
    return <Spinner />;
  }

  if (showData) {
    url = 'http://openweathermap.org/img/w/';
    iconUrl = url + weather.weather[0].icon + '.png';

    iconUrl24Hours = url + forecast.list[6].weather[0].icon + '.png';
    iconUrl48Hours = url + forecast.list[14].weather[0].icon + '.png';
    iconUrl72Hours = url + forecast.list[22].weather[0].icon + '.png';

    forecastDate24Hours = `${forecast.list[6].dt_txt.substring(8, 10)}
     /
     ${forecast.list[6].dt_txt.substring(5, 7)}
     /
     ${forecast.list[6].dt_txt.substring(0, 4)}`;

    forecastDate48Hours = `${forecast.list[14].dt_txt.substring(8, 10)}
     /
     ${forecast.list[14].dt_txt.substring(5, 7)}
     /
     ${forecast.list[14].dt_txt.substring(0, 4)}`;

    forecastDate72Hours = `${forecast.list[22].dt_txt.substring(8, 10)}
    /
    ${forecast.list[22].dt_txt.substring(5, 7)}
    /
    ${forecast.list[22].dt_txt.substring(0, 4)}`;
  }

  return (
    <div className='mt-5'>
      {showData ? (
        <div className='container'>
          <div className='card mb-3 mx-auto  text-light'>
            <div className='row g-0'>
              <div className='col-md-4'>
                <p className='card-title large-font-size'>{weather.name}</p>
                <p className='card-date'>{date}</p>
                <p className='card-temp large-font-size'>
                  {(weather.main.temp - 273.15).toFixed(1)}ºC
                </p>
                <p className='card-desc'>
                  <img src={iconUrl} alt='' />
                  {weather.weather[0].description}
                </p>
              </div>
              <div className='col-md-8'>
                <div className='card-body text-start mt-2'>
                  <p className='card-text small-font-size'>
                    Maximum temperature:{' '}
                    {(weather.main.temp_max - 273.15).toFixed(1)}ºC
                  </p>
                  <p className='card-text small-font-size'>
                    Minimum temperature:{' '}
                    {(weather.main.temp_min - 273.15).toFixed(1)}ºC
                  </p>

                  <p className='card-text small-font-size'>
                    Humidity: {weather.main.humidity}%
                  </p>
                </div>
                <hr />

                <div className='row mt-4'>
                  <div className='col'>
                    <p>{forecastDate24Hours}</p>
                    <img src={iconUrl24Hours} alt='' />
                    <p className='description'>
                      {forecast.list[6].weather[0].description}
                    </p>
                    <p className='temp'>
                      {(forecast.list[6].main.temp - 273.15).toFixed(1)}ºC
                    </p>
                  </div>
                  <div className='col'>
                    <p>{forecastDate48Hours}</p>
                    <img src={iconUrl48Hours} alt='' />
                    <p className='description'>
                      {forecast.list[14].weather[0].description}
                    </p>
                    <p className='temp'>
                      {(forecast.list[14].main.temp - 273.15).toFixed(1)}ºC
                    </p>
                  </div>
                  <div className='col'>
                    <p>{forecastDate72Hours}</p>
                    <img src={iconUrl72Hours} alt='' />
                    <p className='description'>
                      {forecast.list[22].weather[0].description}
                    </p>
                    <p className='temp'>
                      {(forecast.list[22].main.temp - 273.15).toFixed(1)}ºC
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className='text-light medium-font-size enter-city-messagge'>
          Please enter a city to search.
        </p>
      )}
    </div>
  );
};

export default Card;
