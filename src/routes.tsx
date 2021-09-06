import { MainLayout } from 'features/all/pages/MainLayout/MainLayout';
import { Apple } from 'features/apple/pages/Apple/Apple';
import { DeviceInfo } from 'features/device_info/pages/DeviceInfo/DeviceInfo';
import { Gadgets } from 'features/gadgets/pages/Gadgets/Gadgets';
import { Laptops } from 'features/laptops/pages/Laptops/Laptops';
import { Phones } from 'features/phones/pages/Phones/Phones';
import { Protection } from 'features/protection/pages/Protection/Protection';
import { SearchPage } from 'features/search_page/pages/SearchPage/SearchPage';
import { Tradein } from 'features/tradein/pages/Tradein/Tradein';

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

    {name: 'Phones', path: '/phones', exact: true, component: Phones},

    {name: 'Laptops', path: '/laptops', component: Laptops},
    
    {name: 'Gadgets', path: '/gadgets', component: Gadgets},

    {name: 'Apple', path: '/apple', component: Apple},

    {name: 'DeviceInfo', path: '/device/:link', component: DeviceInfo},

    {name: 'SearchPage', path: '/search/:link', component: SearchPage},
  ];
