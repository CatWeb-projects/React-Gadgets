import axios, { Canceler } from 'axios';
import { baseUrl } from '../baseUrl';
import { SliderProps } from './slider.types';

const { CancelToken } = axios;

export const slider = {
  action: (): Promise<{ data: SliderProps[] }> =>
    axios.get(`${baseUrl}/slider`, {
      cancelToken: new CancelToken((c: Canceler) => (slider.cancel = c))
    }),
  cancel: (() => null) as Canceler
};
