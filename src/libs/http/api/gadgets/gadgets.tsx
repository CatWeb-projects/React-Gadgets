import axios, { Canceler } from 'axios';
import { baseUrl } from '../baseUrl';

const { CancelToken } = axios;

export const gadgets = {
  action: (): Promise<{ data: any }> =>
    axios.get(`${baseUrl}/catalog`, {
      cancelToken: new CancelToken((c: Canceler) => (gadgets.cancel = c))
    }),
  cancel: (() => null) as Canceler
};
