import express from 'express';
import { UserController } from 'server/controllers/user-controller';
export const router = express.Router();

router.post('/registration', UserController.registration);
router.post('/login', UserController.login);
router.post('/logout', UserController.logout);
router.post('/activate/:link', UserController.logout);
router.post('/refresh', UserController.refresh);
