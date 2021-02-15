import axios, { Canceler } from 'axios';
import { baseUrl } from '../baseUrl';
import { CategoriesTypesProps } from './categoriesTypes.types';

const { CancelToken } = axios;

export const categoriesTypes = {
  action: (): Promise<{ data: CategoriesTypesProps[] }> =>
    axios.get(`${baseUrl}/categories-types`, {
      cancelToken: new CancelToken(
        (c: Canceler) => (categoriesTypes.cancel = c)
      )
    }),
  cancel: (() => null) as Canceler
};
