import React, { useState } from 'react';
import {
    Button,
    FormControl,
    Grid,
    Input,
    InputLabel,
    Typography,
} from '@material-ui/core';
import { useActions } from '~/hooks/useActions';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import { Routes } from '~/routes';
import { styled } from '@material-ui/core/styles';
import { setUser } from '~/store/actions/userActions';

const AuthWrapper = styled(Grid)({
    margin: '100px auto 0',
    maxWidth: 400,
    display: 'flex',
    flexDirection: 'column',
});

const SubmitBtn = styled(Button)({
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: '#43E081',
});

const AuthFormControl = styled(FormControl)({
    marginBottom: 15,
});

const AuthInput = styled(Input)({
    paddingLeft: 10,
    border: '2px solid #43E081',
    borderRadius: 10,
});

const AuthInputLabel = styled(InputLabel)({
    paddingLeft: 10,
    paddingTop: 3,
});

const SignBtnText = styled(Typography)({
    textTransform: 'uppercase',
    textDecoration: 'none',
    color: '#000',
});

const AuthPage: React.FC = () => {
    const location = useLocation();
    const history = useHistory();
    const isLogin = location.pathname === Routes.LOGIN_ROUTE;
    const { registration, login } = useActions();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const onSubmit = () => {
        if (isLogin) {
            login(email, password);
        } else {
            registration(email, password);
        }
        history.push(Routes.SHOP_ROUTE);
    };
    //
    // const onLogOut = () => {
    //     setUser(null)
    //     set
    // }

    const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    return (
        <AuthWrapper>
            <Typography variant="h4" align="center">
                {isLogin ? 'Login' : 'Registration'}
            </Typography>
            <AuthFormControl>
                <AuthInputLabel htmlFor="email">Email</AuthInputLabel>
                <AuthInput
                    id="email"
                    value={email}
                    onChange={onEmailChange}
                    type="email"
                    disableUnderline={true}
                />
            </AuthFormControl>
            <AuthFormControl>
                <AuthInputLabel htmlFor="password">Password</AuthInputLabel>
                <AuthInput
                    id="password"
                    value={password}
                    onChange={onPasswordChange}
                    type="password"
                    disableUnderline={true}
                />
            </AuthFormControl>
            <Grid container justify="center">
                {isLogin ? (
                    <SignBtnText>
                        <NavLink to={Routes.REGISTRATION_ROUTE}>
                            Sign Up
                        </NavLink>
                    </SignBtnText>
                ) : (
                    <SignBtnText>
                        <NavLink to={Routes.LOGIN_ROUTE}>Sign In</NavLink>
                    </SignBtnText>
                )}
            </Grid>
            <SubmitBtn onClick={onSubmit} variant="text">
                {isLogin ? 'Login' : 'Registration'}
            </SubmitBtn>
            {/*<SubmitBtn onClick={onLogOut} variant="text">*/}
            {/*    Logout*/}
            {/*</SubmitBtn>*/}
        </AuthWrapper>
    );
};

export default AuthPage;
