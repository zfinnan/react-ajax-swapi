import React, { useState } from 'react';
import axios from 'axios';

// import WeatherResult from '../WeatherResult'

function StarWars() {
  // TODO: Have error state that sets conditional rendering of an error component
  // TODO: Verify zip is actually a zip
  const [zip, setZip] = useState('')
  const [weather, setWeather] = useState(null)

  const handleSubmit = e => {
    e.preventDefault()
    // We will call the api using axios
    let url = `https://swapi.dev/api/starships/${num}`
    axios.get(url)
    .then(result => {
      // Set sum state
      // TODO: Create custom object of deets I want
      setWeather(result.data)
    }).catch(err => console.log(err))
  }

  // Conditionally render a weather result component
  return (
    <div>
      <h1>Find Weather in your area in the United States</h1>
      {weather ? <WeatherResult weather={weather} /> : null}
      <p>Enter your zipcode to find current weather in your area!</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="zip">Zipcode: </label>
        <input type="text" name='zip' id="zip" onChange={e => setZip(e.target.value)} />
        <input type="submit" value="Find Weather" />
      </form>
    </div>
  )
}

export default Weather;