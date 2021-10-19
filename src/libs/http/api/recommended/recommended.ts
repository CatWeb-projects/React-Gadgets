import axios, { Canceler } from 'axios';
import { baseUrl } from '../baseUrl';
import { DevicesCardProps } from './recommended.type';

const { CancelToken } = axios;

export const recommended = {
  devices: {
    action: (): Promise<{ data: DevicesCardProps[] }> =>
      axios.get(`${baseUrl}/devices-cards`, {
        cancelToken: new CancelToken(
          (c: Canceler) => (recommended.devices.cancel = c)
        )
      }),
    cancel: (() => null) as Canceler
  }
};
