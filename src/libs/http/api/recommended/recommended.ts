import axios, { Canceler } from 'axios';
import { baseUrl } from '../baseUrl';
import { PhonesProps } from './recommended.type';

const { CancelToken } = axios;

export const recommended = {
  phones: {
    action: (): Promise<{ data: PhonesProps }> =>
      axios.get(`${baseUrl}/phones-card`, {
        cancelToken: new CancelToken(
          (c: Canceler) => (recommended.phones.cancel = c)
        )
      }),
    cancel: (() => null) as Canceler
  }
};
