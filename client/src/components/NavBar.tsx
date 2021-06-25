import React, { useState } from 'react';
import { AppBar, Box, Button, IconButton, Toolbar } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import Smartphone from '@material-ui/icons/Smartphone';
import { useHistory } from 'react-router';
import { Routes } from '~/routes';
import { useActions } from '~/hooks/useActions';
import { useSelector } from '~/hooks/useTypedSelector';
import CreateType from '~/components/modals/CreateType';
import CreateBrand from '~/components/modals/CreateBrand';
import CreateDevice from '~/components/modals/CreateDevice';

const CreateBtn = styled(Button)({
    marginRight: 15,
    backgroundColor: '#4F64E0',
    color: '#fff',
});

const NavBar = () => {
    const history = useHistory();
    const { isAuth } = useSelector((state) => state.user);
    const { createType, createBrand, setUser, setAuth } = useActions();
    const [isTypeOpen, setIsTypeOpen] = useState<boolean>(false);
    const [isBrandOpen, setIsBrandOpen] = useState<boolean>(false);
    const [isDeviceOpen, setIsDeviceOpen] = useState<boolean>(false);

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
                            onClick={() => setIsTypeOpen(true)}
                        >
                            Crate Type
                        </CreateBtn>
                        <CreateBtn
                            variant="outlined"
                            onClick={() => setIsBrandOpen(true)}
                        >
                            Create Brand
                        </CreateBtn>
                        <CreateBtn
                            variant="outlined"
                            onClick={() => setIsDeviceOpen(true)}
                        >
                            Create Device
                        </CreateBtn>
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
            <CreateType
                isOpen={isTypeOpen}
                onClose={() => setIsTypeOpen(false)}
                onCreate={createType}
            />
            <CreateBrand
                isOpen={isBrandOpen}
                onClose={() => setIsBrandOpen(false)}
                onCreate={createBrand}
            />
            <CreateDevice />
        </AppBar>
    );
};

export default NavBar;
