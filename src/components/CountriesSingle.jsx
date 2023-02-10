import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Container, Row, Col, Image, Spinner, Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

const CountriesSingle = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const country = location.state.country;

  const [weather, setWeather] = useState('');
  const [error, setError] = useState(false);
  const [isloading, setIsLoading] = useState(true);


  useEffect(()  => {
    axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_KEY}`
      ).catch((error) => {
      console.log(error);
      setError(true)
    })
    .then((res) => {
      setWeather(res.data);
      setIsLoading(false);
    })
  },[country.capital]  )

  console.log('weather', weather)

  if(isloading){
    return( 
      <Col className='text-center-m-S'>
      <Spinner
      animation='border'
      role='status'
      className='center'
      variant='info'
      >
      <span className='visually-hidden'>Loading.....</span>
      </Spinner>
      </Col>
    )
  }

  return (
    <Container>
      <Row className="m-s"> 
      <Col>
      {' '}
        <Image thumbnail src={`https://source.unsplash.com/featured/1600x900?${country.flag.svg}`}/>
      </Col>
      <Col>
      <h2 className="display-4">{country.name.common}</h2>
      <h3>{country.capital}</h3>
      {!error && weather && (
        <div>
          <p>
            Right now it is <strong>{parseInt(weather.main.temp)}</strong> degrees in {country.capital} and {weather.weather[0].description}
          </p>
          <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description}/>
        </div>
      )}
      </Col>
      </Row>
      <Row>
        <Col>
        <Button variant='light' onClick={() => navigate('/countries')}>Back to Countries</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default CountriesSingle;
