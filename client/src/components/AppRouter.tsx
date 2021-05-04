import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { authRoutes, publicRoutes, Routes } from '~/routes';
import { useSelector } from '~/hooks/useTypedSelector';

const AppRouter: React.FC = () => {
    const { isAuth } = useSelector((state) => state.user);
    return (
        <Switch>
            {isAuth &&
                authRoutes.map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        component={route.component}
                        exact
                    />
                ))}
            {publicRoutes.map((route) => (
                <Route
                    key={route.path}
                    path={route.path}
                    component={route.component}
                    exact
                />
            ))}
            <Redirect to={Routes.SHOP_ROUTE} />
        </Switch>
    );
};

export default AppRouter;
