import axios, { Canceler } from 'axios';
import { baseUrl } from '../baseUrl';
import { CollectionProps } from './collection.type';

const { CancelToken } = axios;

export const collection = {
  action: (): Promise<{ data: CollectionProps[] }> =>
    axios.get(`${baseUrl}/collection`, {
      cancelToken: new CancelToken((c: Canceler) => (collection.cancel = c))
    }),
  cancel: (() => null) as Canceler
};
