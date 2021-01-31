const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('../schema/schema');
// const catalog = require('./catalog');

const server = express();
const port = 3005;

server.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

// server.get('/catalog', (request, response) => {
//   response.json(catalog);
// });

// server.get('/catalog/:id', (request, response) => {
//   const { id } = request.params;
//   const product = catalog.filter((item) => item.id === +id);
//   console.log(catalog);
//   response.json(product);
// });

server.listen(port, (error) => {
  error ? console.log(error) : console.log('Server is running');
});
