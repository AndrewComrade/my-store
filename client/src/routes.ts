import Admin from './pages/Admin';
import Auth from './pages/Auth';
import Shop from './pages/Shop';
import DevicePage from './pages/DevicePage';
import Basket from './pages/Basket';

export enum Routes {
  ADMIN_ROUTE = '/admin',
  LOGIN_ROUTE = '/login',
  REGISTRATION_ROUTE = '/registration',
  SHOP_ROUTE = '/',
  BASKET_ROUTE = '/basket',
  DEVICE_ROUTE = '/device',
}

export const authRoutes = [
  {
    path: Routes.ADMIN_ROUTE,
    Component: Admin,
  },
  {
    path: Routes.BASKET_ROUTE,
    Component: Basket,
  },
];

export const publicRoutes = [
  {
    path: Routes.LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: Routes.REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: Routes.SHOP_ROUTE,
    Component: Shop,
  },
  {
    path: Routes.DEVICE_ROUTE + '/:id',
    Component: DevicePage,
  },
];
