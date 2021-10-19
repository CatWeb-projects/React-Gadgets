import axios, { Canceler } from 'axios';
import { baseUrl } from '../baseUrl';
import { DevicesProps } from './catalog.types';

const { CancelToken } = axios;

export const catalog = {
  devices: {
    action: (): Promise<{ data: DevicesProps[] }> =>
      axios.get(`${baseUrl}/devices`, {
        cancelToken: new CancelToken(
          (c: Canceler) => (catalog.devices.cancel = c)
        )
      }),
    cancel: (() => null) as Canceler
  },

  device: {
    action: (link: string): Promise<{ data: DevicesProps }> =>
      axios.get(`${baseUrl}/devices/item/${link}`, {
        cancelToken: new CancelToken(
          (c: Canceler) => (catalog.device.cancel = c)
        )
      }),
    cancel: (() => null) as Canceler
  },

  searchDevices: {
    action: (name: string): Promise<{ data: DevicesProps[] }> =>
      axios.get(`${baseUrl}/devices/${name}`, {
        cancelToken: new CancelToken(
          (c: Canceler) => (catalog.searchDevices.cancel = c)
        )
      }),
    cancel: (() => null) as Canceler
  }
};
