import axios, { Canceler } from 'axios';
import { baseUrl } from '../baseUrl';
import { DevicesProps } from './catalog.types';

const { CancelToken } = axios;

export const catalog = {
  phones: {
    action: (): Promise<{ data: DevicesProps[] }> =>
      axios.get(`${baseUrl}/phones`, {
        cancelToken: new CancelToken(
          (c: Canceler) => (catalog.phones.cancel = c)
        )
      }),
    cancel: (() => null) as Canceler
  },

  phone: {
    action: (link: string): Promise<{ data: DevicesProps }> =>
      axios.get(`${baseUrl}/phones/${link}`, {
        cancelToken: new CancelToken(
          (c: Canceler) => (catalog.phone.cancel = c)
        )
      }),
    cancel: (() => null) as Canceler
  },

  laptops: {
    action: (): Promise<{ data: DevicesProps[] }> =>
      axios.get(`${baseUrl}/laptops`, {
        cancelToken: new CancelToken(
          (c: Canceler) => (catalog.laptops.cancel = c)
        )
      }),
    cancel: (() => null) as Canceler
  },

  laptop: {
    action: (link: string): Promise<{ data: DevicesProps }> =>
      axios.get(`${baseUrl}/laptops/${link}`, {
        cancelToken: new CancelToken(
          (c: Canceler) => (catalog.laptop.cancel = c)
        )
      }),
    cancel: (() => null) as Canceler
  },

  gadgets: {
    action: (): Promise<{ data: DevicesProps[] }> =>
      axios.get(`${baseUrl}/gadgets`, {
        cancelToken: new CancelToken(
          (c: Canceler) => (catalog.gadgets.cancel = c)
        )
      }),
    cancel: (() => null) as Canceler
  },

  gadget: {
    action: (link: string): Promise<{ data: DevicesProps }> =>
      axios.get(`${baseUrl}/gadgets/${link}`, {
        cancelToken: new CancelToken(
          (c: Canceler) => (catalog.gadget.cancel = c)
        )
      }),
    cancel: (() => null) as Canceler
  },

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
      axios.get(`${baseUrl}/devices/${link}`, {
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
