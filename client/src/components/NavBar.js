import React from 'react';
import {AppBar, Button, Container, Grid, IconButton, Toolbar} from "@material-ui/core";
import {PhoneIphone, ShoppingCart} from "@material-ui/icons";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {ADMIN_ROUTE, SHOP_ROUTE} from "../utils/consts";

const NavBar = () => {
  const {isAuth} = useSelector(({user}) => user)

  return (
    <Container maxWidth={false} style={{margin: 0, padding: 0}}>
      <AppBar position="static">
        <Toolbar>
          <Link to={SHOP_ROUTE} style={{color: '#fff'}}>
            <PhoneIphone/>
          </Link>
          <Grid container justify="flex-end">
            {isAuth ?
              <Grid item>
                <Link to={ADMIN_ROUTE} style={{color: '#fff', textDecoration: 'none'}}>
                  <Button color="inherit">Admin</Button>
                </Link>
                <IconButton color="inherit" aria-label="shopping-cart">
                  <ShoppingCart/>
                </IconButton>
                <Button color="inherit">Exit</Button>
              </Grid>
              :
              <Grid item>
                <Button color="inherit">
                  <Link style={{color: '#fff', textDecoration: "none"}} to='/login'>Sign In</Link>
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
