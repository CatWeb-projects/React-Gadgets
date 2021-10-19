import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import { body } from 'express-validator';
import { devices } from './catalog';
import { sliderImages } from './sliderImages';
import { tags } from './tags';
import { categoriesTypes } from './categoriesTypes';
import { promotions } from './promotions';
import { devicesCards } from './recommended';
import { collection } from './collection';
import { UserController } from './controllers/user-controller';

const uri =
  'mongodb+srv://user:user@users.jrmay.mongodb.net/React-Gadgets?retryWrites=true&w=majority';
const server = express();
server.use(cookieParser());
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(
  cors({
    credentials: true,
    origin: true
  })
);
export const router = express.Router();
const port = 3005;

const start = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  } catch (e) {
    console.log(e);
  }
};
start();

server.listen(port, () => console.log(`Server is running on port ${port}`));
server.use('/api', router);

server.get('/devices', (request, response) => {
  response.json(devices);
});

server.get('/devices/item/:link', (request, response) => {
  const { link } = request.params;
  const product = devices.filter((device) => device.link === link);
  response.json(product[0]);
});

server.get('/devices/:name', (request, response) => {
  const { name } = request.params;
  const product = devices.filter((device) =>
    device.name.toLowerCase().match(name)
  );
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

server.get('/devices-cards', (request, response) => {
  response.json(devicesCards);
});

server.get('/collection', (request, response) => {
  response.json(collection);
});

router.post(
  '/registration',
  body('email').isEmail(),
  // body('password').isLength({ min: 5, max: 32 }),
  UserController.registration
);
router.post('/login', UserController.login);
router.post('/logout', UserController.logout);
router.get('/activate/:link', UserController.logout);
router.post('/refresh', UserController.refresh);
