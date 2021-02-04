import axios, { Canceler } from 'axios';
import { TagsProps } from './tags.types';

const { CancelToken } = axios;

const baseUrl = 'http://localhost:3005';

export const tags = {
  action: (): Promise<{ data: TagsProps[] }> =>
    axios.get(`${baseUrl}/tags`, {
      cancelToken: new CancelToken((c: Canceler) => (tags.cancel = c))
    }),
  cancel: (() => null) as Canceler
};
