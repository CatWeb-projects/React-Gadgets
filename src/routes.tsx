import {
  DeviceInfo,
  Devices,
  Favorites,
  MainLayout,
  Protection,
  SearchPage,
  Tradein
} from 'features';

export interface Route {
  name: string;
  path: string;
  component: any;
  exact?: boolean;
  label?: string;
  parent?: string;
}

export const routes: Route[] =
  // prettier-ignore
  [
    {name: 'Main', path: '/', exact: true, component: MainLayout},

    {name: 'Protection', path: '/protection', component: Protection},

    {name: 'Tradein', path: '/tradein', component: Tradein},

    {name: 'DeviceInfo', path: '/device/:link', component: DeviceInfo},

    {name: 'SearchPage', path: '/search/:link', component: SearchPage},

    {name: 'Favorites', path: '/favorites', component: Favorites},

    {name: 'Devices', path: '/categories/:link', component: Devices}, 
  ];
