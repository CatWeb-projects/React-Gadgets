const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const schema = require('./schema');
const catalog = require('./catalog');
const sliderImages = require('./sliderImages');
const tags = require('./tags');
const categoriesTypes = require('./categoriesTypes');

const server = express();
const port = 3005;

server.use(cors());
server.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);

server.get('/catalog', (request, response) => {
  response.json(catalog);
});

server.get('/catalog/:id', (request, response) => {
  const { id } = request.params;
  const product = catalog.gadgets.filter((item) => item.id === +id);
  response.json(product);
});

server.get('/slider', (request, response) => {
  response.json(sliderImages);
});

server.get('/tags', (request, response) => {
  response.json(tags);
});

server.get('/categories-types', (request, response) => {
  response.json(categoriesTypes);
});

server.listen(port, (error) => {
  error ? console.log(error) : console.log(`Server is running on port ${port}`);
});
