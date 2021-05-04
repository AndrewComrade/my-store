import AdminPage from './pages/AdminPage';
import BasketPage from './pages/BasketPage';
import AuthPage from './pages/AuthPage';
import ShopPage from './pages/ShopPage';
import DevicePage from './pages/DevicePage';

export enum Routes {
    SHOP_ROUTE = '/',
    ADMIN_ROUTE = '/admin',
    LOGIN_ROUTE = '/login',
    REGISTRATION_ROUTE = '/registration',
    BASKET_ROUTE = '/basket',
    DEVICE_ROUTE = '/device',
}

export const authRoutes = [
    {
        path: Routes.ADMIN_ROUTE,
        component: AdminPage,
    },
    {
        path: Routes.BASKET_ROUTE,
        component: BasketPage,
    },
];

export const publicRoutes = [
    {
        path: Routes.LOGIN_ROUTE,
        component: AuthPage,
    },
    {
        path: Routes.REGISTRATION_ROUTE,
        component: AuthPage,
    },
    {
        path: Routes.SHOP_ROUTE,
        component: ShopPage,
    },
    {
        path: Routes.DEVICE_ROUTE + '/:id',
        component: DevicePage,
    },
];
