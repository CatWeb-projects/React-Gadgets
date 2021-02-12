import axios, { Canceler } from 'axios';

const { CancelToken } = axios;

const baseUrl = 'http://localhost:3005';

export const categoriesTypes = {
  action: (): Promise<{ data: any }> =>
    axios.get(`${baseUrl}/categories-types`, {
      cancelToken: new CancelToken(
        (c: Canceler) => (categoriesTypes.cancel = c)
      )
    }),
  cancel: (() => null) as Canceler
};
