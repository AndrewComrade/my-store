import React from 'react';
import {Container, Grid} from "@material-ui/core";
import TypeBar from "../components/TypeBar";

const Shop = () => {
  return (
    <Container style={{paddingTop: 30}}>
      <Grid container>
        <Grid item xs={3}>
          <TypeBar/>
        </Grid>
        <Grid item xs={9}>

        </Grid>
      </Grid>
    </Container>
  );
};

export default Shop;
