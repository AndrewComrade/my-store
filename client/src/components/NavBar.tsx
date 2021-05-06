import React, { useState } from 'react';
import { AppBar, Button, IconButton, Toolbar } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import Smartphone from '@material-ui/icons/Smartphone';
import CreateTypeModal from '~/components/modals/CreateTypeModal';
import CreateBrandModal from '~/components/modals/CreateBrandModal';
import CreateDeviceModal from '~/components/modals/CreateDeviceModal';
import { useHistory } from 'react-router';
import { Routes } from '~/routes';
import { useActions } from '~/hooks/useActions';

const CreateBtn = styled(Button)({
    marginLeft: 15,
    backgroundColor: '#4F64E0',
    color: '#fff',
});

const NavBar = () => {
    const { createType } = useActions();
    const history = useHistory();

    const [isTypeOpen, setIsTypeOpen] = useState<boolean>(false);

    const onLogoClick = () => {
        history.push(Routes.SHOP_ROUTE);
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
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton color="inherit" onClick={onLogoClick}>
                    <Smartphone />
                </IconButton>
                <CreateBtn variant="outlined" onClick={onCreateTypeOpen}>
                    Crate Type
                </CreateBtn>
                <CreateBtn variant="outlined">Create Brand</CreateBtn>
                <CreateBtn variant="outlined">Create Device</CreateBtn>
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
