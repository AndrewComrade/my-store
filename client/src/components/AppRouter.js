import React from 'react';
import {Switch, Route, Link, Redirect} from 'react-router-dom';
import {authRoutes, publicRoutes} from "../routes";
import {SHOP_ROUTE} from "../utils/consts";
import {useDispatch, useSelector} from "react-redux";
import {setAuth} from "../redux/actions/userActions";

const AppRouter = () => {
  const isAuth = useSelector(({user}) => user.isAuth)
  // const dispatch = useDispatch()

  return (
    <Switch>
      {isAuth && authRoutes.map(({path, Component}) =>
        <Route key={path} path={path} component={Component} exact />
      )}
      {publicRoutes.map(({path, Component}) =>
        <Route key={path} path={path} component={Component} exact />
      )}
      <Redirect to={SHOP_ROUTE} />
    </Switch>
  );
};

export default AppRouter;
