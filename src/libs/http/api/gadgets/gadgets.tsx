import axios, { Canceler } from 'axios';

const { CancelToken } = axios;

const baseUrl = 'http://localhost:3005';

export const gadgets = {
  action: (): Promise<{ data: any }> =>
    axios.get(`${baseUrl}/catalog`, {
      cancelToken: new CancelToken((c: Canceler) => (gadgets.cancel = c))
    }),
  cancel: (() => null) as Canceler
};
