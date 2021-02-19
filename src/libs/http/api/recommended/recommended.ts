import axios, { Canceler } from 'axios';
import { baseUrl } from '../baseUrl';
import { DevicesCardProps } from './recommended.type';

const { CancelToken } = axios;

export const recommended = {
  phones: {
    action: (): Promise<{ data: DevicesCardProps }> =>
      axios.get(`${baseUrl}/phones-card`, {
        cancelToken: new CancelToken(
          (c: Canceler) => (recommended.phones.cancel = c)
        )
      }),
    cancel: (() => null) as Canceler
  },

  laptops: {
    action: (): Promise<{ data: DevicesCardProps }> =>
      axios.get(`${baseUrl}/laptops-card`, {
        cancelToken: new CancelToken(
          (c: Canceler) => (recommended.laptops.cancel = c)
        )
      }),
    cancel: (() => null) as Canceler
  },

  gadgets: {
    action: (): Promise<{ data: DevicesCardProps }> =>
      axios.get(`${baseUrl}/gadgets-card`, {
        cancelToken: new CancelToken(
          (c: Canceler) => (recommended.laptops.cancel = c)
        )
      }),
    cancel: (() => null) as Canceler
  }
};
