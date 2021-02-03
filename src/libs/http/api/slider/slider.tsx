import axios, { Canceler } from 'axios';

const { CancelToken } = axios;

const baseUrl = 'http://localhost:3005';

export const slider = {
  action: (): Promise<{ data: string[] }> =>
    axios.get(`${baseUrl}/slider`, {
      cancelToken: new CancelToken((c: Canceler) => (slider.cancel = c))
    }),
  cancel: (() => null) as Canceler
};
