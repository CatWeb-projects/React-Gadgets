import { MainLayout } from 'features/all/pages/MainLayout/MainLayout';
import { Laptops } from 'features/laptops/pages/Laptops/Laptops';
import { Phones } from 'features/phones/pages/Phones/Phones';
import { Protection } from 'features/protection/pages/Protection/Protection';
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

    {name: 'Phones', path: '/phones', component: Phones},

    {name: 'Laptops', path: '/laptops', component: Laptops},
  ];
