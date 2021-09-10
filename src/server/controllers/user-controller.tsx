export const UserController = {
  registration: async (request: any, response: any, next: any) => {
    try {
      response.json(['123', 'this is sparta']);
    } catch (e) {
      console.error(e);
    }
  },
  login: async (request: any, response: any, next: any) => {
    try {
    } catch (e) {
      console.error(e);
    }
  },
  logout: async (request: any, response: any, next: any) => {
    try {
    } catch (e) {
      console.error(e);
    }
  },
  activate: async (request: any, response: any, next: any) => {
    try {
    } catch (e) {
      console.error(e);
    }
  },
  refresh: async (request: any, response: any, next: any) => {
    try {
    } catch (e) {
      console.error(e);
    }
  }
};
