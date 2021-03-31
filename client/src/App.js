import 'normalize.css';

import React, {useEffect, useState} from 'react';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from './components/AppRouter';
import {useDispatch} from 'react-redux';
import NavBar from './components/NavBar';
import {check} from './http/userAPI';
import {setAuth, setUser} from './redux/actions/userActions';
import {CircularProgress, Grid} from '@material-ui/core';

const App = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    check()
        .then((data) => {
          dispatch(setUser(true));
          dispatch(setAuth(true));
        })
        .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <Grid container alignItems="center" justify="center">
        <CircularProgress size={100} color="secondary"/>
      </Grid>
    );
  }

  return (
    <BrowserRouter>
      <NavBar/>
      <AppRouter/>
    </BrowserRouter>
  );
};

export default App;
