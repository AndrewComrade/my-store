import React from 'react';
import {Container, Grid} from "@material-ui/core";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";

const Shop = () => {
  return (
    <Container style={{paddingTop: 30}}>
      <Grid container spacing={5}>
        <Grid item xs={3}>
          <TypeBar />
          <BrandBar />
        </Grid>
        <Grid item xs={9}>
          <DeviceList />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Shop;
