const axios = require('axios');
const express = require('express');
const path = require('path');
const app = express();

if (process.env.NODE_ENV !== 'DEVELOPMENT') {
  require('dotenv').config();
}

app.get(`/drinks/:item`, (request, response) => {
  axios
    .get(`https://www.thecocktaildb.com/api/json/v2/${process.env.API_KEY}/filter.php?i=${request.params.item}`)
    .then(cocktailResponse => {
      console.log(request.params.item);
      console.log('cocktail response', cocktailResponse);
      response.json(cocktailResponse.data || []);
    })
    .catch(e => console.error(e));
});

app.get('/random-drink', (request, response) => {
  axios
    .get(`https://www.thecocktaildb.com/api/json/v2/${process.env.API_KEY}/random.php`)
    .then(cocktailResponse => response.json(cocktailResponse.data))
    .catch(e => console.error(e));
});

app.get('/pages/Drink/:id', (request, response) => {
  axios
    .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${request.params.id}`)
    .then(cocktailResponse => response.json(cocktailResponse.data))
    .catch(error => console.log(error));
});

if (process.env.NODE_ENV === 'DEVELOPMENT') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}
if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  app.use(express.static('client/build'));

  // Express serve up index.html file if it doesn't recognize route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`API listening on port ${port}...`);
});
