import React, {FC} from 'react';
import {
  AppBar,
  Button,
  Container,
  Grid,
  IconButton,
  Toolbar,
} from '@material-ui/core';
import {PhoneIphone, ShoppingCart} from '@material-ui/icons';
import {Link} from 'react-router-dom';
import {Routes} from '../routes';
import {setAuth} from '../redux/actions/userActions';
import {useAppDispatch, useAppSelector} from '../types/hooks';

const NavBar: React.FC = () => {
  const {isAuth} = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const onExitClick = () => {
    dispatch(setAuth(false));
  };

  return (
    <Container maxWidth={false} style={{margin: 0, padding: 0}}>
      <AppBar position="static">
        <Toolbar>
          <Link to={Routes.SHOP_ROUTE} style={{color: '#fff'}}>
            <PhoneIphone/>
          </Link>
          <Grid container justify="flex-end">
            {isAuth ?
              <Grid item>
                <Link
                  to={Routes.ADMIN_ROUTE}
                  style={{color: '#fff', textDecoration: 'none'}}
                >
                  <Button color="inherit">Admin</Button>
                </Link>
                <IconButton color="inherit" aria-label="shopping-cart">
                  <ShoppingCart/>
                </IconButton>
                <Button color="inherit" onClick={onExitClick}>Exit</Button>
              </Grid> :
              <Grid item>
                <Button color="inherit">
                  <Link
                    style={{color: '#fff', textDecoration: 'none'}}
                    to='/login'
                  >
                    Sign In
                  </Link>
                </Button>
              </Grid>
            }
          </Grid>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default NavBar;
