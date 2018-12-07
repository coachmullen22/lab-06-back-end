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
app.get('location', (request, response) =>
  {

})

//Give Error Messages if incorrect

app.get('/*', function(req, res) {
  res.status(404).send ('you are in the wrong place');
})

app.listen(PORT)