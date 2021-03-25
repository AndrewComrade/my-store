import React from 'react';
import {Grid} from "@material-ui/core";

const DeviceItem = ({id, img, name, price, rating}) => {

  return (
    <Grid item xs={3} style={{textAlign: 'center', marginTop: 20}}>
      Item
    </Grid>
  );
};

export default DeviceItem;
