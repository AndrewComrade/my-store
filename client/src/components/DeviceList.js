import React from 'react';
import {useSelector} from "react-redux";
import {Grid} from "@material-ui/core";
import DeviceItem from "./DeviceItem";

const DeviceList = () => {
  const {devices} = useSelector(({devices}) => devices);

  return (
    <Grid container>
      {devices && devices.map(device =>
        <DeviceItem key={device.id} {...device} />
      )}
    </Grid>
  );
};

export default DeviceList;
