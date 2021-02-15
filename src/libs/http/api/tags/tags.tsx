import axios, { Canceler } from 'axios';
import { baseUrl } from '../baseUrl';
import { TagsProps } from './tags.types';

const { CancelToken } = axios;

export const tags = {
  action: (): Promise<{ data: TagsProps[] }> =>
    axios.get(`${baseUrl}/tags`, {
      cancelToken: new CancelToken((c: Canceler) => (tags.cancel = c))
    }),
  cancel: (() => null) as Canceler
};
