const express = require('express');
const catalog = require('./catalog');

const server = express();
const port = 6006;

server.get('/catalog', (request, response) => {
  response.json(catalog);
});

server.get('/catalog/:id', (request, response) => {
  const { id } = request.params;
  const product = catalog.filter((item) => item.id === +id);
  console.log(catalog);
  response.json(product);
});

server.listen(port, () => {
  console.log('Server is running');
});
