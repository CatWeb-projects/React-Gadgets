import axios, { Canceler } from 'axios';
import { baseUrl } from '../baseUrl';
import { Auth } from './auth.types';

const { CancelToken } = axios;

export const auth = {
  registration: {
    action: (params: {}): Promise<{ data: Auth }> =>
      axios.post(`${baseUrl}/api/registration`, params, {
        cancelToken: new CancelToken(
          (c: Canceler) => (auth.registration.cancel = c)
        )
      }),
    cancel: (() => null) as Canceler
  },

  login: {
    action: (params: {}): Promise<{ data: Auth }> =>
      axios.post(`${baseUrl}/api/login`, params, {
        cancelToken: new CancelToken((c: Canceler) => (auth.login.cancel = c))
      }),
    cancel: (() => null) as Canceler
  },

  logout: {
    action: (refreshToken: string): Promise<{ data: Auth }> =>
      axios.post(`${baseUrl}/api/logout`, refreshToken, {
        cancelToken: new CancelToken((c: Canceler) => (auth.logout.cancel = c))
      }),
    cancel: (() => null) as Canceler
  },

  checkAuth: {
    action: (params: { refreshToken: string }): Promise<{ data: Auth }> =>
      axios.post(`${baseUrl}/api/refresh`, params, {
        withCredentials: true,
        cancelToken: new CancelToken(
          (c: Canceler) => (auth.checkAuth.cancel = c)
        )
      }),
    cancel: (() => null) as Canceler
  }
};
