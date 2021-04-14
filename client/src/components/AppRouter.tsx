import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {authRoutes, publicRoutes} from '../routes';
import {Routes} from '../routes';
import {useAppSelector} from '../types/hooks';

const AppRouter = () => {
  const {isAuth} = useAppSelector(({user}) => user);

  return (
    <Switch>
      {isAuth && authRoutes.map(({path, Component}) =>
        <Route key={path} path={path} component={Component} exact />,
      )}
      {publicRoutes.map(({path, Component}) =>
        <Route key={path} path={path} component={Component} exact />,
      )}
      <Redirect to={Routes.SHOP_ROUTE} />
    </Switch>
  );
};

export default AppRouter;
