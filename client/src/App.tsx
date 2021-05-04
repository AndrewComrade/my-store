import 'normalize.css';

import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from '~/components/AppRouter';
import NavBar from '~/components/NavBar';
import { useActions } from '~/hooks/useActions';
import { Container } from '@material-ui/core';

const App = () => {
    const { fetchTypes, fetchBrands } = useActions();

    useEffect(() => {
        fetchTypes();
        fetchBrands();
    }, []);

    return (
        <BrowserRouter>
            <NavBar />
            <Container>
                <AppRouter />
            </Container>
        </BrowserRouter>
    );
};

export default App;
