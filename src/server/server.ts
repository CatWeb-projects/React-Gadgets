import express, { response } from 'express';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import { phones, tablets, laptops } from './catalog';
import { sliderImages } from './sliderImages';
import { tags } from './tags';
import { categoriesTypes } from './categoriesTypes';
import { promotions } from './promotions';
import { phonesCard, laptopsCard } from './recommended';
import { collection } from './collection';
const schema = require('./schema');

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

server.get('/phones', (request, response) => {
  response.json(phones);
});

server.get('/phones/:id', (request, response) => {
  const { id } = request.params;
  const product = phones.filter((item) => item.id === +id);
  response.json(product);
});

server.get('/tablets', (request, response) => {
  response.json(tablets);
});

server.get('/tablets/:id', (request, response) => {
  const { id } = request.params;
  const product = tablets.filter((item) => item.id === +id);
  response.json(product);
});

server.get('/laptops', (request, response) => {
  response.json(laptops);
});

server.get('/laptops/:id', (request, response) => {
  const { id } = request.params;
  const product = laptops.filter((item) => item.id === +id);
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

server.get('/promotions', (request, response) => {
  response.json(promotions);
});

server.get('/phones-card', (request, response) => {
  response.json(phonesCard);
});

server.get('/laptops-card', (request, response) => {
  response.json(laptopsCard);
});

server.get('/collection', (request, response) => {
  response.json(collection);
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
