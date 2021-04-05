import React, {useEffect} from 'react';
import {Box, Container, Grid} from '@material-ui/core';
import TypeBar from '../components/TypeBar';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import {fetchBrands, fetchDevices, fetchTypes} from '../http/deviceAPI';
import {setBrands, setDevices, setTotalCount, setTypes} from '../redux/actions/deviceActions';
import {useDispatch, useSelector} from 'react-redux';
import Pages from '../components/Pages';

const Shop = () => {
  const dispatch = useDispatch();
  const {page, selectedType, selectedBrand} = useSelector(({devices}) => devices);

  useEffect(() => {
    fetchTypes().then((data) => dispatch(setTypes(data)));
    fetchBrands().then((data) => dispatch(setBrands(data)));
    // fetchDevices(null, null, 1, 1).then((data) => {
    //   dispatch(setDevices(data.rows));
    //   dispatch(setTotalCount(data.count));
    // });
  }, []);

  useEffect(() => {
    fetchDevices(selectedType.id, selectedBrand.id, page, 1).then((data) => {
      dispatch(setDevices(data.rows));
      dispatch(setTotalCount(data.count));
    });
  }, [page, selectedBrand, selectedType]);

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
      <Grid container justify="center">
        <Box mt={2}>
          <Pages/>
        </Box>
      </Grid>
    </Container>
  );
};

export default Shop;
