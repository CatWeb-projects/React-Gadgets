import axios, { Canceler } from 'axios';
import { baseUrl } from '../baseUrl';

const { CancelToken } = axios;

export const quicklinks = {
  action: (): Promise<{ data: any }> =>
    axios.get(`${baseUrl}/quicklinks`, {
      cancelToken: new CancelToken((c: Canceler) => (quicklinks.cancel = c))
    }),
  cancel: (() => null) as Canceler
};
