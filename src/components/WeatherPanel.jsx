import React, { useState } from 'react';
import Form from './Form';
import Card from './Card';

const WeatherPanel = () => {
  const apiKey = 'd8f3254c8acb5ed0dd761401c734945e';
  let urlWeather = `https://api.openweathermap.org/data/2.5/weather?&appid=${apiKey}`;
  let cityUrl = '&q=';

  let urlForecast = `https://api.openweathermap.org/data/2.5/forecast?&appid=${apiKey}`;

  const [weather, setWeather] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [, setLocation] = useState('');

  const getLocation = async (loc) => {
    setLoading(true);
    setLocation(loc);

    urlWeather = urlWeather + cityUrl + loc;

    await fetch(urlWeather)
      .then((response) => {
        if (!response.ok) throw new Error('Status: ' + 404);
        return response.json();
      })
      .then((weatherData) => {
        setWeather(weatherData);
      })
      .catch(() => {
        setLoading(false);
        setShow(false);
      });

    urlForecast = urlForecast + cityUrl + loc;
    await fetch(urlForecast)
      .then((response) => {
        if (!response.ok) throw new Error('Status: ' + 404);
        return response.json();
      })
      .then((forecastData) => {
        setForecast(forecastData);

        setLoading(false);
        setShow(true);
      })
      .catch(() => {
        setLoading(false);
        setShow(false);
      });
  };

  return (
    <>
      <Form newLocation={getLocation} />
      <Card
        showData={show}
        loadingData={loading}
        weather={weather}
        forecast={forecast}
      />
    </>
  );
};

export default WeatherPanel;
