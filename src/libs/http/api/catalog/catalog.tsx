import axios, { Canceler } from 'axios';
import { baseUrl } from '../baseUrl';

const { CancelToken } = axios;

export const catalog = {
  phones: {
    action: (): Promise<{ data: any }> =>
      axios.get(`${baseUrl}/phones`, {
        cancelToken: new CancelToken(
          (c: Canceler) => (catalog.phones.cancel = c)
        )
      }),
    cancel: (() => null) as Canceler
  }
};
