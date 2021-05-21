import React, { useState } from 'react';
import { AppBar, Box, Button, IconButton, Toolbar } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import Smartphone from '@material-ui/icons/Smartphone';
import CreateTypeModal from '~/components/modals/CreateTypeModal';
import CreateBrandModal from '~/components/modals/CreateBrandModal';
import CreateDeviceModal from '~/components/modals/CreateDeviceModal';
import { useHistory } from 'react-router';
import { Routes } from '~/routes';
import { useActions } from '~/hooks/useActions';
import { useSelector } from '~/hooks/useTypedSelector';

const CreateBtn = styled(Button)({
    marginRight: 15,
    backgroundColor: '#4F64E0',
    color: '#fff',
});

const NavBar = () => {
    const history = useHistory();
    const { createType, setUser, setAuth } = useActions();
    const { isAuth } = useSelector((state) => state.user);

    const [isTypeOpen, setIsTypeOpen] = useState<boolean>(false);

    const onLogoClick = () => {
        history.push(Routes.SHOP_ROUTE);
    };

    const onLogin = () => {
        history.push(Routes.LOGIN_ROUTE);
    };

    const onLogout = () => {
        setUser(null);
        setAuth(false);
        localStorage.removeItem('token');
    };

    const onCreateTypeOpen = () => {
        setIsTypeOpen(true);
    };

    const onCreateTypeClose = () => {
        setIsTypeOpen(false);
    };

    const onCreateTypeSubmit = (type: string) => {
        setIsTypeOpen(false);
        createType(type);
        console.log('type', type);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton color="inherit" onClick={onLogoClick}>
                    <Smartphone />
                </IconButton>
                {isAuth && (
                    <Box>
                        <CreateBtn
                            variant="outlined"
                            onClick={onCreateTypeOpen}
                        >
                            Crate Type
                        </CreateBtn>
                        <CreateBtn variant="outlined">Create Brand</CreateBtn>
                        <CreateBtn variant="outlined">Create Device</CreateBtn>
                        <Button
                            variant="outlined"
                            color="inherit"
                            onClick={onLogout}
                        >
                            Logout
                        </Button>
                    </Box>
                )}
                {!isAuth && (
                    <Button
                        variant="outlined"
                        color="inherit"
                        onClick={onLogin}
                    >
                        Login
                    </Button>
                )}
            </Toolbar>
            <CreateTypeModal
                isOpen={isTypeOpen}
                handleClose={onCreateTypeClose}
                handleSubmit={onCreateTypeSubmit}
            />
            <CreateBrandModal />
            <CreateDeviceModal />
        </AppBar>
    );
};

export default NavBar;
