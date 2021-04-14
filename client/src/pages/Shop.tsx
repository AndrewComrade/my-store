import React, {useEffect} from 'react';
import {Box, Container, Grid} from '@material-ui/core';
import TypeBar from '../components/TypeBar';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import {fetchBrands, fetchDevices, fetchTypes} from '../http/deviceAPI';
import {setBrands, setDevices, setTotalCount, setTypes} from '../redux/actions/deviceActions';
import Pages from '../components/Pages';
import {useAppDispatch, useAppSelector} from '../types/hooks';

const Shop: React.FC = () => {
  const dispatch = useAppDispatch();
  const {page, selectedType, selectedBrand, limit} = useAppSelector(({devices}) => devices);

  useEffect(() => {
    fetchTypes().then((data) => dispatch(setTypes(data)));
    fetchBrands().then((data) => dispatch(setBrands(data)));
  }, []);

  useEffect(() => {
    if (selectedType && selectedBrand) {
      fetchDevices(selectedType.id, selectedBrand.id, page, limit).then((data) => {
        dispatch(setDevices(data.rows));
        dispatch(setTotalCount(data.count));
      });
    }
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
