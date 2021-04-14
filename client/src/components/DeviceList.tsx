import React from 'react';
import {Grid} from '@material-ui/core';
import DeviceItem from './DeviceItem';
import {useAppSelector} from '../types/hooks';

const DeviceList: React.FC = () => {
  const {devices} = useAppSelector(({devices}) => devices);

  console.log(devices);
  return (
    <Grid container spacing={2}>
      {!!devices && devices.map((device) =>
        <DeviceItem key={device.id} {...device} />,
      )}
    </Grid>
  );
};

export default DeviceList;
