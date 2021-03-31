import React, {useState} from 'react';
import {Typography, TextField, Grid, Button, Container} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {useHistory, useLocation} from 'react-router';
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from '../utils/consts';
import {Link} from 'react-router-dom';
import {login, registration} from '../http/userAPI';
import {useDispatch} from 'react-redux';
import {setAuth, setUser} from '../redux/actions/userActions';

const Auth = () => {
  const useStyles = makeStyles((theme) => ({
    form: {
      padding: 25,
      marginTop: 50,
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: 500,
      borderRadius: 20,
      backgroundColor: '#7ebffc',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
    },
    text: {
      textAlign: 'center',
      textTransform: 'uppercase',
    },
    input: {
      marginTop: 20,
    },
  }));

  const classes = useStyles();

  const location = useLocation();
  const history = useHistory();
  const isLogin = location.pathname === LOGIN_ROUTE;

  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLoginClick = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
      }
      dispatch(setUser(data));
      dispatch(setAuth(true));
      history.push(SHOP_ROUTE);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword((e.target.value));
  };

  return (
    <Container>
      <form className={classes.form} noValidate autoComplete="off">
        <Typography
          className={classes.text}
        >
          {isLogin ? 'Авторизация' : 'Регистрация'}
        </Typography>
        <TextField
          className={classes.input}
          id="email"
          label="Your Email"
          variant="filled"
          value={email}
          onChange={onEmailChange}
        />
        <TextField
          className={classes.input}
          type="password"
          id="password"
          label="Your Password"
          variant="filled"
          value={password}
          onChange={onPasswordChange}
        />
        <Grid
          container
          alignItems="center"
          justify="space-between"
          style={{marginTop: 20}}
        >
          <Grid item>
            {isLogin ?
              <Typography>Нет аккаунта? <Link to={REGISTRATION_ROUTE}>Зарегистрируйся!</Link></Typography> :
              <Typography>Есть аккаунт? <Link to={LOGIN_ROUTE}>Войти</Link></Typography>
            }
          </Grid>
          <Grid item>
            <Button
              color="inherit"
              variant="outlined"
              onClick={onLoginClick}>{isLogin ? 'Войти' : 'Регистрация'}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Auth;
