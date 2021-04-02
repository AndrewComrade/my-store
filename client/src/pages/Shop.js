import React, {useEffect} from 'react';
import {Container, Grid} from '@material-ui/core';
import TypeBar from '../components/TypeBar';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import {fetchBrands, fetchDevices, fetchTypes} from '../http/deviceAPI';
import {setBrands, setDevices, setTypes} from '../redux/actions/deviceActions';
import {useDispatch} from 'react-redux';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = setInterval(() => {
      fetchTypes().then((data) => dispatch(setTypes(data)));
      fetchBrands().then((data) => dispatch(setBrands(data)));
      fetchDevices().then((data) => dispatch(setDevices(data.rows)));
    }, 5000);
    return () => {
      clearInterval(fetchData);
    };
  }, []);

  return (
    <Container style={{paddingTop: 30}}>
      <Grid container spacing={5}>
        <Grid item xs={3}>
          <TypeBar/>
          <BrandBar/>
        </Grid>
        <Grid item xs={9}>
          <DeviceList/>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Shop;
