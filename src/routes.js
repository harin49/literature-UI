/* eslint-disable import/no-cycle */

import HomeScreen from './HomeScreen';

import CreateBox from './components/CreateBox';
import HomeBox from './components/HomeBox';

export const mainRoutes = [
  {
    path: '/',
    component: HomeScreen,
  },
];

export const boxRoutes = [
  {
    path: '/',
    component: HomeBox,
  },
  {
    path: '/create',
    component: CreateBox,
  },
];
