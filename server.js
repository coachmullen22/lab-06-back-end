'use strict';

// Application Dependencies
const express = require('express');
const cors = require('cors');

// Load env vars:
require('dotenv').config();

//takes from a .env file and then the terminal environment
const PORT = process.env.PORT || 3000;

// app
const app = express();
app.use(cors());

// Get Location Data
app.get('/location', (request, response) => {
  const locationData = searchToLatLong(request.query.data || 'Lynnwood, WA');
  response.send(locationData);
});

function searchToLatLong(query) {
  const geoData = require('./data/geo.json');
  const location = new Location(geoData.results[0]);
  return location;
}

// Get Weather Data
app.get('/weather', (request, response) => {
  const weatherData = searchWeather(request.query.data || /*.........*/);
  response.send(weatherData);
})

function searchWeather(query) {
  const darkSkyData = require('./data/darksky.json');
  const weather = new Weather(darksky.)
}

// Data the front end needs
function Location(location){
  this.formatted_query = location.formatted_address;
  this.latitude = location.geometry.location.lat;
  this.longitude = location.geometry.location.lng;
}
//Give Error Messages if incorrect

// app.get('/*', function(req, res) {
//   res.status(404).send ('you are in the wrong place');
// });

app.listen(PORT, () => {
  console.log(`app is up on port: ${PORT}`);
});