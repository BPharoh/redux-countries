import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Container } from 'react-bootstrap';

const CountriesSingle = () => {
  const [weather, setWeather] = useState('');
  const [error, setError] = useState('');

  const countryTest =  {
    capital: "Helsinki"
  }

  useEffect(()  => {
    axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${countryTest.capital}&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_KEY}`
      ).catch((error) => {
      console.log(error);
      setError(true)
    })
    .then((res) => {
      setWeather(res.data);
    })
  },[countryTest.capital]  )

  console.log('weather', weather);

  return (
    <Container>
      <div>Single Country will be here</div>
    </Container>
  );
};

export default CountriesSingle;
