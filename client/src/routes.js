import * as Consts from './utils/consts';
import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import Shop from "./pages/Shop";
import DevicePage from "./pages/DevicePage";
import Basket from "./pages/Basket";

export const authRoutes = [
  {
    path: Consts.ADMIN_ROUTE,
    Component: Admin
  },
  {
    path: Consts.BASKET_ROUTE,
    Component: Basket
  },
];

export const publicRoutes = [
  {
    path: Consts.LOGIN_ROUTE,
    Component: Auth
  },
  {
    path: Consts.REGISTRATION_ROUTE,
    Component: Auth
  },
  {
    path: Consts.SHOP_ROUTE,
    Component: Shop
  },
  {
    path: Consts.DEVICE_ROUTE + '/:id',
    Component: DevicePage
  },
];
