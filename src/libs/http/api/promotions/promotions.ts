import axios, { Canceler } from 'axios';
import { baseUrl } from '../baseUrl';
import { PromotionsProps } from './promotions.types';

const { CancelToken } = axios;

export const promotions = {
  action: (): Promise<{ data: PromotionsProps[] }> =>
    axios.get(`${baseUrl}/promotions`, {
      cancelToken: new CancelToken((c: Canceler) => (promotions.cancel = c))
    }),
  cancel: (() => null) as Canceler
};
