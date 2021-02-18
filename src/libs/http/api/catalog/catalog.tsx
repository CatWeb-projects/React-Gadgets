import axios, { Canceler } from 'axios';
import { baseUrl } from '../baseUrl';
import { GadgetsProps } from './catalog.types';

const { CancelToken } = axios;

export const catalog = {
  phones: {
    action: (): Promise<{ data: GadgetsProps[] }> =>
      axios.get(`${baseUrl}/phones`, {
        cancelToken: new CancelToken(
          (c: Canceler) => (catalog.phones.cancel = c)
        )
      }),
    cancel: (() => null) as Canceler
  },

  laptops: {
    action: (): Promise<{ data: GadgetsProps[] }> =>
      axios.get(`${baseUrl}/laptops`, {
        cancelToken: new CancelToken(
          (c: Canceler) => (catalog.laptops.cancel = c)
        )
      }),
    cancel: (() => null) as Canceler
  },

  gadgets: {
    action: (): Promise<{ data: GadgetsProps[] }> =>
      axios.get(`${baseUrl}/gadgets`, {
        cancelToken: new CancelToken(
          (c: Canceler) => (catalog.laptops.cancel = c)
        )
      }),
    cancel: (() => null) as Canceler
  }
};
