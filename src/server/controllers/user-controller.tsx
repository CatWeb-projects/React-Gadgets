import { UserService } from '../service/user-service';

export const UserController = {
  registration: async (request: any, response: any, next: any) => {
    try {
      const { email, password } = request.body;
      const userData = await UserService.registration(email, password);
      response.cookie('refreshToken', userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true
      });
      return response.json(userData);
    } catch (e) {
      console.log(e);
    }
  },
  login: async (request: any, response: any, next: any) => {
    try {
    } catch (e) {
      console.log(e);
    }
  },
  logout: async (request: any, response: any, next: any) => {
    try {
    } catch (e) {
      console.log(e);
    }
  },
  activate: async (request: any, response: any, next: any) => {
    try {
    } catch (e) {
      console.log(e);
    }
  },
  refresh: async (request: any, response: any, next: any) => {
    try {
      response.json(['123', 'this is sparta']);
    } catch (e) {
      console.log(e);
    }
  }
};
