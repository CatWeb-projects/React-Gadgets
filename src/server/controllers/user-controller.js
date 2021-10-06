import { UserService } from '../service/user-service';
import { validationResult } from 'express-validator';

export const UserController = {
  registration: async (request, response, next) => {
    try {
      const errors = validationResult(request);
      if (!errors.isEmpty()) {
        return Error('Registration is not valid');
      }
      const { email, password } = request.body;
      const userData = await UserService.registration(email, password);
      userData &&
        response.cookie('refreshToken', userData.refreshToken, {
          maxAge: 30 * 24 * 60 * 60 * 1000,
          httpOnly: true
        });
      return response.json(userData);
    } catch (e) {
      console.log(e);
    }
  },
  login: async (request, response, next) => {
    try {
      const { email, password } = request.body;
      const userData = await UserService.login(email, password);
      userData &&
        response.cookie('refreshToken', userData.refreshToken, {
          maxAge: 30 * 24 * 60 * 60 * 1000,
          httpOnly: true
        });
      return response.json(userData);
    } catch (e) {
      console.log(e);
      return response.status(401).send({ error: e.message });
    }
  },
  logout: async (request, response, next) => {
    try {
      const { refreshToken } = request;
      const token = await UserService.logout(refreshToken);
      token && response.clearCookie('refreshToken');
      return response.json(token);
    } catch (e) {
      console.log(e);
    }
  },
  activate: async (request, response, next) => {
    try {
    } catch (e) {
      console.log(e);
    }
  },
  refresh: async (request, response, next) => {
    try {
      let { refreshToken } = request.cookies;
      if (refreshToken) {
        return refreshToken;
      } else {
        ({ refreshToken } = request.body);
      }
      const userData =
        refreshToken && (await UserService.refresh(refreshToken));
      return response.json(userData);
    } catch (e) {
      console.log(e);
    }
  }
};
